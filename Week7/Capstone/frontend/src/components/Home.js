import ListAvengers from "./listAvengers";
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <header>
                <h1>The Current Avengers</h1>
                <h2>Want to join them? <Link to="/SignUps">click here</Link></h2>
            </header>
            <div id="ListAvengers">{<ListAvengers/>}</div>
        </>
    )
}