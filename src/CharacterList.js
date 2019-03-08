import React, { Component } from "react";
import Character from "./Character";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Next from "./Next";
import Prev from "./Prev";

class CharacterList extends Component {
  componentDidMount() {
    this.props.closeMenu();
  }

  render() {
    return (
      <TransitionGroup>
        <div className="charactersBox">
          {this.props.characters.map((c, index) => (
            <CSSTransition key={c.id} timeout={700} classNames="fade">
              <Character
                key={index}
                character={c}
                updateFavsState={this.props.updateFavsState}
              />
            </CSSTransition>
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
      </TransitionGroup>
    );
  }
}

export default CharacterList;
