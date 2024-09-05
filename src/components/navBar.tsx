import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar" style={{ backgroundColor: "lightblue" }}>
      <ul className="flex flex-row justify-center space-x-4">
        <li>
          <NavLink to="/resultater">Resultater</NavLink>
        </li>
        <li>
          <NavLink to="/deltagere">Deltagere</NavLink>
        </li>
      </ul>
    </nav>
  );
}
