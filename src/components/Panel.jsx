export default function Panel({title, content}) {
    return (
        <div className={`panel greyish ${panelId}`}>
            <p>{title}</p>
            <h3>{content}</h3>
        </div>
    )
}

