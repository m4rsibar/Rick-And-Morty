import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Next from "./Next";
import Prev from "./Prev";
import { withRouter } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div
        className="headerBox"
        style={{
          position:
            this.props.location.pathname === "/" || "/search" ? "fixed" : ""
        }}
      >
        <ul
          className={this.props.menuOpen ? "headerUl open" : "headerUl closed"}
          style={
            this.props.menuOpen
              ? { visiblity: "initial" }
              : { visibility: "hidden" }
          }
        >
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
            <Link to="/favorites">Favorites</Link>
          </li>
          <li>
            <NavLink
              to="/search"
              style={{
                display:
                  this.props.location.pathname === "/search"
                    ? "none"
                    : "initial"
              }}
            >
              Search
            </NavLink>
          </li>
          <li>
            <Link to="#" onClick={() => this.props.randomizeCharacters()}>
              <img
                src="https://img.icons8.com/material/24/000000/synchronize.png"
                alt="Randomize"
                title="Randomize Characters"
                className="randomize"
                style={{
                  display:
                    this.props.location.pathname === "/" ? "initial" : "none"
                }}
              />
            </Link>
          </li>

          <div
            className="arrows"
            style={{
              display: this.props.location.pathname === "/search" ? "none" : ""
            }}
          >
            <Prev
              fetchSomeData={this.props.fetchSomeData}
              prevPlanet={this.props.prevPlanet}
              prevCharacter={this.props.prevCharacter}
              prevEpisode={this.props.prevEpisode}
            />
            <Next
              fetchSomeData={this.props.fetchSomeData}
              nextCharacter={this.props.nextCharacter}
              nextPlanet={this.props.nextPlanet}
              nextEpisode={this.props.nextEpisode}
              scroll={this.props.scroll}
            />
          </div>
        </ul>
      </div>
    );
  }
}

export default withRouter(Header);
