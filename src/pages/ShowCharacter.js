import { useState } from "react";
import { useEffect, } from "react";
import { useParams } from "react-router-dom";
import CharacterInfo from "../components/CharacterInfo";
import ShowAbilities from "../components/ShowAbilities";
import ShowInfo from "../components/ShowInfo";
import ShowItems from "../components/ShowItems";
import Status from "../components/Status";
import characterService from '../services/characterService'

export default function ShowCharacter() {
   
    let [ character, setCharacter ] = useState({})
    const params = useParams()

    const getCharacter = async () => {
      try {
          const response = await characterService.find(params.id)
          setCharacter(response.data.character)
      } catch (error) {
          console.log(error)
      }
  }
    
    useEffect(() => {
      getCharacter()
    }, [])
   
  const markClock = (e) => {
    let clockName = e.target.parentNode.id //should match the name of the Character property we are changing
    let container = document.getElementById(clockName) //div the inputs are in
    let marked = container.querySelectorAll('input[type="checkbox"]:checked').length //how many are checked
    setCharacter(existingValues => ({ //update state with new value for clock
      ...existingValues,
      [clockName]: marked
    }))
  }

  const deployArmor = (e) => {
    const fieldName = e.target.name
    e.target.checked 
      ? setCharacter(existingValues => ({
        ...existingValues,
        [fieldName]: true
      }))
      : setCharacter(existingValues => ({
        ...existingValues,
        [fieldName]: false
      }))
  }

  const updateCharacter = (e) => {
    const fieldName = e.target.name
    setCharacter(existingValues => ({
      ...existingValues,
      [fieldName]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const response = await characterService.update(character)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

const [editMode, setEditMode] = useState(false)
const handleEditMode = () => {
  if (editMode) {
    setEditMode(false)
  } else {
    setEditMode(true) 
  }
  
}

  return ( 
    <div>
    <h1>Show</h1>



    <button onClick={handleEditMode}>Toggle Edit</button>
    
    <p>{editMode}</p>

    <form onSubmit={handleSubmit}>

      {character.characterName && !editMode &&
        <ShowInfo 
          character={character} 
        />}

      {character.characterName && editMode &&
        <CharacterInfo
          updateCharacter={updateCharacter} 
          character={character}
        />}

      {character.characterName && 
        <Status 
          character={character} 
          updateCharacter={updateCharacter} 
          deployArmor={deployArmor} 
          markClock={markClock} 
      />}

      {character.characterName && 
        <ShowAbilities
          abilities={character.abilities}
      />}

      {character.characterName &&
      <ShowItems
        items={character.items}
      />
      }

        <button>Update</button>
      </form>
    </div>
  );
}