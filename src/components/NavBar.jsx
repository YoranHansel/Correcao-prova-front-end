import { Link } from 'react-router-dom'
import "./NavBar.css"

function NavBar(props){
    return <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/pets">Pets</Link></li>
        </ul>
    </nav>
}

export default NavBar