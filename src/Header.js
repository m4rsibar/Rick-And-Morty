import React from "react";
import { NavLink, Link } from "react-router-dom";
import Next from "./Next";
import Prev from "./Prev";

const Header = props => {
  return (
    <div className="headerBox">
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
          <Link to="#" onClick={() => props.randomizeCharacters()}>
            <img
              src="https://img.icons8.com/material/24/000000/synchronize.png"
              alt="Randomize"
              title="Randomize Characters"
            />
          </Link>
        </li>
        <div className="arrows">
          <Prev fetchSomeData={props.fetchSomeData} prev={props.prev} />
          <Next fetchSomeData={props.fetchSomeData} next={props.next} />
        </div>
      </ul>
    </div>
  );
};

export default Header;
