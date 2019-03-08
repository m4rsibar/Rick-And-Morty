import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Prev extends Component {
  choosePrev = () => {
    if (this.props.location.pathname === "/") {
      return `${this.props.prevCharacter}`;
    } else if (this.props.location.pathname === "/planets") {
      return `${this.props.prevPlanet}`;
    } else if (this.props.location.pathname === "/episodes") {
      return `${this.props.prevEpisode}`;
    }
  };

  chooseData = () => {
    if (this.props.location.pathname === "/") {
      return "characters";
    } else if (this.props.location.pathname === "/planets") {
      return "planets";
    } else if (this.props.location.pathname === "/episodes") {
      return "episodes";
    }
  };

  render() {
    return (
      <Link
        to="#"
        onClick={e => {
          e.preventDefault();
          this.props.fetchSomeData(this.choosePrev(), this.chooseData());
        }}
      >
        <img
          className="prevIcon"
          src="https://img.icons8.com/material/34/000000/back.png"
          alt="Previous Page"
          title="Previous Page"
        />
      </Link>
    );
  }
}

export default withRouter(Prev);
