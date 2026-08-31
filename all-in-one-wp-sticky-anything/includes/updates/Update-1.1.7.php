<?php

namespace AI1WPSA;

defined('ABSPATH') || exit();

class Update_1_1_7 {

    private static $instance = null;

    /**
     * Constructor
     */
    public function __construct() {
        $this->migrate_date();
    }

    /**
     * Create Table
     */
    public function migrate_date() {
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
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY  (id),
            KEY id_user (id_user)
        ) $charset_collate;";

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);
    }

    public static function instance() {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}

Update_1_1_7::instance();
