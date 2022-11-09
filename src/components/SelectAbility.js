import e from "cors"
import { useState } from "react"
import startingAbilities from '../data/abilities'

export default function SelectAbility() {

  const [abilities, setAbilities] = useState([])

  const chooseAbility = (e) => {
    setAbilities([...abilities, e.currentTarget.id])
  }

  const addAbility = (e) => {
    return(
      <textarea></textarea>
    )
  }

  return(
    <>

    <button onClick={addAbility}>Add Another Ability</button>

    {abilities.map((box, i) => {
      return(
        <textarea key={i} value={abilities[i]} readOnly />
      )
    })}

    {startingAbilities.map((ability) => {
      return(
        <div 
          key={ability.name} 
          id={ability.name} 
          name={ability.name}
          onClick={chooseAbility}
        >
          <h3>{ability.name}</h3>
          {ability.shortDesc}<br />
          {ability.details}
        </div>
      )

    })}
    </>
  )
}