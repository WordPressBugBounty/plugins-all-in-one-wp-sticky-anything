const { useState } = wp.element;

export default function Help() {
    const faqs = [
        {
            question: wp.i18n.__('Can I make multiple elements sticky?', 'all-in-one-wp-stikcy-anything'),
            answer: wp.i18n.__('Yes.', 'all-in-one-wp-stikcy-anything')
        },
        {
            question: wp.i18n.__('How to sticky anything in WordPress ?', 'all-in-one-wp-stikcy-anything'),
            answer: wp.i18n.__('Just use .sticky class.', 'all-in-one-wp-sticky-anything')
        },
        {
            question: wp.i18n.__('How to sticky anything in Elementor ?', 'all-in-one-wp-stikcy-anything'),
            answer: wp.i18n.__('Open any page with Elementor → Select a container or section → Go to the `Advanced Tab` → `Sticky Anything` Settings.', 'all-in-one-wp-sticky-anything')
        },
        {
            question: wp.i18n.__('Will All-in-One WP Sticky Anything slow down my website?', 'all-in-one-wp-stikcy-anything'),
            answer: wp.i18n.__('No.', 'all-in-one-wp-sticky-anything')
        },
        {
            question: wp.i18n.__('Which themes support the Sticky Header perfectly on the customizer?', 'all-in-one-wp-stikcy-anything'),
            answer: wp.i18n.__('Popular classic themes such as Astra, Blocksy, GeneratePress, Kadence, Neve, OceanWP, Storefront, and Zakra provide seamless Sticky Header compatibility.', 'all-in-one-wp-sticky-anything')
        },
        {
            question: wp.i18n.__('How to disable the sticky?', 'all-in-one-wp-stikcy-anything'),
            answer: wp.i18n.__('Just remove class from settings.', 'all-in-one-wp-sticky-anything')
        },
        {
            question: wp.i18n.__('How do I enable Click to Call?', 'all-in-one-wp-stikcy-anything'),
            answer: wp.i18n.__('Go to Dashboard → Sticky Anything → Click to Call, enable the option, add your phone number(s), and click "Save Changes".', 'all-in-one-wp-stikcy-anything')
        },
        {
            question: wp.i18n.__('Does Click to Call work on mobile devices?', 'all-in-one-wp-stikcy-anything'),
            answer: wp.i18n.__('Yes, it works perfectly on mobile devices. Users can tap the button to call On desktop, it may open calling apps like Skype or similar services.', 'all-in-one-wp-stikcy-anything')
        },
        {
            question: wp.i18n.__('Can I customize the design of the button?', 'all-in-one-wp-stikcy-anything'),
            answer: wp.i18n.__('Yes, you can customize colors, icon styles, position, and more from the settings panel.', 'all-in-one-wp-stikcy-anything')
        },
    ]
    return (
        <div className="ai1wpsa-settings-content">
            <div className="ai1wpsa-settings-content-header">
                <i className="dashicons dashicons-editor-help"></i>
                <span>{wp.i18n.__('Help', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content">
                <h2>{wp.i18n.__('Frequently Asked Questions', 'all-in-one-wp-stikcy-anything')}</h2>

                {/* accordion item start here */}
                {
                    faqs.map((faq, index) => (
                        <div className={`accordion-item`} key={index}>
                            <div className="accordion-header">
                                <h3>{faq.question}</h3>
                                <i className="dashicons dashicons-arrow-down-alt2"></i>
                            </div>
                            <div className="accordion-body">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))
                }

                {/* accordion item start here */}
                <div className={`accordion-item`}>
                    <div className="accordion-header">
                        <h3>{wp.i18n.__('I need more help please!', 'all-in-one-wp-stikcy-anything')}</h3>
                        <i className="dashicons dashicons-arrow-down-alt2"></i>
                    </div>
                    <div className="accordion-body">
                        <p>{wp.i18n.__('Please use the support forum.', 'all-in-one-wp-sticky-anything')} <a href="https://wordpress.org/support/plugin/all-in-one-wp-sticky-anything/" target="_blank">{wp.i18n.__('Suport Forum')}</a></p>

                    </div>
                </div>
                {/* accordion item stop here */}
            </div>
        </div>
    )
}
