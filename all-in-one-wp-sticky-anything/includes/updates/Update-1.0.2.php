<?php

namespace AI1WPSA;

defined('ABSPATH') || exit();

class Update_1_0_2 {

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
        // sticky class
        $sticky_class = get_option('stickyclass');

        if (!empty($sticky_class)) {
            $data = array(
                'stickyClass' => $sticky_class
            );

            update_option('ai1wpsa_settings', $data);
        }
    }

    public static function instance() {
        if (is_null(self::$instance)) {
            self::$instance = new self();
        }

        return self::$instance;
    }
}

Update_1_0_2::instance();
