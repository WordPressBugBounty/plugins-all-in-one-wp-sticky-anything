export default function Notice({ type = 'info', message = '', actions = [], openNewTab = true }) {
    return (
        <div className={`ai1wpsa-notice ${type}`}>
            <i className="dashicons dashicons-info"></i>
            <p>{message}</p>
            {actions.length > 0 && (
                <div className="actions">
                    {actions.map((action, index) => (
                        <a key={index} href={action.url} target={`${openNewTab ? '_blank' : 'self'}`}>{action.label}</a>
                    ))}
                </div>
            )}
        </div>
    )
}