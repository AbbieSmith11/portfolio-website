import '../Navbar.jsx'
import { Link } from 'react-router-dom'

function NavItem (props) {
    return (
        <li>
            <Link to={props.route}>{props.item}</Link>
        </li>
    )
}

export default NavItem