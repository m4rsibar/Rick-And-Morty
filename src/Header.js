import React from "react";
import { NavLink, Link } from "react-router-dom";
import Next from "./Next";
import Prev from "./Prev";
import { withRouter } from "react-router-dom";

const Header = props => {
  return (
    <div
      className="headerBox"
      style={{ position: props.location.pathname === "/" ? "fixed" : "" }}
    >
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
          <NavLink to="/episodes">Episodes</NavLink>
        </li>
        <li>
          <Link to="#" onClick={() => props.randomizeCharacters()}>
            <img
              src="https://img.icons8.com/material/24/000000/synchronize.png"
              alt="Randomize"
              title="Randomize Characters"
              className="randomize"
              style={{
                display: props.location.pathname === "/" ? "initial" : "none"
              }}
            />
          </Link>
        </li>
        <div className="arrows">
          <Prev
            fetchSomeData={props.fetchSomeData}
            prevPlanet={props.prevPlanet}
            prevCharacter={props.prevCharacter}
            prevEpisode={props.prevEpisode}
          />
          <Next
            fetchSomeData={props.fetchSomeData}
            nextCharacter={props.nextCharacter}
            nextPlanet={props.nextPlanet}
            nextEpisode={props.nextEpisode}
          />
        </div>
      </ul>
    </div>
  );
};

export default withRouter(Header);
