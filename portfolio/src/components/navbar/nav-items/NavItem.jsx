import "../Navbar.jsx";
import { NavLink } from "react-router-dom";

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
    >
      {label}
    </NavLink>
  );
}

export default NavItem;
