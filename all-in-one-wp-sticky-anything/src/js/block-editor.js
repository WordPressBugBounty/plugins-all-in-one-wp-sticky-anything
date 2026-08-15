const { addFilter } = wp.hooks;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, PanelRow, ToggleControl } = wp.components;

; (function ($) {

    const blockEditor = {
        init: function () {
            // Add attribute
            addFilter(
                'blocks.registerBlockType',
                'fixed-widget/attribute',
                function (settings, name) {
                    settings.attributes = {
                        ...settings.attributes,
                        fixedWidget: {
                            type: 'boolean',
                            default: false,
                        }
                    }

                    return settings;
                }
            );

            // Add control
            const addFixedWidgetControl = function (BlockEdit) {
                return (props) => {
                    const { name, attributes, setAttributes } = props;

                    // retrive selected attributes from the block
                    const { fixedWidget } = attributes;

                    return (
                        <>
                            <BlockEdit {...props} />

                            <InspectorControls>
                                <PanelBody
                                    title={wp.i18n.__('Fixed Widget', 'all-in-one-wp-sticky-anything')}
                                    initialOpen={false}
                                >
                                    <PanelRow>
                                        <ToggleControl
                                            label={wp.i18n.__('Enable Fixed Widget', 'all-in-one-wp-sticky-anything')}
                                            checked={!!fixedWidget}
                                            onChange={() => setAttributes({ fixedWidget: !fixedWidget })}
                                            help={wp.i18n.__('Make this widget a fixed widget.', 'all-in-one-wp-sticky-anything')}
                                        />
                                    </PanelRow>
                                </PanelBody>
                            </InspectorControls>
                        </>
                    )
                }
            }

            addFilter(
                'editor.BlockEdit',
                'fixed-widget/control',
                addFixedWidgetControl
            );

            // Save props
            addFilter(
                'blocks.getSaveContent.extraProps',
                'fixed-widget/save-props',
                function (props, blockType, attributes) {
                    const { fixedWidget } = attributes;

                    if (!fixedWidget) {
                        return props;
                    }

                    const classes = (props.className || '').split(' ').filter(Boolean);

                    if (!classes.includes('fixed')) {
                        classes.push('fixed');
                    }

                    return {
                        ...props,
                        // className: classes.join(' '),
                        'data-ai1wpsa-fixed': 'true',
                    };
                }
            );

        }
    }

    blockEditor.init();

})(jQuery);
