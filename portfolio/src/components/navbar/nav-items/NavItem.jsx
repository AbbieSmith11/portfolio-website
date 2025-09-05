import '../Navbar.jsx'

function NavItem (props) {
    return (
        <li>
            <a href={props.route}>{props.item}</a>
        </li>
    )
}

export default NavItem