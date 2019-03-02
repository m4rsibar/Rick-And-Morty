import React, { Component } from "react";
import Planet from "./Planet";
import { withRouter } from "react-router-dom";

class PlanetsList extends Component {
  state = {
    fixedHeader: false
  };

  render() {
    return (
      <div className="planetsBox">
        {this.props.planets.map(p => (
          <Planet p={p} id={p.id} key={p.id} />
        ))}
      </div>
    );
  }
}

export default withRouter(PlanetsList);
