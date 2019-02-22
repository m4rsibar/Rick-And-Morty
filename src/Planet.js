import React from "react";

const Planet = props => {
  return (
    <div className="planetContainer">
      {props.p.name}
    </div>
  )

};

export default Planet;
