export default function Group({ icon = '⚙️', title = wp.i18n.__('Genaral', 'all-in-one-wp-sticky-anything'), children }) {
    return (
        <div className="settings-content-group">
            <div className="header">
                <span className="icon">{icon}</span>
                <h3>{title}</h3>
            </div>

            {children}
        </div>
    )
}