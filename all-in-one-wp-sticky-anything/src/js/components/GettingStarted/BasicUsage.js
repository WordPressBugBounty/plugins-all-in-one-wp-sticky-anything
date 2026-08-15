export default function BasicUsage() {
    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-media-document"></i>
                <span>{wp.i18n.__('Basic Usage', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content">
                {/* sticky header start here */}
                <div class="settings-row bg-10">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Click to Call ⚡')}</h2>
                        <p>{wp.i18n.__('You can easily create a click-to-call button using the All-in-One WP Sticky Anything plugin. Just follow the steps below.', 'all-in-one-wp-sticky-anything')}</p>
                        <ul>
                            <li>{wp.i18n.__('1. Log in to your WordPress dashboard.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('2. From the left menu, go to Sticky Anything → Click to Call.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('3. Turn on the "Click to Call" option.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('4. Enter your phone number and adjust the settings as needed.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('5. Click the "Save Changes" button.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('6. Visit your website to see the click-to-call button in action.', 'all-in-one-wp-sticky-anything')}</li>
                        </ul>
                    </div>

                    <div class="settings-col">
                        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=1ts_suH0PKZJddXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
                {/* sticky header stop here */}

                {/* sticky header start here */}
                <div class="settings-row bg-10">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Fixed Widget')}</h2>
                        <p>{wp.i18n.__('You can easily create a fixed (sticky) widget using the All-in-One WP Sticky Anything plugin. Just follow the steps below.', 'all-in-one-wp-sticky-anything')}</p>
                        <ul>
                            <li>{wp.i18n.__('1. Go to your WordPress Dashboard → Appearance → Widgets.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('2. If you are using the Block Editor, wrap the widget inside a Group block, then enable the Fixed Widget option from the Group settings in the right sidebar.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('3. If you are using the Classic Editor, simply enable the Fixed Widget option and click the Save button.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('4. Your sidebar widget will now remain fixed while scrolling.', 'all-in-one-wp-sticky-anything')}</li>
                        </ul>
                    </div>

                    <div class="settings-col">
                        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=1ts_suH0PKZJddXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
                {/* sticky header stop here */}

                {/* sticky header start here */}
                <div class="settings-row bg-10">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Sticky Header')}</h2>
                        <p>{wp.i18n.__('You can make Sticky Header easily by All-in-one WP Sticky Anyting. You need to do some step for it.', 'all-in-one-wp-sticky-anything')}</p>
                        <ul>
                            <li>{wp.i18n.__('1. Go to WordPress Dashboard > Sticky Anything > Settings > General', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('2. In the "Sticky Class" field, enter the CSS selector of your header. Must you need to provide a valid css class or id selector. example: .header', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('3. If sticky header z-index issue on scroll, then you need to configure the "Z-index" field. Write the max big integer value. ex: 9999999', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('4. Now you can click save button on the header.', 'all-in-one-wp-sticky-anything')}</li>
                        </ul>
                    </div>
                    <div class="settings-col">
                        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=1ts_suH0PKZJddXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
                {/* sticky header stop here */}

                {/* sticky header in elementor start here */}
                <div class="settings-row bg-10">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Sticky Header in Elementor')}</h2>
                        <p>{wp.i18n.__('You can create a Sticky Header in Elementor without extra plugins. Just follow these steps:', 'all-in-one-wp-sticky-anything')}</p>
                        <ul>
                            <li>{wp.i18n.__('1. Open any page with Elementor editor.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('2. Select the container or section you want to make sticky.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('3. Go to the "Advanced" tab in the Elementor panel.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('4. Scroll down to the "Sticky Anything" section and enable the "Sticky" option.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('6. Adjust "Z-index" if needed to control the stacking order.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('7. Update/Publish the page to apply the changes.', 'all-in-one-wp-sticky-anything')}</li>
                        </ul>
                    </div>
                    <div class="settings-col">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/HoqbZcAFYFE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                {/* sticky header in elementor stop here */}

                {/* sticky header via customizer start here */}
                <div class="settings-row bg-10">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Sticky Header via Customizer')}</h2>
                        <p>{wp.i18n.__('You can create a Sticky Header via Customizer without any hussle. Just follow these steps:', 'all-in-one-wp-sticky-anything')}</p>
                        <ul>
                            <li>{wp.i18n.__('1. Navigate Appearance > Customize.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('2. Navigate to the "Sticky Anything" section.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('3. Navigate to the "Sticky Header" section.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('4. Enable the "Sticky Header" option.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('6. Adjust "Z-index" if needed to control the stacking order.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('7. Click the Publish bytton on the customizer.', 'all-in-one-wp-sticky-anything')}</li>
                        </ul>
                    </div>
                    <div class="settings-col">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/AoaESe5hKJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
                {/* sticky header via customizer stop here */}

                {/* sticky social icons start here */}
                <div class="settings-row bg-9">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Sticky Social Icons')}</h2>
                        <p>{wp.i18n.__('You can make Sticky Social Icons easily by All-in-one WP Sticky Anyting. You need to do some step for it.', 'all-in-one-wp-sticky-anything')}</p>

                        <ul>
                            <li>{wp.i18n.__('1. Go to WordPress Dashboard → Sticky Anything → Settings → Social Icons.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('2. Enable the "Sticky Social Icons" option.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('3. Customize the social icons settings to your preference.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('4. Click "Add Icon" to insert social icons, then configure the icon and URL.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('5. Click the "Save" button at the top to apply your changes.', 'all-in-one-wp-sticky-anything')}</li>
                        </ul>

                    </div>
                    <div class="settings-col">
                        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=1ts_suH0PKZJddXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
                {/* sticky social icons stop here */}

                {/* sticky cookie consent start here */}
                <div class="settings-row bg-9">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Sticky Cookie Consent')}</h2>
                        <p>{wp.i18n.__('You can make Sticky Social Icons easily by All-in-one WP Sticky Anyting. You need to do some step for it.', 'all-in-one-wp-sticky-anything')}</p>

                        <ul>
                            <li>{wp.i18n.__('1. Go to WordPress Dashboard → Sticky Anything → Settings → Sticky Cookie Consent.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('2. Enable the "Sticky Cookie Consent" option.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('3. Customize the cookie consent message, button text & style.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('5. Click the "Save" button at the top to apply your changes.', 'all-in-one-wp-sticky-anything')}</li>
                        </ul>

                    </div>
                    <div class="settings-col">
                        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=1ts_suH0PKZJddXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
                {/* sticky cookie consent stop here */}

                {/* sticky cookie consent start here */}
                <div class="settings-row bg-9">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Sticky Table of Content (TOC) ⚡')}</h2>
                        {/* stick toc */}
                        <p>{wp.i18n.__('Display a sticky table of contents to help users navigate your content.', 'all-in-one-wp-sticky-anything')}</p>

                        <ul>
                            <li>{wp.i18n.__('1. Go to WordPress Dashboard → Sticky Anything → Settings → Sticky Table of Contents.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('2. Enable the "Table of Contents" option.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('3. Enable the "Sticky" option.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('4. Customize the table of contents settings to your preference.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('5. Click the "Save" button at the top to apply your changes.', 'all-in-one-wp-sticky-anything')}</li>
                        </ul>

                    </div>
                    <div class="settings-col">
                        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=1ts_suH0PKZJddXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
                {/* sticky cookie consent stop here */}

                {/* sticky sidebar start here */}
                <div class="settings-row bg-9">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Sticky Element')}</h2>
                        <p>{wp.i18n.__('You can make any sticky element or sidebar easily on your WordPress website by All-in-one WP Sticky Anyting. Integration is super easy. You need add a class on your target element. ex: sticky.', 'all-in-one-wp-sticky-anything')}</p>
                    </div>
                    <div class="settings-col">
                        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=1ts_suH0PKZJddXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
                {/* sticky sidebar stop here */}

                {/* sticky sidebar start here */}
                <div class="settings-row bg-9">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Sticky Sidebar')}</h2>
                        <p>{wp.i18n.__('Setting up a sticky sidebar on your WordPress site is simple with the All-in-One WP Sticky Anything plugin. Just follow these steps to get started:', 'all-in-one-wp-sticky-anything')}</p>
                        <ul>
                            <li>{wp.i18n.__('1. Go to your WordPress Dashboard. Navigate to: Sticky Anything > Settings > Sticky Sidebar.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('2. Enable the Sticky Sidebar. Toggle the option to enable the sticky sidebar functionality.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('3. Enter the Sidebar Selector. This is the class or ID of the sidebar you want to make sticky. Since it varies depending on your theme, right-click on your sidebar in the browser and select Inspect. Copy the relevant selector name (e.g., .sidebar or #secondary) and paste it into the Sidebar Selector field.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('4. Enter the Sidebar Container Selector. This is the outer container that holds the sidebar. Again, inspect the element in your browser and copy the correct selector. Paste it into the Sidebar Container Selector field.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('5. Adjust additonal settings based on your needs.', 'all-in-one-wp-sticky-anything')}</li>
                            <li>{wp.i18n.__('6. Now you can click save button on the header.', 'all-in-one-wp-sticky-anything')}</li>
                        </ul>
                    </div>
                    <div class="settings-col">
                        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=1ts_suH0PKZJddXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
                {/* sticky sidebar stop here */}

                {/* custom css start here */}
                <div class="settings-row bg-9">
                    <div class="settings-col">
                        <h2>{wp.i18n.__('Custom CSS')}</h2>
                        <p>{wp.i18n.__('If needed, add custom CSS to fine-tune the appearance and behavior of the sticky header. Your custom css need to paste on the Custom CSS box and Click Save button.', 'all-in-one-wp-sticky-anything')}</p>
                    </div>
                    <div class="settings-col">
                        {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Y-x0efG1seA?si=1ts_suH0PKZJddXi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    </div>
                </div>
                {/* custom css stop here */}
            </div>
        </div>
    )
}
