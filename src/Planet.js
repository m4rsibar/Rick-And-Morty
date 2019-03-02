import React from "react";

const Planet = props => {
  return (
    <div className="planetContainer">
      <h4>{props.p.name}</h4>
      <img
        src="https://img.icons8.com/material/24/000000/planet.png"
        alt="planet"
        className="planetIcon"
      />
      <div>
        <span>Type:{props.p.type}</span>
        <br />
        <span>Dimension:{props.p.dimension}</span>
        <br />
        <span>Created: {props.p.created} </span>
      </div>
    </div>
  );
};

export default Planet;
