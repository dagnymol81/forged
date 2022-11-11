import { useEffect } from "react"
import { useState } from "react"
import startingAbilities from '../data/abilities'

export default function SelectAbility({ character, setCharacter }) {

  const [abilities, setAbilities] = useState([])

  const chooseAbility = (e) => {
    setAbilities([...abilities, e.currentTarget.id])
  }

  const addCustomAbility = (e) => {
    e.preventDefault()
    setAbilities([...abilities, ''])
  }

  const updateOneAbility = (e) => {
    const index = Number(e.target.name)
    const newAbilities = abilities.map((ability, i) => {
      if (i === index) {
        return e.target.value
      } else {
        return ability
      }
    })
    setAbilities(newAbilities)
  }

  useEffect(() => {
    setCharacter(existingValues => ({
      ...existingValues,
      abilities: abilities
    }))
  }, [abilities, setCharacter])

  return(
    <>

    <button onClick={addCustomAbility}>Add Custom Ability</button>

    {abilities.map((box, i) => {
      return(
        <textarea 
          key={i}
          name={i}
          defaultValue={abilities[i]} 
          onChange={updateOneAbility}
        />
      )
    })}

    {/* {startingAbilities.map((ability) => {
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

    })} */}
    </>
  )
}