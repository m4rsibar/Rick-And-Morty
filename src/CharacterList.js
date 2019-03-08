import React, { Component } from "react";
import Character from "./Character";
import Next from "./Next";
import Prev from "./Prev";

class CharacterList extends Component {
  componentDidMount() {
    this.props.closeMenu();
  }

  render() {
    return (
      <div className="charactersBox">
        {this.props.characters.map((c, index) => (
          <Character
            key={index}
            character={c}
            updateFavsState={this.props.updateFavsState}
            location={this.props.location}
          />
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

export default CharacterList;
