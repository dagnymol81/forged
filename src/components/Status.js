import { useRef } from "react"

export default function Status({ character, setCharacter, updateCharacter, }) {

  //todo: mark boxes according to number

  let stress = useRef(character.stress)
  const countStress = (e) => {
      if (e.target.checked) {
        stress.current++
      } else {
        stress.current--
      }
      setCharacter(existingValues => ({
        ...existingValues,
        stress: stress.current
      }))
    }

    let trauma = useRef(character.trauma)
    const countTrauma = (e) => {
        if (e.target.checked) {
          trauma.current++
        } else {
          trauma.current--
        }
        setCharacter(existingValues => ({
          ...existingValues,
          trauma: trauma.current
        }))
      }

      let healing = useRef(character.healing)
      const countHealing = (e) => {
        if (e.target.checked) {
          healing.current++
        } else {
          healing.current--
        }
        setCharacter(existingValues => ({
          ...existingValues,
          healing: healing.current
        }))
      }

  //todo: injuries

  const useArmor = (e) => {
    if (e.target.checked) {
      character.usedArmor = true
    } else {
      character.usedArmor = false
    }
    console.log("armor used: " + character.usedArmor)
  }

  const useHeavy = (e) => {
    if (e.target.checked) {
      character.usedHeavy = true
    } else {
      character.usedHeavy = false
    }
    console.log("heavy armor used: " + character.usedHeavy)
  }

  const useSpecial = (e) => {
    if (e.target.checked) {
      character.usedSpecial = true
    } else {
      character.usedSpecial = false
    }
    console.log("special armor used: " + character.usedSpecial)
  }
 

  return (
    <div>
      <div>
        Stress:
        <input type="checkbox" onChange={countStress} />
        <input type="checkbox" onChange={countStress} />
        <input type="checkbox" onChange={countStress} />
        <input type="checkbox" onChange={countStress} />
        <input type="checkbox" onChange={countStress} />
        <input type="checkbox" onChange={countStress} />
        <input type="checkbox" onChange={countStress} />
        <input type="checkbox" onChange={countStress} />
        <input type="checkbox" onChange={countStress} />
      </div>
      <div>
        Trauma:
        <input type="checkbox" onChange={countTrauma} />
        <input type="checkbox" onChange={countTrauma} />
        <input type="checkbox" onChange={countTrauma} />
        <input type="checkbox" onChange={countTrauma} />
      </div>
      <div>
        Healing:
        <input type="checkbox" onChange={countHealing} />
        <input type="checkbox" onChange={countHealing} />
        <input type="checkbox" onChange={countHealing} />
        <input type="checkbox" onChange={countHealing} />
      </div>
      <div>Armor Used:
        <label>Armor: <input type="checkbox" onChange={useArmor} /></label>
        <label>Heavy: 
        <input type="checkbox" onChange={useHeavy} />
        </label>
        <label> Special:
        <input type="checkbox" onChange={useSpecial} />
        </label>
      </div>
      <div>
        <textarea name="notes" onChange={updateCharacter} />
      </div>
    </div>

  )
}
