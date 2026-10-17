<?php

namespace AI1WPSA;

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Install
 * @since 1.0.1
 */
class Install {
    /**
     * Sticky Notes table schema version. Bump whenever the CREATE TABLE
     * statement in create_notes_table() changes.
     */
    const NOTES_DB_VERSION = '1.2.1';

    /**
     * Run the install/upgrade routine only when something actually changed:
     * the stored plugin version differs from the running code, or the notes
     * table schema is out of date. Hooked on admin_init, so it must be cheap
     * on every other request.
     *
     * @since 1.2.1
     */
    public static function maybe_upgrade() {
        if (
            version_compare((string) get_option('ai1wpsa_version'), AI1WPSA_VERSION, '>=')
            && get_option('ai1wpsa_notes_db_version') === self::NOTES_DB_VERSION
        ) {
            return;
        }

        self::activate();
    }

    /**
     * Plugin activation stuffs
     *
     * @since 1.0.1
     */
    public static function activate() {
        require_once AI1WPSA_INCLUDES . '/Update.php';

		$updater = new Update();

        if( $updater->needs_update() ) {
            $updater->perform_updates();
        }else{
            self::create_default_data();
        }

        self::create_notes_table();
    }

    /**
     * Create plugin settings default data
     *
     * @since 1.0.1
     */
    private static function create_default_data() {

        $version      = get_option('ai1wpsa_version');
        $install_time = get_option('ai1wpsa_install_time', '');
        $settings     = get_option('ai1wpsa_settings');

        if (empty($version)) {
            update_option('ai1wpsa_version', AI1WPSA_VERSION);
        }

        if (empty($settings)) {
            update_option('ai1wpsa_settings', '');
        }

        if (empty($install_time)) {
            update_option('ai1wpsa_install_time', current_time('timestamp'));
        }
    }

    /**
     * Create (or upgrade) the Sticky Notes table. Runs on activation and,
     * via maybe_upgrade(), only when NOTES_DB_VERSION has changed.
     *
     * The timestamp columns have no DEFAULT CURRENT_TIMESTAMP (that needs
     * MySQL 5.6.5+, while WordPress supports 5.5.5); they are set from PHP
     * in the notes AJAX handlers instead.
     *
     * @since 1.1.7
     */
    private static function create_notes_table() {
        global $wpdb;

        $table_name = $wpdb->prefix . 'ai1wpsa_sticky_notes';

        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
            id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
            content LONGTEXT NOT NULL,
            id_user BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
            status TINYINT(1) NOT NULL DEFAULT 0,
            state TINYINT(1) NOT NULL DEFAULT 0,
            z_index INT(11) NOT NULL DEFAULT 1000,
            theme INT(11) NOT NULL DEFAULT 0,
            font_size INT(11) NOT NULL DEFAULT 16,
            font_family INT(11) NOT NULL DEFAULT 0,
            font_color VARCHAR(7) NOT NULL DEFAULT '#333333',
            width INT(11) NOT NULL DEFAULT 250,
            height INT(11) NOT NULL DEFAULT 250,
            postop INT(11) NOT NULL DEFAULT 60,
            posleft INT(11) NOT NULL DEFAULT 200,
            created_at DATETIME NULL,
            updated_at DATETIME NULL,
            PRIMARY KEY  (id),
            KEY id_user (id_user)
        ) $charset_collate;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);

        update_option('ai1wpsa_notes_db_version', self::NOTES_DB_VERSION);
    }
}
