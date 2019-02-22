import React from "react";
import Character from "./Character";

const CharacterList = props => {
  return (
    <div className="charactersBox">
      {props.characters.map((c, index) => (
        <Character key={index} character={c} />
      ))}
    </div>
  );
};

export default CharacterList;
