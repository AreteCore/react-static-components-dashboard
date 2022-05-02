import "../App.css"
import Panel from "./Panel.jsx"
import Nav from "./Nav.jsx"
import Portal from "./Portal.jsx"

export default function Main(props) {
return (<div className="main">
    <Nav />
    <Panel panelId="p2"
    title="Reviews" 
    content="1,281"/>
    <Panel panelId="p1"
    title="Avg. Rating" 
    content="4.6"/>
    <Panel panelId="p3"
    title="Sentiment Analysis"
    content="960 <br> 122 <br> 131"/>
    <Portal />
</div>)
}

