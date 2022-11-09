import { useState } from "react";
import { useEffect, } from "react";
import { useParams } from "react-router-dom";
import ShowInfo from "../components/ShowInfo";
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

  // const initializeClock = (field) => {
  //   console.log('initializing ' + field + field.value)
  // }
    
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


  return ( 
    <div>
    <h1>Show</h1>

    {character && character.characterName}

      <form onSubmit={handleSubmit}>
        {character && 
          <ShowInfo 
            character={character} 
        />}

        {character && 
          <Status 
            character={character} 
            updateCharacter={updateCharacter} 
            deployArmor={deployArmor} 
            markClock={markClock} 
        />}

        <button>Update</button>
      </form>
    </div>
  );
}