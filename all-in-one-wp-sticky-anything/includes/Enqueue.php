<?php

namespace AI1WPSA;

if (! defined('ABSPATH')) { exit;
}

class Enqueue
{

    private static $instance = null;

    public function __construct()
    {
        // Frontend scripts
        add_action('wp_enqueue_scripts', array($this, 'frontend_scripts'));

        // Customizer scripts
        add_action('customize_preview_init', array($this, 'customizer_scripts'));

        // Admin scripts
        add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));

        // Block editor scripts
        add_action('enqueue_block_editor_assets', array($this, 'block_editor_scripts'));
    }

    public function frontend_scripts()
    {
        // frontend styles
        wp_register_style('ai1wpsa-click-to-call', AI1WPSA_ASSETS . '/vendor/click-to-call/click-to-call.min.css', [], '1.0.0');
        wp_register_style('ai1wpsa-toc', AI1WPSA_ASSETS . '/vendor/toc/toc.min.css', [], '1.0.0');
        wp_enqueue_style('ai1wpsa-frontend', AI1WPSA_ASSETS . '/css/frontend.min.css', [], AI1WPSA_VERSION);

        // icon type
        $icon_type = ai1wpsa_get_settings('stickySocialIconType', 'dashicons');

        if ($icon_type === 'dashicons') {
            wp_enqueue_style('dashicons');
        }

        wp_register_script(
            'ai1wpsa-theia', AI1WPSA_ASSETS . '/vendor/theia-sticky-sidebar.js', [
            'jquery',
            ], AI1WPSA_VERSION, true
        );

        wp_register_script(
            'ai1wpsa-click-to-call', AI1WPSA_ASSETS . '/vendor/click-to-call/click-to-call.min.js', [
            'jquery',
            ], '1.0', true
        );

        wp_register_script('ai1wpsa-toc', AI1WPSA_ASSETS . '/vendor/toc/toc.min.js', [], '1.0', true);
        
        wp_register_script(
            'ai1wpsa-frontend', AI1WPSA_ASSETS . '/js/frontend.min.js', [
            'jquery',
            'wp-hooks',
            'wp-util',
            ], AI1WPSA_VERSION, true
        );

        $sticky_sidebar = ai1wpsa_get_settings('stickySidebar');

        if (filter_var($sticky_sidebar, FILTER_VALIDATE_BOOLEAN)) {
            wp_enqueue_script('ai1wpsa-theia');
        }

        // click to call 
        $click_to_call = ai1wpsa_get_settings('clicktoCall', false);

        if (filter_var($click_to_call, FILTER_VALIDATE_BOOLEAN)) {
            wp_enqueue_style('ai1wpsa-click-to-call');
            wp_enqueue_script('ai1wpsa-click-to-call');
        }

        // table of contents
        $sticky_toc = ai1wpsa_get_settings('stickyToc', false);
        $sticky_toc_post_types = (array) ai1wpsa_get_settings('stickyTocPostTypes', ['post']);

        if (filter_var($sticky_toc, FILTER_VALIDATE_BOOLEAN) && is_singular($sticky_toc_post_types)) {
            wp_enqueue_style('ai1wpsa-toc');
            wp_enqueue_script('ai1wpsa-toc');
        }

        wp_enqueue_script('ai1wpsa-frontend');

        wp_localize_script('ai1wpsa-frontend', 'ai1wpsa', $this->get_localize_data());

        // Visual element picker - only for a logged-in admin who opened this
        // exact page via the "Pick on Page" button in Settings > General
        // (see SelectorPicker.js), never on a normal page load.
        $picker_nonce = isset($_GET['ai1wpsa_picker_nonce']) ? sanitize_text_field(wp_unslash($_GET['ai1wpsa_picker_nonce'])) : '';

        if (isset($_GET['ai1wpsa_picker']) && current_user_can('manage_options') && wp_verify_nonce($picker_nonce, 'ai1wpsa_picker')) {
            wp_enqueue_style('ai1wpsa-element-picker', AI1WPSA_ASSETS . '/css/element-picker.min.css', [], AI1WPSA_VERSION);
            wp_enqueue_script('ai1wpsa-element-picker', AI1WPSA_ASSETS . '/js/element-picker.min.js', [], AI1WPSA_VERSION, true);
        }
    }

    public function customizer_scripts()
    {
        wp_enqueue_script('ai1wpsa-customizer', AI1WPSA_ASSETS . '/js/customizer.min.js', ['customize-preview', 'jquery'], AI1WPSA_VERSION, true);
    }

    /**
     * Admin Assets
     *
     * @param  [type] $hook
     * @return void
     */
    public function admin_scripts($hook)
    {
        // The plugin's own screens (Settings + Getting Started), resolved from
        // the hooks captured at menu registration (a submenu's hook is derived
        // from the parent menu title, not its slug).
        $is_plugin_page = class_exists(Admin::class) && Admin::is_plugin_screen($hook);

        // Sticky Notes are designed to float over wp-admin, so their
        // self-contained assets load wherever a note can appear. They must not
        // drag in the settings app or SweetAlert2, which belong to the plugin's
        // own screens only.
        $sticky_notes = (bool) ai1wpsa_get_settings('stickyNotes', false);

        if ($sticky_notes) {
            wp_enqueue_style('ai1wpsa-sticky-notes', AI1WPSA_URL . '/assets/css/sticky-notes.min.css', array(), AI1WPSA_VERSION);

            // On the plugin screens the settings app already localizes
            // `ai1wpsa`; anywhere else the notes bundle carries its own copy.
            $notes_deps = $is_plugin_page ? array('ai1wpsa-admin') : array('wp-i18n');

            wp_enqueue_script('ai1wpsa-sticky-notes', AI1WPSA_URL . '/assets/js/sticky-notes.min.js', $notes_deps, AI1WPSA_VERSION, true);

            if (! $is_plugin_page) {
                wp_localize_script('ai1wpsa-sticky-notes', 'ai1wpsa', $this->get_localize_data($hook));
            }
        }

        // Everything below is the plugin's own settings app. Keeping it off
        // every other admin screen stops its stylesheet (and SweetAlert2) from
        // leaking into the rest of the dashboard.
        if (! $is_plugin_page) {
            return;
        }

        // Styles
        $style_deps = array('wp-components',);

        wp_enqueue_style('ai1wpsa-swal', AI1WPSA_URL . '/assets/vendor/sweetalert2/sweetalert2.min.css', $style_deps, '11.26.25');

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
            // Media Library modal — used by the Sticky Header Background
            wp_enqueue_media();
        }

        wp_enqueue_script('ai1wpsa-swal', AI1WPSA_URL . '/assets/vendor/sweetalert2/sweetalert2.min.js', $deps, '11.26.25', true);

        wp_enqueue_script('ai1wpsa-admin', AI1WPSA_URL . '/assets/js/admin.min.js', $deps, AI1WPSA_VERSION, true);
        wp_localize_script('ai1wpsa-admin', 'ai1wpsa', $this->get_localize_data($hook));
    }

    /**
     * Block Editor Assets
     *
     * @return void
     */
    public function block_editor_scripts()
    {
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


    public function get_localize_data($hook = null)
    {

        // Fetch the saved settings
        $settings = get_option('ai1wpsa_settings');

        // if not an array make it one
        if (!is_array($settings)) {
            $settings = [];
        }

        $ai1wpsa_sticky_header     = get_option('ai1wpsa_sticky_header');
        $ai1wpsa_z_index        = get_option('ai1wpsa_z_index', 9999);

        // customizer settings
        if ($ai1wpsa_sticky_header) {
            $settings['stickyHeader'] = $ai1wpsa_sticky_header;
            $settings['stickyCIndex'] = $ai1wpsa_z_index;
        }

        $data = [
			'nonce'         => wp_create_nonce('ai1wpsa'),
			'isPro'         => false,
			'isLoggedIn'    => is_user_logged_in(),
			'settings'      => $settings,
			'ajaxUrl'       => admin_url('admin-ajax.php'),
        ];

        if (is_admin()) {
            $data['homeUrl']     = home_url();
            $data['pluginUrl']     = AI1WPSA_URL;
            $data['adminUrl']     = admin_url();
            $data['adminEmail'] = get_option('admin_email');
            $data['pickerNonce'] = wp_create_nonce('ai1wpsa_picker');
            $data['postTypes']     = ai1wpsa_get_public_post_types();
            $data['contactForms'] = $this->get_contact_forms();

			// Sticky Notes data
			if( (bool) ai1wpsa_get_settings('stickyNotes', false) ){
				// sticky notes
				$hidden 			= (int) get_user_meta(get_current_user_id(), 'ai1wpsa_notes_hidden', true);
				$display   			= ai1wpsa_get_settings('stickyNotesDisplay', 'dashboard');
				$show_here 			= ('everywhere' === $display) || ('index.php' === $hook);
				$fonts 				= array(
					'Arial, sans-serif',
					'Georgia, serif',
					'"Courier New", monospace',
					'"Comic Sans MS", cursive',
					'Verdana, sans-serif',
					'"Segoe UI", sans-serif',
					'"Trebuchet MS", sans-serif',
				);

				$data['notes']  		= ai1wpsa_get_notes();
				$data['themes']     	= array('#fff9b0', '#ffd6e0', '#c9f0ff', '#d4f7d4', '#ffe0b3', '#e0d4f7', '#ffffff', '#e0e0e0');
				$data['themeNames'] 	= array('Yellow', 'Pink', 'Blue', 'Green', 'Orange', 'Purple', 'White', 'Grey');
				$data['fonts']       	= $fonts;
				$data['isDashboard'] 	= $show_here;
				$data['hidden']      	= $hidden;
				$data['defaultFont'] 	= absint(ai1wpsa_get_settings('stickyNotesDefaultFont', 0));
			}
        }

        return apply_filters('ai1wpsa_localize_data', $data, $hook);
    }

    /**
     * Fetch existing forms from supported third-party form plugins, keyed by
     * plugin slug, so the admin can pick a form instead of pasting a shortcode.
     *
     * @return array
     */
    public function get_contact_forms()
    {
        $forms = array(
        'cf7'      => array(),
        'wpforms'  => array(),
        );

        if (post_type_exists('wpcf7_contact_form')) {
            $posts = get_posts(
                array(
                'post_type'      => 'wpcf7_contact_form',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
                'orderby'        => 'title',
                'order'          => 'ASC',
                )
            );

            foreach ($posts as $post) {
                $forms['cf7'][] = array(
                 'id'        => $post->ID,
                 'title'     => get_the_title($post),
                 'shortcode' => sprintf('[contact-form-7 id="%d" title="%s"]', $post->ID, get_the_title($post)),
                );
            }
        }

        if (post_type_exists('wpforms')) {
            $posts = get_posts(
                array(
                'post_type'      => 'wpforms',
                'posts_per_page' => -1,
                'post_status'    => 'publish',
                'orderby'        => 'title',
                'order'          => 'ASC',
                )
            );

            foreach ($posts as $post) {
                $forms['wpforms'][] = array(
                 'id'        => $post->ID,
                 'title'     => get_the_title($post),
                 'shortcode' => sprintf('[wpforms id="%d"]', $post->ID),
                );
            }
        }

        return $forms;
    }

    public static function instance()
    {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}

Enqueue::instance();
