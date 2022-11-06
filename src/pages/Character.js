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
    notes: ''
  })

  const updateCharacter = (e) => {
    const fieldName = e.target.name
    setCharacter(existingValues => ({
      ...existingValues,
      [fieldName]: e.target.value,
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
        <Status character={character} updateCharacter={updateCharacter} setCharacter={setCharacter} stress={character.stress} />

        <button>Save</button>
        </form>

      <p>
        Name is: {character.characterName} from the {character.crew} crew
      </p>

    </div>
  )
}

