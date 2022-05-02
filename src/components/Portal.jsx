export default function Portal({title, content}) {
    return (<div className="portal greyish">
        <p>{title}</p>
        <h3>{content}</h3>
        <div className="dark-grey-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi1nQWfeLPY_aK7JycrYVNerf6xGKGSeGgA&usqp=CAU" alt="" />
        </div>
    </div>)
}