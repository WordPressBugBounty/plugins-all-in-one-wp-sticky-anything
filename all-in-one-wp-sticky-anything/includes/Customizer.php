<?php

namespace AI1WPSA;

defined('ABSPATH') || exit();

class Customizer {

	private static $instance = null;

	/**
	 * Constructor
	 */
	public function __construct() {
        add_action('customize_register', [$this, 'register_customizer_settings']);
	}

    public function register_customizer_settings($wp_customize) {

        /**
         * Panel
         */
        $wp_customize->add_panel('ai1wpsa_panel', [
            'title'         => __('Sticky Anything', 'all-in-one-wp-sticky-anything'),
            'description'   => __('Settings to configure Sticky Anything on your website.', 'all-in-one-wp-sticky-anything'),
            'priority'      => 30,
        ]);

        /**
         * Section
         */
        $wp_customize->add_section('ai1wpsa_section', [
            'title'         => __('Sticky Header', 'all-in-one-wp-sticky-anything'),
            'description'   => __('You can make sticky header using Sticky Anything. You can configure sticky header enable or disable and z-index.', 'all-in-one-wp-sticky-anything'),
            'panel'         => 'ai1wpsa_panel',
            'priority'      => 30,
        ]);

        /**
         * Enable Sticky Header Setting
         */
        $wp_customize->add_setting('ai1wpsa_sticky_header', [
            'type'              => 'option',
            'capability'        => 'manage_options',
            'default'           => false,
            'transport'         => 'postMessage',
            // 'sanitize_callback' => 'ai1wpsa_sanitize_checkbox',
        ]);

        /**
         * Checkbox Control
         */
        $wp_customize->add_control(new \WP_Customize_Control($wp_customize, 'ai1wpsa_sticky_header', [
            'label'     => __('Enable Sticky Header', 'all-in-one-wp-sticky-anything'),
            'section'   => 'ai1wpsa_section',
            'type'      => 'checkbox',
            'settings'  => 'ai1wpsa_sticky_header',
        ]));

        /**
         * Z-Index Setting
         */
        $wp_customize->add_setting('ai1wpsa_z_index', [
            'type'              => 'option',
            'capability'        => 'manage_options',
            'default'           => 9999,
            'transport'         => 'postMessage',
            'sanitize_callback' => 'absint',
        ]);

        /**
         * Z-Index Control
         */
        $wp_customize->add_control(new \WP_Customize_Control($wp_customize, 'ai1wpsa_z_index', [
            'label'     => __('Z-Index', 'all-in-one-wp-sticky-anything'),
            'section'   => 'ai1wpsa_section',
            'type'      => 'number',
            'settings'  => 'ai1wpsa_z_index',
        ]));

    }


	public static function instance() {
		if (null === self::$instance) {
			self::$instance = new self;
		}

		return self::$instance;
	}
}

Customizer::instance();