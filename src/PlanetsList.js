import React from "react";
import Planet from './Planet'

const PlanetsList = props => {

  return (
    <div className="planetsBox">
      {props.planets.map(p => <Planet p={p} />)}
    </div>
  );
};

export default PlanetsList;
