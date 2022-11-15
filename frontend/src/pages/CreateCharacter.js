import CharacterInfo from "../components/CharacterInfo"
import {  useState  } from "react"
import characterService from '../services/characterService'
import { useNavigate } from "react-router-dom"
import SelectAbility from "../components/SelectAbility"
import SelectFriends from "../components/SelectFriends"
import items from '../data/items'
import SelectItems from "../components/SelectItems"
import Skills from "../components/Skills"
import XPTriggers from "../components/XPTriggers"
import Notes from "../components/Notes"
import ShowItems from "../components/ShowItems"

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
    friends: [
    {
      id: '1',
      name: '',
      closeFriend: false,
      rival: false,
    },
    {
      id: '2',
      name: '',
      closeFriend: false,
      rival: false,
    },
    {
      id: '3',
      name: '',
      closeFriend: false,
      rival: false,
    },
    {
      id: '4',
      name: '',
      closeFriend: false,
      rival: false,
    },
    {
      id: '5',
      name: '',
      closeFriend: false,
      rival: false,
    }],
    items: items.standardItems,
    coin: 0,
    stash: 0,
    skill1: 0,
    skill2: 0,
    skill3: 0,
    skill4: 0,
    skill5: 0,
    skill6: 0,
    skill7: 0,
    skill8: 0,
    skill9: 0,
    skill10: 0,
    skill11: 0,
    skill12: 0,
    insightXP: 0,
    prowessXP: 0,
    resolveXP: 0,
    trigger1: '',
    trigger2: '',
    playbook: 0,
  })

  const markClock = (e) => {
    let clockName = e.target.parentNode.id //should match the name of the Character property we are changing
    let container = document.getElementById(clockName) //div the inputs are in
    let marked = container.querySelectorAll('input[type="checkbox"]:checked').length //how many are checked
    setCharacter(existingValues => ({ //update state with new value for clock
      ...existingValues,
      [clockName]: marked
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

    <header className="create-header">
    <h1>Rogue's Gallery: Character Creation</h1>
    </header>

    <div id="create-character">

    <div>

      <div className="info border rounded-4 p-3 my-3">
        <CharacterInfo 
          updateCharacter={updateCharacter} 
          character={character} />
      </div>

      <div className="save-character border rounded-4 p-3 my-3">
      <button onClick={handleSubmit} className="btn btn-dark border">Save Character</button>
      </div>

    <div className="friends-row">
      <div className="border rounded-4 p-3 my-3">
        <SelectFriends 
          updateCharacter={updateCharacter}
          setCharacter={setCharacter}
          character={character}
        />
      </div>
      <div className="border rounded-4 p-3 my-3">
      <XPTriggers 
        character={character}
        updateCharacter={updateCharacter}
      />
    </div>
    </div>



      <div className="border rounded-4 p-3 my-3">
          <SelectAbility character={character} setCharacter={setCharacter} /> 
        </div>

      <div className="border rounded-4 p-3 my-3">
        <Notes 
          character={character}
          updateCharacter={updateCharacter}
        />

    </div>

  </div>

  <div>
    
    <div className="skills border rounded-4 p-3 my-3">
      <Skills
          character={character}
          markClock={markClock}
        />
      <p>
        Characters begin play with seven action dots. Three will be placed based on your playbook. 
      </p><p> 
        Assign <strong>four more dots:</strong> one to an action that reflects your <strong>heritage</strong>, one that reflects your <strong>background</strong>, and <strong>two more dots</strong> in any skills.
      </p><p>
        The <strong>maximum rating</strong> for any skill at character creation is <strong>two</strong>
      </p>
    </div>

    <div className="items border rounded-4 p-3 my-3">
      <SelectItems
          character={character}
          setCharacter={setCharacter}
        />
      <ShowItems items={character.items}/>
    </div>



    </div>  
    
    </div>

    </form>

    </>
  )
}