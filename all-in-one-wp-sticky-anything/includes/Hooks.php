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
		add_action('wp_footer', array($this, 'render_sticky_forms'));

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
			echo '<style type="text/css">' . esc_attr($css) . '</style>';
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
				<?php echo esc_attr(implode("\n\t", $css_vars)); ?>
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

	public function render_sticky_forms() {
		$sticky_forms_enabled = (bool) ai1wpsa_get_settings('stickyFloatingForms', false);

		if (! $sticky_forms_enabled) {
			return;
		}

		$sticky_forms_layout = (string) ai1wpsa_get_settings('stickyFloatingFormsLayout', 'button');
		$sticky_forms_position = (string) ai1wpsa_get_settings('stickyFloatingFormsPosition', 'bottom-right');
		$sticky_forms_device = (string) ai1wpsa_get_settings('stickyFloatingFormsDevice', 'all');
		$sticky_forms_button_text = (string) ai1wpsa_get_settings('stickyFloatingFormsButtonText', __('Contact Us', 'all-in-one-wp-sticky-anything'));
		$sticky_forms_modal_title = (string) ai1wpsa_get_settings('stickyFloatingFormsModalTitle', __('Send us a message', 'all-in-one-wp-sticky-anything'));
		$sticky_forms_modal_subtitle = (string) ai1wpsa_get_settings('stickyFloatingFormsModalSubtitle', __('Fill out the form below and we\'ll get back to you soon.', 'all-in-one-wp-sticky-anything'));
		$sticky_forms_modal_status = (string) ai1wpsa_get_settings('stickyFloatingFormsModalStatus', __('Online now · replies in ~1 hour.', 'all-in-one-wp-sticky-anything'));
		$sticky_forms_teaser_message = (string) ai1wpsa_get_settings('stickyFloatingFormsTeaserMessage', __('👋 Have a question? We usually reply within the hour.', 'all-in-one-wp-sticky-anything'));
		$sticky_forms_bar_button_text = (string) ai1wpsa_get_settings('stickyFloatingFormsBarButtonText', __('Contact Us', 'all-in-one-wp-sticky-anything'));
		$sticky_forms_bar_text = (string) ai1wpsa_get_settings('stickyFloatingFormsBarText', __('👋 Have a question? We usually reply within the hour.', 'all-in-one-wp-sticky-anything'));
		$sticky_forms_close_button = (bool) ai1wpsa_get_settings('stickyFloatingFormsCloseButton', true);

		$sticky_forms_type = (string) ai1wpsa_get_settings('stickyFloatingFormsType', 'default');
		$sticky_forms_consent_required = (bool) ai1wpsa_get_settings('stickyFloatingFormsConsentRequired', false);
		$sticky_forms_privacy_policy_url = (string) ai1wpsa_get_settings('stickyFloatingFormsPrivacyPolicyUrl', '');
		$sticky_forms_success_title = (string) ai1wpsa_get_settings('stickyFloatingFormsSuccessTitle', __('Thank you!', 'all-in-one-wp-sticky-anything'));
		$sticky_forms_success_message = (string) ai1wpsa_get_settings('stickyFloatingFormsSuccessMessage', __('Thanks for reaching out. Someone from our team will get back to you within the hour.', 'all-in-one-wp-sticky-anything'));

		$sticky_forms_display_for = (string) ai1wpsa_get_settings('stickyFloatingFormsDisplayFor', 'all');
		$sticky_forms_display_on = (string) ai1wpsa_get_settings('stickyFloatingFormsDisplayOn', 'everywhere');

		$sticky_forms_attention_effect = (bool) ai1wpsa_get_settings('stickyFloatingFormsAttentionEffect', false);
		$sticky_forms_attention_effect_type = (string) ai1wpsa_get_settings('stickyFloatingFormsAttentionEffectType', 'pulse');
		$sticky_forms_unread_badge = (bool) ai1wpsa_get_settings('stickyFloatingFormsUnreadBadge', false);
	?>
		<div class="ai1wpsa-sticky-forms">
			<?php if (! empty($sticky_forms_teaser_message)) { ?>
				<div class="ai1wpsa-teaser" id="ai1wpsaTeaser" role="button" tabindex="0" aria-label="Open contact form">
					<?php echo esc_html($sticky_forms_teaser_message); ?>
				</div>
			<?php } ?>

			<?php if (($sticky_forms_layout === 'button' || $sticky_forms_layout === 'icon') && ai1wpsa_should_show_device_content($sticky_forms_device) && ($sticky_forms_display_on === 'everywhere' || ($sticky_forms_display_on === 'home' && is_front_page()) || ($sticky_forms_display_on === 'blog' && is_home()) || ($sticky_forms_display_on === get_post_type()))) { ?>
				<div class="ai1wpsa-float-wrap" id="ai1wpsaFloatWrap">
					<button class="ai1wpsa-float-btn" id="ai1wpsaOpenBtn" type="button" aria-haspopup="dialog" aria-controls="ai1wpsaOverlay"
						aria-label="Open contact form">
						<span class="ai1wpsa-float-btn__badge" id="ai1wpsaBadge" aria-hidden="true">1</span>
						<span class="ai1wpsa-float-btn__icon" aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H8L4 20V5Z"
									stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
								<circle cx="8.5" cy="10" r="1" fill="currentColor" />
								<circle cx="12" cy="10" r="1" fill="currentColor" />
								<circle cx="15.5" cy="10" r="1" fill="currentColor" />
							</svg>
						</span>

						<?php if ($sticky_forms_layout === 'button') { ?>
							<span class="ai1wpsa-float-btn__text"><?php echo esc_html($sticky_forms_button_text); ?></span>
						<?php } ?>
					</button>
				</div>
			<?php } ?>

			<div class="ai1wpsa-overlay" id="ai1wpsaOverlay" role="presentation">
				<div class="ai1wpsa-modal" role="dialog" aria-modal="true" aria-labelledby="ai1wpsaModalTitle" id="ai1wpsaModal">

					<div class="ai1wpsa-modal__drag-handle" aria-hidden="true"></div>

					<button class="ai1wpsa-modal__close" id="ai1wpsaCloseBtn" type="button" aria-label="<?php esc_attr_e('Close dialog', 'all-in-one-wp-sticky-anything'); ?>">
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
						</svg>
					</button>

					<div class="ai1wpsa-modal__header">
						<div class="ai1wpsa-modal__avatar" aria-hidden="true"><?php echo esc_html('Monzur Alam'); ?></div>
						<div>
							<h2 class="ai1wpsa-modal__title" id="ai1wpsaModalTitle"><?php echo esc_html($sticky_forms_modal_title); ?></h2>
							<p class="ai1wpsa-modal__subtitle"><?php echo esc_html($sticky_forms_modal_subtitle); ?></p>
							<span class="ai1wpsa-modal__status"><?php echo esc_html($sticky_forms_modal_status); ?></span>
						</div>
					</div>

					<div class="ai1wpsa-modal__body">

						<?php if ($sticky_forms_type === 'default') { ?>
							<form class="ai1wpsa-form-view" id="ai1wpsaForm" novalidate>

								<div class="ai1wpsa-field" id="ai1wpsaNameField">
									<label for="ai1wpsaName"><?php esc_html_e('Your name', 'all-in-one-wp-sticky-anything'); ?></label>
									<input type="text" id="ai1wpsaName" name="ai1wpsa_name" autocomplete="name">
									<span class="ai1wpsa-field__error"><?php esc_html_e('Please enter your name.', 'all-in-one-wp-sticky-anything'); ?></span>
								</div>

								<div class="ai1wpsa-field" id="ai1wpsaEmailField">
									<label for="ai1wpsaEmail"><?php esc_html_e('Email address', 'all-in-one-wp-sticky-anything'); ?></label>
									<input type="email" id="ai1wpsaEmail" name="ai1wpsa_email" autocomplete="email">
									<span class="ai1wpsa-field__error"><?php esc_html_e('Enter a valid email address.', 'all-in-one-wp-sticky-anything'); ?></span>
								</div>

								<div class="ai1wpsa-field" id="ai1wpsaMessageField">
									<label for="ai1wpsaMessage"><?php esc_html_e('Message', 'all-in-one-wp-sticky-anything'); ?></label>
									<textarea id="ai1wpsaMessage" name="ai1wpsa_message"></textarea>
									<span class="ai1wpsa-field__error"><?php esc_html_e('Tell us a little about your enquiry.', 'all-in-one-wp-sticky-anything'); ?></span>
								</div>

								<!-- Honeypot: hidden from real visitors, catches simple bots. -->
								<div class="ai1wpsa-hp" aria-hidden="true">
									<label for="ai1wpsaCompanyHp"><?php esc_html_e('Company', 'all-in-one-wp-sticky-anything'); ?></label>
									<input type="text" id="ai1wpsaCompanyHp" name="ai1wpsa_company_hp" tabindex="-1" autocomplete="off">
								</div>

								<?php if ((int) $sticky_forms_consent_required) : ?>
									<div class="ai1wpsa-consent">
										<input type="checkbox" id="ai1wpsaConsentCheck" name="ai1wpsa_consent">
										<label for="ai1wpsaConsentCheck">
											<?php
											if (! empty($sticky_forms_privacy_policy_url)) {
												printf(
													/* translators: %s: privacy policy link */
													esc_html__('I agree to the %s and consent to being contacted about my enquiry.', 'all-in-one-wp-sticky-anything'),
													'<a href="' . esc_url($sticky_forms_privacy_policy_url) . '" target="_blank" rel="noopener noreferrer">' . esc_html__('privacy policy', 'all-in-one-wp-sticky-anything') . '</a>'
												);
											} else {
												esc_html_e('I agree to the privacy policy and consent to being contacted about my enquiry.', 'all-in-one-wp-sticky-anything');
											}
											?>
										</label>
									</div>
								<?php endif; ?>

								<?php wp_nonce_field('ai1wpsa_submit_form', 'ai1wpsa_nonce_field'); ?>

								<button type="submit" class="ai1wpsa-submit" id="ai1wpsaSubmitBtn">
									<span class="ai1wpsa-spinner" aria-hidden="true"></span>
									<span class="ai1wpsa-submit__label"><?php esc_html_e('Send message', 'all-in-one-wp-sticky-anything'); ?></span>
								</button>
							</form>

							<div class="ai1wpsa-success" id="ai1wpsaSuccess">
								<div class="ai1wpsa-success__icon" aria-hidden="true">
									<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5 12.5L10 17.5L19 7.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
									</svg>
								</div>
								<p class="ai1wpsa-success__title"><?php echo esc_html($sticky_forms_success_title); ?></p>
								<p class="ai1wpsa-success__text"><?php echo esc_html($sticky_forms_success_message); ?></p>
								<button class="ai1wpsa-success__close" id="ai1wpsaSuccessCloseBtn" type="button"><?php esc_html_e('Close', 'all-in-one-wp-sticky-anything'); ?></button>
							</div>
						<?php } else { ?>
							<div class="ai1wpsa-form-view" id="ai1wpsaForm">
								<?php echo do_shortcode('[contact-form-7 id="123" title="Contact form 1"]'); ?>
							</div>
						<?php } ?>

					</div>
				</div>
			</div>

			<?php if ($sticky_forms_layout === 'bar' && ai1wpsa_should_show_device_content($sticky_forms_device) && ($sticky_forms_display_on === 'everywhere' || ($sticky_forms_display_on === 'home' && is_front_page()) || ($sticky_forms_display_on === 'blog' && is_home()) || ($sticky_forms_display_on === get_post_type()))) { ?>
				<div class="ai1wpsa-bar" id="ai1wpsaBar">
					<span class="ai1wpsa-bar__text"><?php echo wp_kses_post($sticky_forms_bar_text); ?></span>
					<button class="ai1wpsa-bar__cta" id="ai1wpsaBarCta" type="button"><?php echo esc_html($sticky_forms_bar_button_text); ?></button>
					<button class="ai1wpsa-bar__dismiss" id="ai1wpsaBarDismiss" type="button" aria-label="<?php esc_attr_e('Dismiss bar', 'all-in-one-wp-sticky-anything'); ?>">
						<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
						</svg>
					</button>
				</div>
			<?php } ?>


			<span class="ai1wpsa-sr-only" role="status" id="ai1wpsaStatusRegion" aria-live="polite"></span>
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
