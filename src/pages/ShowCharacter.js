import { useState } from "react";
import { useEffect, } from "react";
import { useParams } from "react-router-dom";
import Notes from "../components/Notes";
import ShowAbilities from "../components/ShowAbilities";
import ShowInfo from "../components/ShowInfo";
import ShowItems from "../components/ShowItems";
import Status from "../components/Status";
import characterService from '../services/characterService'
import Coin from '../components/Coin'
import Skills from '../components/Skills'
import Teamwork from '../components/Teamwork'
import Planning from '../components/Planning'
import GatherInfo from '../components/GatherInfo'
import Bonus from "../components/Bonus";
import ShowFriends from "../components/ShowFriends";
import ShowXPTriggers from '../components/ShowXPTriggers'

//friends
//load

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
    

<form>

<div id="show-character">

  <div className="show-body">
    
    <div className="border rounded-4 p-3 my-3">
    <ShowInfo character={character} />
    </div>
    <Status character={character} updateCharacter={updateCharacter} deployArmor={deployArmor} markClock={markClock} />
    <div className="border p-3 rounded-4 my-3">
    <ShowAbilities character={character} />
    </div>

    <div id="notes" className="border rounded-4 p-3">
      <div>
      <Notes character={character} updateCharacter={updateCharacter} />
      </div>

      <div>
      <ShowXPTriggers character={character} />
      </div>

      <div className="show-friends">
      <ShowFriends friends={character.friends} />
      </div>

    </div>

    <div id="information"  className="border rounded-4 p-3 my-3">
    <Teamwork />
    <Planning />
    <GatherInfo />
    </div>

  </div>
    
  <div className="show-sidebar">
    <Coin character={character} markClock={markClock} />
    <div className="my-3">
    <Skills character={character} markClock={markClock} />
    </div>
    <Bonus />
    <ShowItems items={character.items} />

  </div>
</div>

    <button onClick={handleSubmit}>Save Changes</button>
    </form>
  );
}