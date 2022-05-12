import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="fixed top-0 bg-neutral-700 w-full h-10">    
            <div className="flex justify-around items-center h-9 text-purple-500 text-xl">
                <Link to="/" className="pl-2 pr-2 hover:border-2 hover:rounded-3xl hover:border-purple-500 hover:bg-purple-500 hover:text-white">HOME</Link>
                <Link to="/SignUps" className="pl-2 pr-2 hover:border-2 hover:rounded-3xl hover:border-purple-500 hover:bg-purple-500 hover:text-white">SIGNUPS</Link>
            </div>
        </div>
    )
}