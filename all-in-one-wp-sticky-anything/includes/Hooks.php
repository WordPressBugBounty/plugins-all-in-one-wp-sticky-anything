<?php

namespace AI1WPSA;

defined('ABSPATH') || exit();

class Hooks {

	private static $instance = null;

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action('wp_head', array($this, 'render_sticky_header_styles'));
		add_action('wp_footer', array($this, 'render_social_icons'));
		add_action('wp_footer', array($this, 'render_cookie_consent'));
		add_action('in_widget_form', array($this, 'add_widget_option'), 10, 3);
		add_action('widget_update_callback', array($this, 'widget_update'), 10, 3);
		add_filter('dynamic_sidebar_params', array($this, 'add_fixed_widget_attribute'));
	}

	/**
	 * Render Sticky Header Background
	 *
	 * Scoped to `.ai1wpsa-fix-sticky.sticky` — the pair of classes every
	 * sticky-header code path in frontend.js (fix-default, Customizer,
	 * Elementor) adds only once the header is actually stuck to the top of
	 * the screen. So this background only ever shows up in that "active"
	 * state, never on the header's normal in-flow appearance.
	 *
	 * @return void
	 */
	public function render_sticky_header_styles() {
		$bg_type    = ai1wpsa_get_settings('stickyHeaderBgType', 'color');
		$color_type = ai1wpsa_get_settings('stickyHeaderColorType', 'solid');
		$bg_color   = ai1wpsa_sanitize_css_color(ai1wpsa_get_settings('stickyHeaderBgColor'));

		$shrink               = (bool) ai1wpsa_get_settings('stickyShrink', false);
		$shrink_height        = ai1wpsa_get_settings('stickyShrinkHeight');
		$shrink_logo_selector = ai1wpsa_sanitize_css_selector(ai1wpsa_get_settings('stickyShrinkLogoSelector', ''));
		$shrink_logo_width    = ai1wpsa_get_settings('stickyShrinkLogoWidth');

		$declarations = [];

		if (! empty($bg_color)) {
			$declarations[] = 'background-color: ' . $bg_color;
		}

		/**
		 * Filters the sticky header's background CSS declarations.
		 *
		 * @since 1.3.0
		 * @param string[] $declarations Declarations built so far.
		 * @param string   $bg_type      Raw stickyHeaderBgType setting.
		 * @param string   $color_type   Raw stickyHeaderColorType setting.
		 */
		$declarations = apply_filters('ai1wpsa_sticky_header_bg_declarations', $declarations, $bg_type, $color_type);

		if ($shrink && is_numeric($shrink_height) && $shrink_height > 0) {
			$declarations[] = 'height: ' . absint($shrink_height) . 'px';
			$declarations[] = 'min-height: ' . absint($shrink_height) . 'px';
		}

		$logo_declarations = [];

		if ($shrink && ! empty($shrink_logo_selector) && is_numeric($shrink_logo_width) && $shrink_logo_width > 0) {
			$logo_declarations[] = 'width: ' . absint($shrink_logo_width) . 'px';
			$logo_declarations[] = 'height: auto';
		}

		if (empty($declarations) && empty($logo_declarations)) {
			return;
		}

		// Every value above was validated for its exact CSS position (colors
		// against a color allowlist, sizes with absint). The Pro filter's
		// declarations are validated as a whole below. Anything that fails
		// validation is dropped instead of being printed.
		$declarations      = array_values(array_filter(array_map(array($this, 'validate_css_declaration'), $declarations)));
		$logo_declarations = array_values(array_filter(array_map(array($this, 'validate_css_declaration'), $logo_declarations)));

		if (empty($declarations) && empty($logo_declarations)) {
			return;
		}
		?>
		<style>
			<?php if ($shrink) : ?>
			.ai1wpsa-fix-sticky {
				transition: height .3s ease, min-height .3s ease, background-color .3s ease;
			}
			<?php if (! empty($shrink_logo_selector)) : ?>
			.ai1wpsa-fix-sticky <?php echo $shrink_logo_selector; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- validated against a selector allowlist in ai1wpsa_sanitize_css_selector(); HTML escaping would break the ">" combinator. ?> {
				transition: width .3s ease, height .3s ease;
			}
			<?php endif; ?>
			<?php endif; ?>

			<?php if (! empty($declarations)) : ?>
			.ai1wpsa-fix-sticky.sticky {
				<?php
				// Each declaration passed validate_css_declaration(). They must
				// NOT be HTML-escaped here, as that would entity-encode the "&"
				// in an image URL's query string and break it.
				echo implode(' !important;' . "\n\t\t\t\t", $declarations); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- validated in validate_css_declaration().
				?> !important;
			}
			<?php endif; ?>

			<?php if (! empty($logo_declarations)) : ?>
			.ai1wpsa-fix-sticky.sticky <?php echo $shrink_logo_selector; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- validated against a selector allowlist in ai1wpsa_sanitize_css_selector(). ?> {
				<?php echo implode(' !important;' . "\n\t\t\t\t", $logo_declarations); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- validated in validate_css_declaration(). ?> !important;
			}
			<?php endif; ?>
		</style>
		<?php
	}

	/**
	 * Validate a single CSS declaration ("property: value") for output.
	 *
	 * WordPress has no CSS-context escaping function, so declarations are
	 * validated instead: the property must be a plain CSS property name, and
	 * the value may not contain anything that could end the declaration or
	 * rule (";", "{", "}"), close the <style> element ("<", ">"), start a
	 * comment ("/*") or use CSS escapes ("\"). Invalid declarations are
	 * dropped entirely rather than repaired.
	 *
	 * @param string $declaration Declaration to validate.
	 * @return string The declaration, or '' when invalid.
	 */
	private function validate_css_declaration($declaration) {
		if (! is_string($declaration)) {
			return '';
		}

		$declaration = trim($declaration);

		if (! preg_match('/^-{0,2}[a-z][a-z0-9-]*\s*:\s*[^<>{};\\\\]+$/i', $declaration) || false !== strpos($declaration, '/*')) {
			return '';
		}

		return $declaration;
	}

	/**
	 * Build a block of CSS custom properties for output inside a rule.
	 *
	 * Each entry ("--name: value;"), including any added by Premium filters,
	 * is validated with validate_css_declaration() and dropped if invalid.
	 *
	 * @param string[] $css_vars Custom property declarations.
	 * @return string
	 */
	private function build_css_vars($css_vars) {
		$valid = array();

		foreach ((array) $css_vars as $css_var) {
			$css_var = $this->validate_css_declaration(rtrim(trim((string) $css_var), ';'));

			if ('' !== $css_var) {
				$valid[] = $css_var . ';';
			}
		}

		return implode("\n\t", $valid);
	}

	/**
	 * Render Social Icons
	 *
	 * @return void
	 */
	public function render_social_icons() {
		$sticky_social_icon 	= ai1wpsa_get_settings('stickySocialIcon');
		$display		 		= ai1wpsa_get_settings('stickySocialIconDisplay', 'everywhere');
		$device 				= ai1wpsa_get_settings('stickySocialIconDevice', 'all');
		$type 					= ai1wpsa_get_settings('stickySocialIconType', 'dashicon');
		$position 				= ai1wpsa_get_settings('stickySocialIconPosition', 'right');
		$style 					= ai1wpsa_get_settings('stickySocialIconStyle', 'square') === 'square' ? '0' : (ai1wpsa_get_settings('stickySocialIconStyle') === 'rounded' ? '6px' : '50%');
		$icons 					= ai1wpsa_get_settings('stickySocialIcons');
		$icon_color				= ai1wpsa_sanitize_css_color(ai1wpsa_get_settings('stickySocialIconsIconColor'));
		$icon_hover_color 		= ai1wpsa_sanitize_css_color(ai1wpsa_get_settings('stickySocialIconsIconHoverColor'));
		$icon_bg_color			= ai1wpsa_sanitize_css_color(ai1wpsa_get_settings('stickySocialIconsIconBgColor'));
		$icon_bg_hover_color 	= ai1wpsa_sanitize_css_color(ai1wpsa_get_settings('stickySocialIconsIconHoverBgColor'));
		$icon_menu_bg_color 	= ai1wpsa_sanitize_css_color(ai1wpsa_get_settings('stickySocialIconsMenuBgColor'));

		if (! $sticky_social_icon) {
			return;
		}

		// Display
		if (! apply_filters('ai1wpsa_social_icon_display_allowed', true, $display)) {
			return;
		}

		$css_vars = [];

		if (! empty($style)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-style: ' . $style . ';';
		}

		if (! empty($icon_color)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-color: ' . $icon_color . ';';
		}

		// Icon Hover Color / Icon Background Hover Color are Premium — the
		// add-on hooks this filter to add the corresponding CSS custom
		// properties. Unhooked, hover colors just aren't customizable.
		$css_vars = apply_filters('ai1wpsa_social_icon_hover_css_vars', $css_vars, $icon_hover_color, $icon_bg_hover_color);

		if (! empty($icon_bg_color)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-bg-color: ' . $icon_bg_color . ';';
		}

		if (! empty($icon_menu_bg_color)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-menu-bg-color: ' . $icon_menu_bg_color . ';';
		}

		// Device targeting: the free plugin only ever shows on all devices.
		// Desktop/Mobile-only targeting is Premium — the add-on hooks this
		// filter to actually check the current device; unhooked, always allows.
		if (apply_filters('ai1wpsa_social_icon_device_allowed', true, $device) && ! empty($icons)) {
?>
			<style>
				.ai1wpsa-social-icons {
					<?php echo esc_attr($this->build_css_vars($css_vars)); ?>
				}
			</style>
			<div class="ai1wpsa-social-icons <?php echo esc_attr($position); ?>">
				<ul>
					<?php
					foreach ($icons as $icon) {
					?>
						<li>
							<a href="<?php echo esc_url($icon['url']); ?>" target="_blank">
								<?php
								$dashicon_markup = '<i class="dashicons ' . esc_attr($icon['value']) . '"></i>';

								if ($type === 'dashicons' || $type === 'dashicon') {
									echo wp_kses($dashicon_markup, [
										'i' => [
											'class' => []
										]
									]);
								} else {
									echo wp_kses(apply_filters('ai1wpsa_social_icon_markup', $dashicon_markup, $type, $icon), [
										'i' => [
											'class' => []
										]
									]);
								}
								?>
							</a>
						</li>
					<?php
					}
					?>
				</ul>
			</div>
		<?php
		}
	}

	/**
	 * Render Cookie Consent
	 *
	 * @return void
	 */
	public function render_cookie_consent() {
		$enabled = (bool) ai1wpsa_get_settings('stickyCookieConsent', false);
		$message = (string) ai1wpsa_get_settings('stickyCookieConsentMessage', __('We use cookies to improve your experience on our site. By using our site, you consent to cookies.', 'all-in-one-wp-sticky-anything'));
		$buttons = (array) ai1wpsa_get_settings('stickyCookieConsentButtons', array(
			array(
				'id'    => 'accept',
				'type'  => 'accept',
				'text'  => __('Accept', 'all-in-one-wp-sticky-anything'),
				'status' => true,
			),
			array(
				'id'    => 'reject',
				'type'  => 'reject',
				'text'  => __('Reject', 'all-in-one-wp-sticky-anything'),
				'status' => true,
			),
		));
		$layout = (string) ai1wpsa_get_settings('stickyCookieConsentLayout', 'long');
		$position = (string) ai1wpsa_get_settings('stickyCookieConsentPosition', 'bottom-right');
		$close_button = (bool) ai1wpsa_get_settings('stickyCookieConsentCloseButton', true);

		// styling variables
		$banner_style = (array) ai1wpsa_get_settings('stickyCookieConsentBannerStyle', array());
		$banner_bg_color = ai1wpsa_sanitize_css_color($banner_style['bgColor'] ?? '');
		$banner_text_color = ai1wpsa_sanitize_css_color($banner_style['textColor'] ?? '');
		$banner_font_size = ai1wpsa_sanitize_css_size($banner_style['fontSize'] ?? '');
		$btn_style = (array) ai1wpsa_get_settings('stickyCookieConsentButtonStyle', array());
		$accept_btn_bg = ai1wpsa_sanitize_css_color($btn_style['acceptBtnBg'] ?? '');
		$accept_text_color = ai1wpsa_sanitize_css_color($btn_style['acceptTextColor'] ?? '');
		$reject_btn_bg = ai1wpsa_sanitize_css_color($btn_style['rejectBtnBg'] ?? '');
		$reject_text_color = ai1wpsa_sanitize_css_color($btn_style['rejectTextColor'] ?? '');

		if (! $enabled) {
			return;
		}

		if (isset($_COOKIE['ai1wpsa_preferences'])) {
			return;
		};

		$css_vars = [];
		if (! empty($banner_bg_color)) {
			$css_vars[] = '--ai1wpsa-cookie-consent-bg-color: ' . $banner_bg_color . ';';
		}

		if (! empty($banner_text_color)) {
			$css_vars[] = '--ai1wpsa-cookie-consent-text-color: ' . $banner_text_color . ';';
		}

		if (! empty($banner_font_size)) {
			$css_vars[] = '--ai1wpsa-cookie-consent-font-size: ' . $banner_font_size . ';';
		}

		if (! empty($accept_btn_bg)) {
			$css_vars[] = '--ai1wpsa-cookie-consent-accept-btn-bg: ' . $accept_btn_bg . ';';
		}

		if (! empty($accept_text_color)) {
			$css_vars[] = '--ai1wpsa-cookie-consent-accept-text-color: ' . $accept_text_color . ';';
		}

		if (! empty($reject_btn_bg)) {
			$css_vars[] = '--ai1wpsa-cookie-consent-reject-btn-bg: ' . $reject_btn_bg . ';';
		}

		if (! empty($reject_text_color)) {
			$css_vars[] = '--ai1wpsa-cookie-consent-reject-text-color: ' . $reject_text_color . ';';
		}
		// Build the free-tier "Long Banner" markup. This is always the fallback:
		// if Premium isn't active (or a filter callback declines to handle the
		// current layout), this is exactly what gets printed.
		ob_start();
		?>
		<style>
			.ai1wpsa-cookie-consent {
				<?php echo esc_attr($this->build_css_vars($css_vars)); ?>
			}
		</style>
		<div id="ai1wpsa-cookie-consent" class="ai1wpsa-cookie-consent ai1wpsa-cookie-consent--long">
			<div class="ai1wpsa-cookie-consent-message">
				<?php echo esc_html($message); ?>
			</div>
			<div class="ai1wpsa-cookie-consent-buttons">
				<?php foreach ($buttons as $button) :

					if (! isset($button['status']) || ! $button['status']) {
						continue;
					}

					$id   = $button['id']   ?? '';
					$type = $button['type'] ?? '';
					$text = $button['text'] ?? '';

				?>
					<button type="button" class="ai1wpsa-cookie-consent-button <?php echo esc_attr($id); ?>">
						<?php echo esc_html($text); ?>
					</button>
				<?php endforeach; ?>

			</div>

			<?php if ($close_button) { ?>
				<button type="button" class="close-button">
					<i class="dashicons dashicons-no"></i>
				</button>
			<?php } ?>
		</div>
	<?php
		$default_markup = ob_get_clean();

		/**
		 * Filters the final cookie-consent banner markup.
		 *
		 * The Premium add-on hooks this to render the Floating/Modal layouts —
		 * it should return $default_markup untouched when $context['layout']
		 * isn't one it owns, so the free "long" banner keeps working normally.
		 *
		 * @since 1.2.0
		 * @param string $default_markup The free plugin's own "long" banner HTML.
		 * @param array  $context {
		 *     @type string $layout       Raw layout setting (already downgraded to 'long' if not Pro).
		 *     @type string $position     Floating position setting.
		 *     @type string $message      Banner message text.
		 *     @type array  $buttons      Button definitions.
		 *     @type bool   $close_button Whether the close (x) button is enabled.
		 *     @type array  $css_vars     Pre-built CSS custom property declarations.
		 * }
		 */
		$banner_markup = apply_filters('ai1wpsa_cookie_consent_banner_markup', $default_markup, [
			'layout'       => $layout,
			'position'     => $position,
			'message'      => $message,
			'buttons'      => $buttons,
			'close_button' => $close_button,
			'css_vars'     => $css_vars,
		]);

		// Allowlist covers both this method's own "long" banner and the Premium
		// add-on's Floating/Modal markup (an overlay wrapper around the same
		// banner structure) — see Modules\CookieConsent::render_banner_markup()
		// in the Premium plugin. Update both together if either markup changes.
		echo wp_kses($banner_markup, [
			'style'  => [],
			'div'    => [
				'id'    => [],
				'class' => [],
			],
			'button' => [
				'type'  => [],
				'class' => [],
			],
			'i'      => [
				'class' => [],
			],
		]);
	}

	/**
	 * Add a widget option to display a fixed widget checkbox.
	 *
	 * @param WP_Widget $widget     Widget object.
	 * @param string    $return    Unused.
	 * @param array     $instance  Widget instance.
	 */
	public function add_widget_option($widget, $return, $instance) {
		$fixed_widget = ai1wpsa_get_settings('fixedWidget', false);

		if (! $fixed_widget) {
			return;
		}

		$ai1wpsa_fixed_widget = ! empty($instance['ai1wpsa_fixed_widget']) ? (bool) $instance['ai1wpsa_fixed_widget'] : false;
	?>
		<p>
			<input class="checkbox" type="checkbox" <?php checked($ai1wpsa_fixed_widget); ?> id="<?php echo esc_attr($widget->get_field_id('ai1wpsa_fixed_widget')); ?>" name="<?php echo esc_attr($widget->get_field_name('ai1wpsa_fixed_widget')); ?>" />
			<label for="<?php echo esc_attr($widget->get_field_id('ai1wpsa_fixed_widget')); ?>"><?php esc_html_e('Fixed Widget', 'all-in-one-wp-sticky-anything'); ?></label>
		</p>
<?php
	}

	/**
	 * Updates a particular instance of a widget.
	 *
	 * @param array $instance The widget instance.
	 * @param array $new_instance The new instance.
	 * @param array $old_instance The old instance.
	 *
	 * @return array The updated widget instance.
	 *
	 * @since 1.0.0
	 */
	public function widget_update($instance, $new_instance, $old_instance) {
		$fixed_widget = ai1wpsa_get_settings('fixedWidget', false);

		if (! $fixed_widget) {
			return $instance;
		}

		$instance['ai1wpsa_fixed_widget'] = isset($new_instance['ai1wpsa_fixed_widget']) ? (bool) $new_instance['ai1wpsa_fixed_widget'] : false;

		return $instance;
	}


	/**
	 * Add a fixed widget attribute to a widget.
	 *
	 * @param array $params Array of parameters passed to the 'widget_update_filter' filter.
	 *
	 * @return array The modified array of parameters.
	 *
	 * @since 1.0.0
	 */
	public function add_fixed_widget_attribute($params) {
		// Widget settings.
		global $wp_registered_widgets;
		$widget_id        = $params[0]['widget_id'];
		$widget_obj       = $wp_registered_widgets[$widget_id];
		$widget_opttions  = get_option($widget_obj['callback'][0]->option_name);
		$widget_num       = $widget_obj['params'][0]['number'];
		$fixed_widget     = isset($widget_opttions[$widget_num]['ai1wpsa_fixed_widget']) ? $widget_opttions[$widget_num]['ai1wpsa_fixed_widget'] : '';

		if (empty($fixed_widget) || $fixed_widget === false) {
			return $params;
		}

		// Insert inner wrapper immediately after widget opening tag.
		$params[0]['before_widget'] = preg_replace(
			'/(<[^>]+>)/',
			'$1<div data-ai1wpsa-fixed="true">',
			$params[0]['before_widget'],
			1
		);

		// Close inner wrapper before widget closes.
		$params[0]['after_widget'] = '</div>' . $params[0]['after_widget'];

		return $params;
	}

	/**
	 * Get instance
	 *
	 * @return Hooks
	 */
	public static function instance() {
		if (null === self::$instance) {
			self::$instance = new self;
		}

		return self::$instance;
	}
}

Hooks::instance();
