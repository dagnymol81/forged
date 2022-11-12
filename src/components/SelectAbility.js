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

  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

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

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



    </>
  )
}