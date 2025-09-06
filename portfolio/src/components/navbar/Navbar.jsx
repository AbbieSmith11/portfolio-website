import "./Navbar.css";
import NavItem from "./nav-items/NavItem";

function Navbar() {
  return (
    <nav>
      <ul>
        <NavItem label="Home" to="/" />
        <NavItem label="Projects" to="/projects" />
        <NavItem label="Contact" to="/contact" />
      </ul>
    </nav>
  );
}

export default Navbar;
