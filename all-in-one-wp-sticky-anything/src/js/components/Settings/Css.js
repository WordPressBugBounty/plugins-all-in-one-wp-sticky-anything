const { useContext, useEffect } = wp.element;
const { TextareaControl } = wp.components;

import SettingsContext from "../../Contexts/SettingsContext";
import Notice from "../../includes/Notice";

export default function Css() {
    const { isPro } = ai1wpsa;
    const { data, setData } = useContext(SettingsContext);

    const {
        customCss = '',
    } = data;

    useEffect(() => {

        const editor = document.querySelectorAll('.ai1wpsa-custom-css textarea');

        const instance = wp.codeEditor.initialize(editor, {
            ...wp.codeEditor.defaultSettings,
            mode: 'css',
            wordWrap: true,
            tabSize: 2,
            autoComplete: {
                enable: true,
                showDescriptions: true,
                caseSensitive: true,
                autoTrigger: true,
                delay: 0,
                maxItems: 10,
                sortBy: 'score',
                maxLength: 0,
                maxResults: 10,
                highlightMatches: true,
                maxHighlightLength: 0,
                style: 'popup',
            },
            showGutter: true,
            showPrintMargin: true,
            highlightActiveLine: true,
            showLineNumbers: true,
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableCodeFolding: true,
            enableCodeFormatting: true,
        });

        instance.codemirror.on('change', (codemirror) => {
            const value = codemirror.getValue();
            setData(data => ({ ...data, customCss: value }));
        });
    }, []);

    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-editor-code"></i>
                <span>{wp.i18n.__('Custom CSS', 'ai1wpsa')}</span>
            </div>
            <div className="settings-content">
                {/* Notice */}
                <Notice
                    message={wp.i18n.__(
                        'Custom CSS feature will be discontinued soon. Please save your custom CSS in advance. For assistance, please use the support forum.',
                        'all-in-one-wp-sticky-anything'
                    )}
                    actions={[
                        {
                            label: wp.i18n.__(
                                'Visit Support Forum',
                                'all-in-one-wp-sticky-anything'
                            ),
                            url: 'https://wordpress.org/support/plugin/all-in-one-wp-sticky-anything/',
                        },
                    ]}
                />


                {/* custom css start here */}
                <div class="settings-field">
                    <h4 class="settings-field-label">{wp.i18n.__('Custom CSS', 'all-in-one-wp-sticky-anything')}</h4>
                    <div class="settings-field-content">

                        <TextareaControl
                            value={customCss}
                            className={`ai1wpsa-custom-css`}
                            placeholder={wp.i18n.__('ex: .header{ // your css code here.}', 'all-in-one-wp-sticky-anything')}
                            onChange={(value) => setData({ ...data, customCss: value.target.value })}
                            rows={12}
                        />

                        <p className="description">{wp.i18n.__('Write your custom CSS here.', 'all-in-one-wp-sticky-anything')}</p>
                    </div>
                </div>
                {/* custom css stop here */}
            </div>
        </div>
    )
}
