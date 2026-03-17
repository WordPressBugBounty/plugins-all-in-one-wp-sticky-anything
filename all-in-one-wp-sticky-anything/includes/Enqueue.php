<?php

namespace AI1WPSA;

if (! defined('ABSPATH')) exit;

class Enqueue {

	private static $instance = null;

	public function __construct() {
		// Frontend scripts
		add_action('wp_enqueue_scripts', array($this, 'frontend_scripts'));

		// Customizer scripts
		add_action('customize_preview_init', array($this, 'customizer_scripts'));

		// Admin scripts
		add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));

		// Block editor scripts
		add_action('enqueue_block_editor_assets', array($this, 'block_editor_scripts'));
	}

	public function frontend_scripts() {
		// frontend styles
		wp_register_style('ai1wpsa-fontawesome', AI1WPSA_ASSETS . '/vendor/fontawesome/fontawesome.min.css', [], '7.1.0');
		wp_register_style('ai1wpsa-fontawesome-brands', AI1WPSA_ASSETS . '/vendor/fontawesome/brands.min.css', [], '7.1.0');
		wp_register_style('ai1wpsa-bootstrap-icons', AI1WPSA_ASSETS . '/vendor/bootstrap-icons/bootstrap-icons.min.css', [], '1.13.1');
		wp_register_style('ai1wpsa-remixicon', AI1WPSA_ASSETS . '/vendor/remixicon/remixicon.min.css', [], '4.7.0');
		wp_register_style('ai1wpsa-lineicon', AI1WPSA_ASSETS . '/vendor/lineicon/lineicons.min.css', [], '5.0.0');
		wp_register_style('ai1wpsa-click-to-call', AI1WPSA_ASSETS . '/vendor/click-to-call/click-to-call.min.css', [], '1.0.0');
		wp_register_style('ai1wpsa-frontend', AI1WPSA_ASSETS . '/css/frontend.min.css', [], AI1WPSA_VERSION);

		// fix default sticky
		$fix_default_sticky = ai1wpsa_get_settings('fixDefaultSticky') || get_option('ai1wpsa_sticky_header') || ai1wpsa_get_settings('stickySocialIcon') || ai1wpsa_get_settings('stickyCookieConsent');

		// convert to boolean
		$fix_default_sticky = filter_var($fix_default_sticky, FILTER_VALIDATE_BOOLEAN);

		// icon type
		$icon_type = ai1wpsa_get_settings('stickySocialIconType', 'dashicons');

		if ($icon_type === 'fontawesome') {
			wp_enqueue_style('ai1wpsa-fontawesome');
			wp_enqueue_style('ai1wpsa-fontawesome-brands');
		} else if ($icon_type === 'bootstrap') {
			wp_enqueue_style('ai1wpsa-bootstrap-icons');
		} else if ($icon_type === 'remixicon') {
			wp_enqueue_style('ai1wpsa-remixicon');
		} else if ($icon_type === 'lineicon') {
			wp_enqueue_style('ai1wpsa-lineicon');
		} else {
			wp_enqueue_style('dashicons');
		}

		if ($fix_default_sticky === true || is_plugin_active('elementor/elementor.php')) {
			wp_enqueue_style('ai1wpsa-frontend');
		}

		// Scripts
		wp_register_script('ai1wpsa-stickr', AI1WPSA_ASSETS . '/vendor/stickr.min.js', [
			'jquery',
			'wp-plupload',
			'wp-util',
		], AI1WPSA_VERSION, true);

		wp_register_script('ai1wpsa-theia', AI1WPSA_ASSETS . '/vendor/theia-sticky-sidebar.js', [
			'jquery',
		], AI1WPSA_VERSION, true);

		wp_register_script('ai1wpsa-click-to-call', AI1WPSA_ASSETS . '/vendor/click-to-call/click-to-call.min.js', [
			'jquery',
		], '1.0', true);

		wp_register_script('ai1wpsa-frontend', AI1WPSA_ASSETS . '/js/frontend.min.js', [
			'jquery',
			'wp-plupload',
			'wp-util',
		], AI1WPSA_VERSION, true);

		$fix_default_sticky = ai1wpsa_get_settings('fixDefaultSticky', false);
		$fix_default_sticky = filter_var($fix_default_sticky, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE);

		if (empty($fix_default_sticky) || $fix_default_sticky === false || $fix_default_sticky === '0') {
			wp_enqueue_script('ai1wpsa-stickr');
		}

		$sticky_sidebar = ai1wpsa_get_settings('stickySidebar');

		if (filter_var($sticky_sidebar, FILTER_VALIDATE_BOOLEAN)) {
			wp_enqueue_script('ai1wpsa-theia');
		}

		// click to call 
		$click_to_call = ai1wpsa_get_settings('clicktoCall', false);

		if(filter_var($click_to_call, FILTER_VALIDATE_BOOLEAN)){
			wp_enqueue_style('ai1wpsa-click-to-call');
			wp_enqueue_script('ai1wpsa-click-to-call');
		}

		wp_enqueue_script('ai1wpsa-frontend');

		wp_localize_script('ai1wpsa-frontend', 'ai1wpsa', $this->get_localize_data());
	}

	public function customizer_scripts() {
		wp_enqueue_script('ai1wpsa-customizer', AI1WPSA_ASSETS . '/js/customizer.min.js', ['customize-preview', 'jquery'], AI1WPSA_VERSION, true);
	}

	/**
	 * Admin Assets
	 *
	 * @param [type] $hook
	 * @return void
	 */
	public function admin_scripts($hook) {
		// Only load on our plugin settings page
		// if ('toplevel_page_all-in-one-wp-sticky-anything' !== $hook && 'sticky-anything_page_sticky-anything-getting-started' !== $hook) {
		// 	return;
		// }

		// Styles
		$style_deps = array('wp-components',);

		if ('toplevel_page_all-in-one-wp-sticky-anything' == $hook) {
			$style_deps[] = 'wp-codemirror';
		}

		wp_enqueue_style('ai1wpsa-swal', AI1WPSA_URL . '/assets/vendor/sweetalert2/sweetalert2.min.css', $style_deps, '11.12.4');

		wp_enqueue_style('ai1wpsa-admin', AI1WPSA_URL . '/assets/css/admin.min.css', $style_deps, AI1WPSA_VERSION);

		// default dependencies
		$deps = array(
			'jquery',
			'wp-util',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-blocks',
			'wp-hooks',
			'wp-block-editor',
		);

		if ('toplevel_page_all-in-one-wp-sticky-anything' == $hook) {
			wp_enqueue_script('wp-theme-plugin-editor');

			wp_enqueue_code_editor(array(
				'type'  => 'text/css',
			));
		}

		wp_enqueue_script('ai1wpsa-swal', AI1WPSA_URL . '/assets/vendor/sweetalert2/sweetalert2.min.js', $deps, '11.12.4', true);

		wp_enqueue_script('ai1wpsa-admin', AI1WPSA_URL . '/assets/js/admin.min.js', $deps, AI1WPSA_VERSION, true);
		wp_localize_script('ai1wpsa-admin', 'ai1wpsa', $this->get_localize_data($hook));
	}

	/**
	 * Block Editor Assets
	 *
	 * @return void
	 */
	public function block_editor_scripts() {
		if (! function_exists('get_current_screen')) {
			return;
		}

		$screen = get_current_screen();

		if (empty($screen) || 'widgets' !== $screen->id) {
			return;
		}

		// Scripts
		$deps = array(
			'jquery',
			'wp-i18n',
			'wp-element',
			'wp-components',
			'wp-blocks',
			'wp-block-editor',
		);

		wp_enqueue_script('ai1wpsa-block-editor', AI1WPSA_URL . '/assets/js/block-editor.min.js', $deps, AI1WPSA_VERSION, true);
		wp_localize_script('ai1wpsa-block-editor', 'ai1wpsa', $this->get_localize_data('block_editor'));
	}


	public function get_localize_data($hook = null) {

		// Fetch the saved settings
		$settings = get_option('ai1wpsa_settings');

		// if not an array make it one
		if (!is_array($settings)) {
			$settings = [];
		}

		$ai1wpsa_sticky_header 	= get_option('ai1wpsa_sticky_header');
		$ai1wpsa_z_index		= get_option('ai1wpsa_z_index', 9999);

		// customizer settings
		if ($ai1wpsa_sticky_header) {
			$settings['stickyHeader'] = $ai1wpsa_sticky_header;
			$settings['stickyCIndex'] = $ai1wpsa_z_index;
		}

		$data = [
			'nonce'     	=> wp_create_nonce('ai1wpsa'),
			'isPro'     	=> false,
			'isLoggedIn'	=> is_user_logged_in(),
			'settings' 		=> $settings,
		];

		if (is_admin()) {
			$data['homeUrl'] 	= home_url();
			$data['ajaxUrl'] 	= admin_url('admin-ajax.php');
			$data['pluginUrl'] 	= AI1WPSA_URL;
			$data['adminUrl'] 	= admin_url();
			$data['postTypes'] 	= ai1wpsa_get_public_post_types();
		}

		return apply_filters('ai1wpsa_localize_data', $data, $hook);
	}

	public static function instance() {
		if (null === self::$instance) {
			self::$instance = new self;
		}

		return self::$instance;
	}
}

Enqueue::instance();
