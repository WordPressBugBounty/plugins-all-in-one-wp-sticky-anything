<?php

namespace AI1WPSA;

use Elementor\Controls_Manager;
use Elementor\Controls_Stack;

defined('ABSPATH') || exit();

class Elementor {

    private static $instance = null;

    /**
     * Constructor
     */
    public function __construct() {
        // If Elementor is not active, return
        if (! is_plugin_active('elementor/elementor.php')) {
            return;
        }

        add_action('elementor/element/container/section_effects/after_section_end', array($this, 'register_controls'));
        add_action('elementor/element/section/section_effects/after_section_end', array($this, 'register_controls'));
    }

    public function register_controls(Controls_Stack $element) {
        $element->start_controls_section(
            'section_sticky_anything',
            array(
                'label' => __('Sticky Anything', 'all-in-one-wp-sticky-anything'),
                'tab'   => Controls_Manager::TAB_ADVANCED,
            )
        );

        $element->add_control(
            'ai1wpsa_status',
            [
                'label' => __('Enable', 'all-in-one-wp-sticky-anything'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'return_value' => 'yes',
                'default' => '',
                'frontend_available' => true,
                'prefix_class' => 'ai1wpsa-',
            ]
        );

        $element->add_control(
            'ai1wpsa_z_index',
            [
                'label' => __('Z-Index', 'all-in-one-wp-sticky-anything'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 99999,
                'min' => 0,
                'frontend_available' => true,
                'condition' => [
                    'ai1wpsa_status' => 'yes',
                ],
            ]
        );

        $element->end_controls_section();
    }

    public static function instance() {
        if (null === self::$instance) {
            self::$instance = new self;
        }

        return self::$instance;
    }
}

Elementor::instance();
