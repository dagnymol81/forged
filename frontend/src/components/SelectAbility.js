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
  <h3 className="my-3">Abilities</h3>
  <p>
    <em>Select one special ability.</em>
      </p><p>
      <em>You may choose an additional ability when you fill your playbook XP.</em>
  </p>

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
    
  <button type="button" className="btn btn-dark mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Add Abilities
  </button>


<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-xl">
    <div className="modal-content bg-dark">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Abilities</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

      <div className="my-3">
        <h3>Custom Ability</h3>
        <div className="input-group m-1">
          <span className="input-group-text bg-dark text-light">Name:</span>
          <input type="text" name="custom-ability-name" ref={nameRef} className="form-control bg-secondary text-light" />
        </div>

        <div className="input-group m-1">
        <span className="input-group-text bg-dark text-light">Description:</span>
          <input type="text" name="custom-ability-desc" ref={descRef} className="form-control bg-secondary text-light" />
        </div>

        <div className="input-group m-1">
        <span className="input-group-text bg-dark text-light">Details:</span>
          <input type="text" name="custom-ability-details" ref={detailRef} className="form-control bg-secondary text-light" />
        </div>
        <button onClick={addCustom} className="btn btn-secondary text-dark">Add Custom</button>
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
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>



    </>
  )
}