import { NavLink } from "react-router-dom";

export default function NavBar() {
return (
    <nav className="nav-bar" style={{ backgroundColor: "lightblue" }}>
        <ul style={{ display: "flex", flexDirection: "row" }}>
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
