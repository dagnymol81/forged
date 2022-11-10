import CharacterInfo from "../components/CharacterInfo"
import {  useState  } from "react"
import characterService from '../services/characterService'
import { useNavigate } from "react-router-dom"
import SelectAbility from "../components/SelectAbility"


export default function CreateCharacter({ user }) {

  const navigate = useNavigate()

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
    abilities: [],
  })
  
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
      const response = await characterService.add(character)
      console.log(response)
      navigate('/crew')
    } catch (error) {
      console.log(error)
    }
  }

  return(
    <>
    <form>

      <SelectAbility character={character} setCharacter={setCharacter} />

      <CharacterInfo 
        updateCharacter={updateCharacter} 
        character={character} />
        
      <button onClick={handleSubmit}>Save</button>
    </form>
    </>
  )
}