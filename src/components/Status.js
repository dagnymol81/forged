export default function Status({ updateCharacter, deployArmor, markClock, character }) {

  return (
    <div>
      <div id="stress">
        Stress:
        <input type="checkbox" onChange={markClock} checked={character.stress >= 1} />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 4} />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 5} />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 6} />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 7} />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 8} />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 9} />
      </div>

      <div id="trauma">
        Trauma:
        <input type="checkbox" onChange={markClock} checked={character.trauma >= 1} />
        <input type="checkbox" onChange={markClock} checked={character.trauma >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.trauma >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.trauma >= 4} />
      </div>

      <div id="healing">
        Healing:
        <input type="checkbox" onChange={markClock} checked={character.healing >= 1}  />
        <input type="checkbox" onChange={markClock} checked={character.healing >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.healing >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.healing >= 4} />
      </div>

      <div>Armor Used:
        <label>Armor: 
          <input 
            type="checkbox" 
            name="usedArmor" 
            onChange={deployArmor} 
            checked={character.usedArmor}
            />
        </label>
        <label>Heavy: 
          <input 
            type="checkbox" 
            name="usedHeavy" 
            onChange={deployArmor} 
            checked={character.usedHeavy}
            />
        </label>
        <label> Special:
        <input 
          type="checkbox" 
          name="usedSpecial" 
          onChange={deployArmor} 
          checked={character.usedSpecial}
          />
        </label>
      </div>

      <div>
        Injuries:
        <div>
          Level 3:
            <input
              type="text"
              name="level3harm"
              onChange={updateCharacter}
              value={character.level3harm}
            />
        </div>
        <div>
          Level 2:
            <input
              type="text"
              name="level2First"
              onChange={updateCharacter}
              value={character.level2First}
            />
            <input
              type="text"
              name="level2Second"
              onChange={updateCharacter}
              value={character.level2Second}
            />
        </div>
        <div>
          Level 1:
          <input
            type="text"
            name="level1First"
            onChange={updateCharacter}
            value={character.level1First}
          />
          <input
            type="text"
            name="level1Second"
            onChange={updateCharacter}
            value={character.level1Second}
          />
        </div>

      </div>


    </div>

  )
}
