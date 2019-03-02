import React, { Component } from "react";

class Episode extends Component {
  appendZero = id => {
    if (id < 10) {
      return `0${id}`;
    } else {
      return id;
    }
  };

  render() {
    return (
      <div className="episodeContainer">
        <span className="episodeNumber">{this.appendZero(this.props.id)}</span>
        <div className="episodeInfo">
          <span className="episodeName">{this.props.e.name}</span> <br />
          <div className="airedSeason">
            <span className="episodeAired">Aired: {this.props.e.air_date}</span>
            <br />
            <span className="episodeSeason">{this.props.e.episode}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Episode;
