import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Next extends Component {
  //returns which url to change(urls passed through props) to the next page based on the location path name and plugs it into to the onClick's data fetching function
  determineNextPageUrl = () => {
    if (this.props.location.pathname === "/") {
      return `${this.props.nextCharacter}`;
    } else if (this.props.location.pathname === "/planets") {
      return `${this.props.nextPlanet}`;
    } else if (this.props.location.pathname === "/episodes") {
      return `${this.props.nextEpisode}`;
    }
  };
  //returns the state needed to be updated with the new pages information based on the location pathname, and plugs it into to the onClick's data fetching function
  determineStateToSet = () => {
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
      <span>
        <Link
          to="#"
          onClick={e => {
            e.preventDefault();
            this.props.fetchSomeData(
              this.determineNextPageUrl(),
              this.determineStateToSet()
            );
            this.props.scroll();
          }}
        >
          <img
            src="https://img.icons8.com/material/34/000000/forward.png"
            alt="Next Page"
            title="Next Page"
          />
        </Link>
      </span>
    );
  }
}

export default withRouter(Next);
