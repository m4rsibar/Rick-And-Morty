import React from "react";
import Character from "./Character";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Next from "./Next";
import Prev from "./Prev";

const CharacterList = props => {
  return (
    <TransitionGroup>
      <div className="charactersBox">
        {props.characters.map((c, index) => (
          <CSSTransition key={c.id} timeout={700} classNames="fade">
            <Character key={index} character={c} />
          </CSSTransition>
        ))}
        <Prev
          fetchSomeData={props.fetchSomeData}
          prevPlanet={props.prevPlanet}
          prevCharacter={props.prevCharacter}
          prevEpisode={props.prevEpisode}
        />
        <Next
          fetchSomeData={props.fetchSomeData}
          nextCharacter={props.nextCharacter}
          nextPlanet={props.nextPlanet}
          nextEpisode={props.nextEpisode}
          scroll={props.scroll}
        />
      </div>
    </TransitionGroup>
  );
};

export default CharacterList;
