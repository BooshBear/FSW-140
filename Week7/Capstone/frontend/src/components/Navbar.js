import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>    
            <Link to="/" id='Home'>HOME</Link>
            <Link to="/SignUps" id='SignUps'>SIGNUPS</Link>
        </div>
    )
}