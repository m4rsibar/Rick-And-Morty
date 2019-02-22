import React from 'react'

const Character = (props) => {
  let type = props.character.type;

  let statusStyle = {
    color: 'black'
  };


  return (
    <div className="cardContainer">
      <img className="characterIcon" src={props.character.image} alt="Character Icon" />

      <div className="topBox">
        <span className="title">{props.character.name}</span>
        <div className="infoContainer">
          <span><br />
            <div className="locationBox">
              <img className="location" src="../icons8-marker-480.png" alt="Location Icon" />
              <span className="locationText">{props.character.location.name}</span>
            </div>

            <div className="statusBox">
              <span>Status: </span>
              <span className="status" style={statusStyle}>{props.character.status}</span>
            </div>
          </span>
        </div>
      </div>
      <div className="typeBox">
        {type !== "" ? <span className="typeText">{type}</span>
          : null}
      </div>
    </div>
  )
}

export default Character