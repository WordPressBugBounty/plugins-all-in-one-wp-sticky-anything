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

        // Sticky Notes
        add_action('wp_ajax_ai1wpsa_note_add', array($this, 'ajax_add_note'));
        add_action('wp_ajax_ai1wpsa_note_update', array($this, 'ajax_update_note'));
        add_action('wp_ajax_ai1wpsa_note_delete', array($this, 'ajax_delete_note'));
        add_action('wp_ajax_ai1wpsa_note_duplicate', array($this, 'ajax_duplicate_note'));
        add_action('wp_ajax_ai1wpsa_note_archive', array($this, 'ajax_archive_note'));
        add_action('wp_ajax_ai1wpsa_note_toggle_visibility', array($this, 'ajax_toggle_visibility'));
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

        $action = ! empty($_POST['data']) ? sanitize_text_field(wp_unslash($_POST['data'])) : 'later';

        if ($action === 'done') {
            update_option('ai1wpsa_review_dismissed', true);
            wp_send_json_success('success');
        } elseif ($action === 'later') {
            $delay_seconds = 7 * DAY_IN_SECONDS;
            update_option('ai1wpsa_install_time', current_time('timestamp') + $delay_seconds);
            wp_send_json_success('success');
        }
    }

    /**
     * AJAX: insert a new Sticky Notes row for the current user.
     */
    public function ajax_add_note() {
        global $wpdb;

        check_ajax_referer('ai1wpsa', 'nonce');

        if (!current_user_can('read')) {
            wp_send_json_error(array('message' => __('Insufficient permissions.', 'all-in-one-wp-sticky-anything')), 403);
        }

		$table = $wpdb->prefix . 'ai1wpsa_sticky_notes';

        $top  = isset($_POST['top']) ? absint($_POST['top']) : 60;
        $left = isset($_POST['left']) ? absint($_POST['left']) : 200;

        $data = array(
            'content'     => '',
            'id_user'     => get_current_user_id(),
            'status'      => 0,
            'state'       => 0,
            'z_index'     => 1000,
            'theme'       => 0,
            'font_size'   => 16,
            'font_family' => 0,
            'font_color'  => '#333333',
            'width'       => 250,
            'height'      => 250,
            'postop'      => $top,
            'posleft'     => $left,
        );

        $formats = array('%s', '%d', '%d', '%d', '%d', '%d', '%d', '%d', '%s', '%d', '%d', '%d', '%d');

        $inserted = $wpdb->insert($table, $data, $formats);

        if (false === $inserted) {
            wp_send_json_error(array('message' => __('Could not create note.', 'all-in-one-wp-sticky-anything')), 500);
        }

        wp_send_json_success(array('id' => $wpdb->insert_id));
    }

    /**
     * AJAX: update one Sticky Notes row's fields. Only the owning user may
     * update it.
     */
    public function ajax_update_note() {
        global $wpdb;

        check_ajax_referer('ai1wpsa', 'nonce');

        if (!current_user_can('read')) {
            wp_send_json_error(array('message' => __('Insufficient permissions.', 'all-in-one-wp-sticky-anything')), 403);
        }

		$table = $wpdb->prefix . 'ai1wpsa_sticky_notes';

        $id = isset($_POST['id']) ? absint($_POST['id']) : 0;

        if (!$id) {
            wp_send_json_error(array('message' => __('Missing note ID.', 'all-in-one-wp-sticky-anything')), 400);
        }

        $content     = isset($_POST['content']) ? wp_kses_post(wp_unslash($_POST['content'])) : '';
        $theme       = isset($_POST['theme']) ? absint($_POST['theme']) : 0;
        $font_size   = isset($_POST['fontSize']) ? absint($_POST['fontSize']) : 16;
        $font_family = isset($_POST['fontFamily']) ? absint($_POST['fontFamily']) : 0;
        $font_color  = isset($_POST['fontColor']) ? sanitize_hex_color(wp_unslash($_POST['fontColor'])) : '#333333';
        $width       = isset($_POST['width']) ? absint($_POST['width']) : 250;
        $height      = isset($_POST['height']) ? absint($_POST['height']) : 250;
        $top         = isset($_POST['top']) ? absint($_POST['top']) : 60;
        $left        = isset($_POST['left']) ? absint($_POST['left']) : 200;
        $z_index     = isset($_POST['z']) ? absint($_POST['z']) : 1000;

        $updated = $wpdb->update(
            $table,
            array(
                'content'     => $content,
                'theme'       => $theme,
                'font_size'   => $font_size,
                'font_family' => $font_family,
                'font_color'  => $font_color ? $font_color : '#333333',
                'width'       => $width,
                'height'      => $height,
                'postop'      => $top,
                'posleft'     => $left,
                'z_index'     => $z_index,
            ),
            array(
                'id' => $id,
                'id_user'         => get_current_user_id(),
            ),
            array('%s', '%d', '%d', '%d', '%s', '%d', '%d', '%d', '%d', '%d'),
            array('%d', '%d')
        );

        if (false === $updated) {
            wp_send_json_error(array('message' => __('Could not update note.', 'all-in-one-wp-sticky-anything')), 500);
        }

        wp_send_json_success();
    }

    /**
     * AJAX: delete a Sticky Notes row. Only the owning user may delete it.
     */
    public function ajax_delete_note() {
        global $wpdb;

        check_ajax_referer('ai1wpsa', 'nonce');

        if (!current_user_can('read')) {
            wp_send_json_error(array('message' => __('Insufficient permissions.', 'all-in-one-wp-sticky-anything')), 403);
        }

		$table = $wpdb->prefix . 'ai1wpsa_sticky_notes';

        $id = isset($_POST['id']) ? absint($_POST['id']) : 0;

        if (!$id) {
            wp_send_json_error(array('message' => __('Missing note ID.', 'all-in-one-wp-sticky-anything')), 400);
        }

        $deleted = $wpdb->delete(
            $table,
            array(
                'id' => $id,
                'id_user'         => get_current_user_id(),
            ),
            array('%d', '%d')
        );

        if (false === $deleted) {
            wp_send_json_error(array('message' => __('Could not delete note.', 'all-in-one-wp-sticky-anything')), 500);
        }

        wp_send_json_success();
    }

    /**
     * AJAX: duplicate an existing Sticky Notes row (same styling/content,
     * offset position).
     */
    public function ajax_duplicate_note() {
        global $wpdb;

        check_ajax_referer('ai1wpsa', 'nonce');

        if (!current_user_can('read')) {
            wp_send_json_error(array('message' => __('Insufficient permissions.', 'all-in-one-wp-sticky-anything')), 403);
        }

        $id     = isset($_POST['id']) ? absint($_POST['id']) : 0;
        $table  = $wpdb->prefix . 'ai1wpsa_sticky_notes';
        $source = $id ? $wpdb->get_row(
            $wpdb->prepare(
                "SELECT * FROM $table WHERE id = %d AND id_user = %d", // phpcs:ignore WordPress.DB.PreparedSQL.InterpolatedNotPrepared
                $id,
                get_current_user_id()
            ),
            ARRAY_A
        ) : null;

        if (!$source) {
            wp_send_json_error(array('message' => __('Note not found.', 'all-in-one-wp-sticky-anything')), 404);
        }

        $data = array(
            'content'     => $source['content'],
            'id_user'     => get_current_user_id(),
            'status'      => 0,
            'state'       => 0,
            'z_index'     => 1000,
            'theme'       => absint($source['theme']),
            'font_size'   => absint($source['font_size']),
            'font_family' => absint($source['font_family']),
            'font_color'  => $source['font_color'],
            'width'       => absint($source['width']),
            'height'      => absint($source['height']),
            'postop'      => absint($source['postop']) + 24,
            'posleft'     => absint($source['posleft']) + 24,
        );

        $formats  = array('%s', '%d', '%d', '%d', '%d', '%d', '%d', '%d', '%s', '%d', '%d', '%d', '%d');
        $inserted = $wpdb->insert($table, $data, $formats);

        if (false === $inserted) {
            wp_send_json_error(array('message' => __('Could not duplicate note.', 'all-in-one-wp-sticky-anything')), 500);
        }

        $data['id'] = $wpdb->insert_id;
        wp_send_json_success(ai1wpsa_format_row($data));
    }

    /**
     * AJAX: archive (soft-hide) a Sticky Notes row without deleting its data.
     */
    public function ajax_archive_note() {
        global $wpdb;

        check_ajax_referer('ai1wpsa', 'nonce');

        if (!current_user_can('read')) {
            wp_send_json_error(array('message' => __('Insufficient permissions.', 'all-in-one-wp-sticky-anything')), 403);
        }

		$table = $wpdb->prefix . 'ai1wpsa_sticky_notes';

        $id = isset($_POST['id']) ? absint($_POST['id']) : 0;

        if (!$id) {
            wp_send_json_error(array('message' => __('Missing note ID.', 'all-in-one-wp-sticky-anything')), 400);
        }

        $updated = $wpdb->update(
            $table,
            array('status' => 1),
            array(
                'id' => $id,
                'id_user'         => get_current_user_id(),
            ),
            array('%d'),
            array('%d', '%d')
        );

        if (false === $updated) {
            wp_send_json_error(array('message' => __('Could not archive note.', 'all-in-one-wp-sticky-anything')), 500);
        }

        wp_send_json_success();
    }

    /**
     * AJAX: persist whether the current user has Sticky Notes hidden.
     */
    public function ajax_toggle_visibility() {
        check_ajax_referer('ai1wpsa', 'nonce');

        if (!current_user_can('read')) {
            wp_send_json_error(array('message' => __('Insufficient permissions.', 'all-in-one-wp-sticky-anything')), 403);
        }

        $hidden = isset($_POST['hidden']) && absint($_POST['hidden']) ? 1 : 0;

        update_user_meta(get_current_user_id(), 'ai1wpsa_notes_hidden', $hidden);

        wp_send_json_success(array('hidden' => $hidden));
    }

    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}

Ajax::instance();
