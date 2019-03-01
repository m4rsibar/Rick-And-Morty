import React, { Component } from "react";
import Planet from "./Planet";
import { withRouter } from "react-router-dom";

class PlanetsList extends Component {
  state = {
    fixedHeader: false
  };

  render() {
    // console.log("props ", this.props);
    return (
      <div className="planetsBox">
        {this.props.planets.map(p => (
          <Planet p={p} id={p.id} />
        ))}
      </div>
    );
  }
}

export default withRouter(PlanetsList);
