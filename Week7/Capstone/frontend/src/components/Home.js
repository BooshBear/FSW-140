import ListAvengers from "./listAvengers";
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <header>
                <h1 className="text-center font-extrabold text-4xl">The Current Avengers</h1>
                <h2 className="text-center">Want to join them? <Link to="/SignUps">click here</Link></h2>
            </header>
            <div className="">{<ListAvengers/>}</div>
        </>
    )
}