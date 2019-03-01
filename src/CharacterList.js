import React from "react";
import Character from "./Character";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CharacterList = props => {
  return (
    <TransitionGroup>
      <div className="charactersBox">
        {props.characters.map((c, index) => (
          <CSSTransition key={c.id} timeout={700} classNames="fade">
            <Character key={index} character={c} />
          </CSSTransition>
        ))}
      </div>
    </TransitionGroup>
  );
};

export default CharacterList;
