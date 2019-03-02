import React, { Component } from "react";
import Episode from "./Episode";

class EpisodeList extends Component {
  render() {
    return (
      <div className="episodesBox">
        {this.props.episodes.map(e => (
          <Episode e={e} id={e.id} key={e.id} />
        ))}
      </div>
    );
  }
}

export default EpisodeList;
