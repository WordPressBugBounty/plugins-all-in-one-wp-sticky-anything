<?php

namespace AI1WPSA;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Ajax
 * @since 1.0.1
 */
class Ajax {

    private static $instance = null;

    public function __construct() {
        add_action('wp_ajax_ai1wpsa_get_settings', array($this, 'get_settings'));
        add_action('wp_ajax_ai1wpsa_save_settings', array($this, 'save_settings'));

        // review notice ajax
        add_action('wp_ajax_ai1wpsa_review_notice', array($this, 'review_notice'));
    }

    /**
     * Get Settings
     * @since 1.0.1
     */
    public function get_settings() {
        // Check nonce
        if (!check_ajax_referer('ai1wpsa', 'nonce', false)) {
            wp_send_json_error(__('Invalid nonce', 'all-in-one-wp-sticky-anything'));
        }
        // Check permission
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('You do not have permission to get tables', 'all-in-one-wp-sticky-anything'));
        }

        $data = get_option('ai1wpsa_settings');

        // check data is array
        $data = !empty($data) ? $data : [];

        wp_send_json_success([
            'data' => $data,
        ]);
    }

    /**
     * Save Settings
     *
     * @return void
     */
    public function save_settings() {
        // Check nonce
        if (!check_ajax_referer('ai1wpsa', 'nonce', false)) {
            wp_send_json_error(__('Invalid nonce', 'all-in-one-wp-sticky-anything'));
        }
        // Check permission
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('You do not have permission to get tables', 'all-in-one-wp-sticky-anything'));
        }

        $data = ! empty($_POST['data']) ? ai1wpsa_sanitize_array(wp_unslash($_POST['data'])) : [];

        if (empty($data)) {
            wp_send_json_error();
            return;
        }

        update_option('ai1wpsa_settings', $data);
        wp_send_json_success('Success');
        wp_die();
    }

    /**
     * Review Notice
     * @since 1.0.4
     * @return void
     * */
    public function review_notice() {
        // Check nonce
        if (!check_ajax_referer('ai1wpsa', 'nonce', false)) {
            wp_send_json_error(__('Invalid nonce', 'all-in-one-wp-sticky-anything'));
        }

        // Check permission
        if (!current_user_can('manage_options')) {
            wp_send_json_error(__('You do not have permission to get tables', 'all-in-one-wp-sticky-anything'));
        }

        $action = sanitize_text_field(wp_unslash($_POST['data'])) ?? 'later';

        if ($action === 'done') {
            update_option('ai1wpsa_review_dismissed', true);
            wp_send_json_success('success');
        } elseif ($action === 'later') {
            $delay_seconds = 7 * DAY_IN_SECONDS;
            update_option('ai1wpsa_install_time', current_time('timestamp') + $delay_seconds);
            wp_send_json_success('success');
        }
    }

    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}

Ajax::instance();
