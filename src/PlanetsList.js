import React, { Component } from "react";
import Planet from "./Planet";
import { withRouter } from "react-router-dom";
import Next from "./Next";
import Prev from "./Prev";

class PlanetsList extends Component {
  render() {
    return (
      <div className="planetsBox">
        {this.props.planets.map(p => (
          <Planet p={p} id={p.id} key={p.id} />
        ))}
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
    );
  }
}

export default withRouter(PlanetsList);
