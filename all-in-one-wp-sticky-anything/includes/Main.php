<?php

namespace AI1WPSA;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Main
 * @since 1.0.1
 */
final class Main {
    /**
     * The single instance of the class.
     * @var Main
     * @since 1.0.1
     */
    protected static $instance = null;

    public function __construct() {

        $this->includes();
        $this->init_hooks();

        do_action('ai1wpsa_loaded');
    }

    /**
     * Include required core files used in admin and on the frontend.
     *
     * @return void
     * @since 1.0.1
     *
     */
    public function includes() {
        include_once AI1WPSA_INCLUDES . '/Enqueue.php';
        include_once AI1WPSA_INCLUDES . '/Hooks.php';
        include_once AI1WPSA_INCLUDES . '/Ajax.php';
        include_once AI1WPSA_INCLUDES . '/functions.php';

        if (is_admin()) {
            include_once AI1WPSA_INCLUDES . '/Admin.php';
        }
    }

    /**
     * Hook into actions and filters.
     *
     * @since 1.0.1
     */
    private function init_hooks() {

        add_action('admin_notices', [$this, 'print_notices'], 15);

        add_action('admin_notices', [$this, 'review_notice'], 15);

        // Localize our plugin
        add_action('init', [$this, 'localization_setup']);

        // Plugin action links
        add_filter('plugin_action_links_' . plugin_basename(AI1WPSA_FILE), [$this, 'plugin_action_links']);
    }

    /**
     * Admin notice
     *
     * @return void
     * @since 1.0.1
     *
     */
    public function print_notices() {
        // Only show to admins
        if (!current_user_can('manage_options')) {
            return;
        }

        $notices = get_option(sanitize_key('ai1wpsa_notices'), []);

        foreach ($notices as $notice) { ?>
            <div class="notice notice-large is-dismissible wpforms-extended-admin-notice notice-<?php echo esc_attr($notice['class']); ?>">
                <?php esc_html_e($notice['message'], 'all-in-one-wp-sticky-anything'); ?>
            </div>
        <?php
            update_option(sanitize_key('ai1wpsa_notices'), []);
        }
    }

    public function review_notice() {
        if (!current_user_can('manage_options')) return;

        // Check if user dismissed already
        if (get_option('ai1wpsa_review_dismissed')) return;

        $install_time = get_option('ai1wpsa_install_time');
        if (!$install_time) return;

        if (!is_numeric($install_time)) {
            $install_time = strtotime($install_time);
        }

        $current_time = current_time('timestamp');
        $three_days = 3 * DAY_IN_SECONDS;

        if (($current_time - $install_time) < $three_days) return;
        ?>
        <div class="notice notice-large is-dismissible ai1wpsa-review-notice notice-info">
            <p><?php printf(
                    esc_html__('Hey, we noticed you have been using %s for more than 3 days now - that\'s awesome!', 'all-in-one-wp-sticky-anything'),
                    '<b>WP Sticky Anything</b>'
                ); ?>
            </p>
            <p>
                <?php echo esc_html__('Could you please do us a BIG favor and give it a rating on WordPress.org to help us do more great work and boost our motivation?', 'all-in-one-wp-sticky-anything') ?>
            </p>
            <p>
                <strong><?php echo esc_html__('Monzur Alam', 'all-in-one-wp-sticky-anything'); ?></strong>
                <br>
                <?php echo esc_html__('Founder of WP Sticky Anything', 'all-in-one-wp-sticky-anything'); ?>
            </p>
            <div class="notice-btns">
                <a href="https://wordpress.org/support/plugin/all-in-one-wp-sticky-anything/reviews/#new-post" target="_blank" class="button button-secondary">
                    <span class="dashicons dashicons-welcome-write-blog"></span>
                    <?php echo esc_html__('Yes, you deserve it', 'all-in-one-wp-sticky-anything'); ?>
                </a>
                <a href="#" class="button button-secondary action" data-action="later">
                    <span class="dashicons dashicons-calendar"></span>
                    <?php echo esc_html__('No, maybe later', 'all-in-one-wp-sticky-anything'); ?>
                </a>
                <a href="#" class="button button-secondary action" data-action="done">
                    <span class="dashicons dashicons-smiley"></span>
                    <?php echo esc_html__('I already did', 'all-in-one-wp-sticky-anything'); ?>
                </a>
            </div>
        </div>
<?php
    }

    /**
     * Initialize plugin for localization
     *
     * @return void
     * @since 1.0.1
     *
     */
    public function localization_setup() {
        load_plugin_textdomain('all-in-one-wp-sticky-anything', false, dirname(plugin_basename(AI1WPSA_FILE)) . '/languages/');
    }

    /**
     * Plugin links
     * @since 1.0.1
     */
    public function plugin_action_links($links) {
        $links[] = '<a href="' . admin_url('admin.php?page=all-in-one-wp-sticky-anything') . '" >' . __('Settings', 'all-in-one-wp-sticky-anything') . '</a>';

        return $links;
    }


    /**
     * Main Instance
     * 
     * Ensure only one instance of the Main is loaded or can be loaded.
     * @return Main
     * @since 1.0.1
     * @static
     */
    static function instance() {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}

// kickof wpforms extended
if (!function_exists('ai1wpsa')) {
    function ai1wpsa() {
        return Main::instance();
    }
}

ai1wpsa();
