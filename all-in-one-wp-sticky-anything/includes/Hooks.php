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
			echo '<style type="text/css">' . $css . '</style>';
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

		// get post type
		$post_type = get_post_type();

		if ($display !== 'everywhere' && !(($display === 'home' && is_front_page()) || ($display === 'blog' && is_home()) || ($display === $post_type))) {
			return;
		}

		if ($device !== 'all' && $device !== 'desktop' && $device !== 'mobile') {
			return;
		}

		$css_vars = [];

		if (! empty($style)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-style: ' . $style . ';';
		}

		if (! empty($icon_color)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-color: ' . $icon_color . ';';
		}

		if (! empty($icon_hover_color)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-hover-color: ' . $icon_hover_color . ';';
		}

		if (! empty($icon_bg_color)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-bg-color: ' . $icon_bg_color . ';';
		}

		if (! empty($icon_bg_hover_color)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-bg-hover-color: ' . $icon_bg_hover_color . ';';
		}

		if (! empty($icon_menu_bg_color)) {
			$css_vars[] = '--aiwpsa-sticky-social-icon-menu-bg-color: ' . $icon_menu_bg_color . ';';
		}

		if (ai1wpsa_should_show_device_content($device) && ! empty($icons)) {
?>
			<style>
				.ai1wpsa-social-icons {
					<?php echo implode("\n\t", $css_vars); ?>
				}
			</style>
			<div class="ai1wpsa-social-icons <?php echo esc_attr($position); ?>">
				<ul>
					<?php
					foreach ($icons as $icon) {
					?>
						<li>
							<a href="<?php echo esc_url($icon['url']); ?>" target="_blank">
								<?php if ($type === 'fontawesome') { ?>
									<i class="fa-brands <?php echo esc_attr($icon['value']); ?>"></i>
								<?php } else if ($type === 'bootstrap') { ?>
									<i class="bi <?php echo esc_attr($icon['value']); ?>"></i>
								<?php } else if ($type === 'remixicon') { ?>
									<i class="<?php echo esc_attr($icon['value']); ?>"></i>
								<?php } else if ($type === 'lineicon') { ?>
									<i class="lni <?php echo esc_attr($icon['value']); ?>"></i>
								<?php } else { ?>
									<i class="dashicons <?php echo esc_attr($icon['value']); ?>"></i>
								<?php } ?>
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
		$position = (string) ai1wpsa_get_settings('stickyCookieConsentPosition', 'bottom');
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
		?>
		<style>
			.ai1wpsa-cookie-consent {
				<?php echo implode("\n\t", $css_vars); ?>
			}
		</style>
		<div id="ai1wpsa-cookie-consent" class="ai1wpsa-cookie-consent <?php echo esc_attr($position); ?>">
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
