import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import startingAbilities from '../data/abilities'

export default function SelectAbility({ character, setCharacter }) {

  const [abilities, setAbilities] = useState([])
  const nameRef = useRef()
  const descRef = useRef()
  const detailRef = useRef()

  const chooseAbility = (e) => {
    e.currentTarget.classList.add("selected-ability")
    const selectedAbility = startingAbilities.find(ability => ability.name === e.currentTarget.id)
    setAbilities([...abilities, selectedAbility])
  }

  const addCustom = (e) => {
    e.preventDefault()
    const newAbility = {
      name: nameRef.current.value,
      shortDesc: descRef.current.value,
      detail: detailRef.current.value
    }
    setAbilities([...abilities, newAbility])
    nameRef.current.value = ''
    descRef.current.value = ''
    detailRef.current.value = ''
  }

  useEffect(() => {
    setCharacter(existingValues => ({
      ...existingValues,
      abilities: abilities
    }))
  }, [abilities, setCharacter])

  return(
    <>

    
  <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Abilities
  </button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Abilities</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

      <div className="my-3">
        <h3>Custom Ability</h3>
        <div className="input-group m-1">
          <span className="input-group-text">Name:</span>
          <input type="text" name="custom-ability-name" ref={nameRef} className="form-control" />
        </div>

        <div className="input-group m-1">
        <span className="input-group-text">Description:</span>
          <input type="text" name="custom-ability-desc" ref={descRef} className="form-control" />
        </div>

        <div className="input-group m-1">
        <span className="input-group-text">Details:</span>
          <input type="text" name="custom-ability-details" ref={detailRef} className="form-control" />
        </div>
        <button onClick={addCustom} className="btn btn-light">Add Custom</button>
      </div>

      <div className="my-3">
      <h3>My Abilities</h3>
      {abilities.map((ability) => {
        return(
          <div key={ability.name} className="border p-2">
          <p>
          <strong>{ability.name}</strong> {ability.shortDesc}
          </p><p>
          {ability.detail}
          </p>
          </div>
        )
      })}
      </div>

      <h3>Available Abilities</h3>
      {startingAbilities.map((ability) => {
      return(
        <div 
          key={ability.name} 
          id={ability.name} 
          name={ability.name}
          className="starting-ability border p-2"
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
      </div>
    </div>
  </div>
</div>



    </>
  )
}