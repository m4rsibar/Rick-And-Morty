import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = (props) => {
  return (
    <ul className="headerUl">
      <li>
        <NavLink exact to="/">
          Characters
        </NavLink>
      </li>
      <li>
        <NavLink to="/planets">Planets</NavLink>
      </li>
      <li>
        <NavLink to="#">Episodes</NavLink>
      </li>
      <li>
        <Link to="#" onClick={() => props.randomizeCharacters()}> <img src="https://img.icons8.com/material/24/000000/synchronize.png" /></Link>
      </li>
    </ul>
  );
};

export default Header;
