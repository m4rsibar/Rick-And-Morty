import React from 'react'
import Character from './Character'
import Next from './Next'
import Prev from './Prev'



const CharacterList = (props) => {

  return (
    <div className="charactersBox">
      <Prev fetchSomeData={props.fetchSomeData}
        prevPage={props.prev} />

      {props.characters.map((c, index) => <Character key={index} character={c} />)}

      <Next
        fetchSomeData={props.fetchSomeData}
        nextPage={props.next}
      />
    </div>
  )
}

export default CharacterList