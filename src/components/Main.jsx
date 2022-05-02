import "../App.css"
import Panel from "./Panel.jsx"
import Nav from "./Nav.jsx"
import Portal from "./Portal.jsx"

export default function Main(props) {
return (<div className="main">
    <Nav />
    <Panel 
    title="Reviews" 
    content="1,281"/>
    <Panel 
    title="Avg. Rating" 
    content="4.6"/>
    <Panel 
    title="Sentiment Analysis"
    content="960 <br> 122 <br> 131"/>
    <Portal />
</div>)
}

