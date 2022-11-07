import {  useState  } from "react"
import CharacterInfo from "../components/CharacterInfo"
import Status from "../components/Status"
import characterService from '../services/characterService'

export default function Character({ user }) {

  const [character, setCharacter] = useState({ 
    user,
    characterName: '',
    crew: '',
    alias: '',
    look: '',
    heritage: '',
    background: '',
    vice: '',
    purveyor: '',
    stress: 0,
    trauma: 0,
    injuries: [],
    harm: 0,
    healing: 0,
    usedArmor: false,
    usedHeavy: false,
    usedSpecial: false,
    notes: '',
    level1First: '',
    level1Second: '',
    level2First: '',
    level2Second: '',
    level3harm: '',
  })

  const updateCharacter = (e) => {
    const fieldName = e.target.name
    setCharacter(existingValues => ({
      ...existingValues,
      [fieldName]: e.target.value,
    }))
  }

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

  const handleSubmit = async(e) => {
    e.preventDefault()
  try {
    const response = await characterService.add(character)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>

        <CharacterInfo character={character} updateCharacter={updateCharacter} />
        <Status updateCharacter={updateCharacter} deployArmor={deployArmor} markClock={markClock} />

        <button>Save</button>
        </form>

      <p>
        Name is: {character.characterName} from the {character.crew} crew
      </p>

    </div>
  )
}

