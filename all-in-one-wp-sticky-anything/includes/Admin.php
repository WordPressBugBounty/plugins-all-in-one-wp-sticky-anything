<?php

namespace AI1WPSA;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Admin
 * @since 1.0.1
 */
class Admin {

    private static $instance = null;

    /**
     * Admin screen hook suffixes registered by this plugin.
     *
     * Captured from the menu functions' return values because a submenu's hook
     * is derived from the parent menu *title* (e.g. "Sticky Anything" =>
     * `sticky-anything_page_...`), not from the slug — so it can't be predicted
     * from the menu slug alone.
     *
     * @var string[]
     */
    private static $screen_hooks = array();

    public function __construct() {
        add_action('admin_menu', array($this, 'register_menu'));

        // migrate data
        add_action('admin_init', [$this, 'migrate_data']);

        // Sticky Notes admin bar toggle
        add_action('admin_bar_menu', array($this, 'sticky_notes_admin_bar_toggle'), 100);
    }

    public function register_menu() {
        $slug = 'all-in-one-wp-sticky-anything';
        $capability = 'manage_options';

        $settings_hook = add_menu_page(
            __('All-in-One WP Sticky Anything', 'all-in-one-wp-sticky-anything'),
            __('Sticky Anything', 'all-in-one-wp-sticky-anything'),
            $capability,
            $slug,
            array($this, 'render_ai1wpsa_settings'),
            'dashicons-sticky',
            89
        );

        add_submenu_page(
            $slug,
            __('Settings - All-in-One Sticky Anything', 'all-in-one-wp-sticky-anything'),
            __('Settings', 'all-in-one-wp-sticky-anything'),
            $capability,
            $slug,
        );

        $getting_started_hook = add_submenu_page(
            $slug,
            __('Getting Started - All-in-One Sticky Anything', 'all-in-one-wp-sticky-anything'),
            __('Getting Started', 'all-in-one-wp-sticky-anything'),
            $capability,
            'sticky-anything-getting-started',
            array($this, 'render_ai1wpsa_getting_started'),
        );

        self::$screen_hooks = array_values(array_unique(array_filter(array(
            $settings_hook,
            $getting_started_hook,
        ))));
    }

    /**
     * Whether the given hook suffix (or the current screen) is one of this
     * plugin's own admin screens.
     *
     * @param string|null $hook Optional hook suffix; defaults to the current screen id.
     * @return bool
     */
    public static function is_plugin_screen($hook = null) {
        if (null === $hook) {
            $screen = function_exists('get_current_screen') ? get_current_screen() : null;
            $hook = ($screen && !empty($screen->id)) ? $screen->id : '';
        }

        return in_array($hook, self::$screen_hooks, true);
    }

    public function render_ai1wpsa_settings() {
        echo '<div id="ai1wpsa-settings" class="ai1wpsa-settings"></div>';
    }

    public function render_ai1wpsa_getting_started() {
        echo '<div id="ai1wpsa-getting-started" class="ai1wpsa-getting-started"></div>';
    }

    /**
     * Add a "Sticky Notes" toggle button to the admin bar (all admin
     * screens). This class is only loaded for admin requests (see
     * Main::includes()), so there's no need to re-check is_admin() here.
     *
     * @param \WP_Admin_Bar $wp_admin_bar Admin bar instance.
     * @return void
     */
    public function sticky_notes_admin_bar_toggle($wp_admin_bar) {
        if (! current_user_can('read') || ! (bool) ai1wpsa_get_settings('stickyNotes', false)) {
            return;
        }

        $hidden = (int) get_user_meta(get_current_user_id(), 'ai1wpsa_notes_hidden', true);

        $wp_admin_bar->add_node(
            array(
                'id'    => 'ai1wpsa-notes-toggle',
                'title' => '<span class="ab-icon dashicons dashicons-admin-post"></span><span class="ab-label">' . esc_html__('Toggle Sticky Notes', 'all-in-one-wp-sticky-anything') . '</span>',
                'href'  => '#',
                'meta'  => array(
                    'class' => 'ai1wpsa-notes-toggle-node' . ($hidden ? ' ai1wpsa-notes-hidden' : ''),
                    'title' => __('Show or hide sticky notes', 'all-in-one-wp-sticky-anything'),
                ),
            )
        );
    }

    /**
     * Migrate Data
     *
     * @return void
     */
    public function migrate_data() {
        include_once AI1WPSA_INCLUDES . '/Install.php';

		Install::maybe_upgrade();
    }

    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}

Admin::instance();
