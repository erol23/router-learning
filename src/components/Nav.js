import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/instructors">Instructors</Link>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({ color: isActive && "red" })}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
