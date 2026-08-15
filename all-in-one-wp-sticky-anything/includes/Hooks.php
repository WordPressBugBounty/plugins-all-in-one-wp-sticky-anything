<?php

namespace AI1WPSA;

defined('ABSPATH') || exit();

class Hooks {

	private static $instance = null;

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action('wp_print_styles', array($this, 'render_custom_css'));
		add_action('wp_footer', array($this, 'render_social_icons'));
		add_action('wp_footer', array($this, 'render_cookie_consent'));
		add_action('in_widget_form', array($this, 'add_widget_option'), 10, 3);
		add_action('widget_update_callback', array($this, 'widget_update'), 10, 3);
		add_filter('dynamic_sidebar_params', array($this, 'add_fixed_widget_attribute'));
	}

	/**
	 * Render Custom CSS
	 *
	 * @return void
	 */
	public function render_custom_css() {
		$css = ai1wpsa_get_settings('customCss');
		if (! empty($css)) {
			echo '<style type="text/css">' . wp_strip_all_tags($css) . '</style>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
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
		$icon_color				= ai1wpsa_get_settings('stickySocialIconsIconColor');
		$icon_hover_color 		= ai1wpsa_get_settings('stickySocialIconsIconHoverColor');
		$icon_bg_color			= ai1wpsa_get_settings('stickySocialIconsIconBgColor');
		$icon_bg_hover_color 	= ai1wpsa_get_settings('stickySocialIconsIconHoverBgColor');
		$icon_menu_bg_color 	= ai1wpsa_get_settings('stickySocialIconsMenuBgColor');

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
					<?php echo esc_attr(implode("\n\t", $css_vars)); ?>
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
		$banner_bg_color = $banner_style['bgColor'] ?? '';
		$banner_text_color = $banner_style['textColor'] ?? '';
		$banner_font_size = $banner_style['fontSize'] ?? '';
		$btn_style = (array) ai1wpsa_get_settings('stickyCookieConsentButtonStyle', array());
		$accept_btn_bg = $btn_style['acceptBtnBg'] ?? '';
		$accept_text_color = $btn_style['acceptTextColor'] ?? '';
		$reject_btn_bg = $btn_style['rejectBtnBg'] ?? '';
		$reject_text_color = $btn_style['rejectTextColor'] ?? '';

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
				<?php echo esc_attr(implode("\n\t", $css_vars)); ?>
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
