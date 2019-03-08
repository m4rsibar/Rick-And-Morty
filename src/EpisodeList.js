import React, { Component } from "react";
import Episode from "./Episode";
import Prev from "./Prev";
import Next from "./Next";

class EpisodeList extends Component {
  componentDidMount() {
    this.props.closeMenu();
  }

  render() {
    return (
      <div className="episodesBox">
        {this.props.episodes.map(e => (
          <Episode e={e} id={e.id} key={e.id} />
        ))}
        <br />
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

export default EpisodeList;
