export default function Status({ updateCharacter, deployArmor, markClock, character }) {

  return (
    <div>
      <div id="stress">
        Stress:
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
      </div>

      <div id="trauma">
        Trauma:
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
      </div>

      <div id="healing">
        Healing:
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
        <input type="checkbox" onChange={markClock} />
      </div>

      <div>Armor Used:
        <label>Armor: 
          <input 
            type="checkbox" 
            name="usedArmor" 
            onChange={deployArmor} 
            />
        </label>
        <label>Heavy: 
          <input 
            type="checkbox" 
            name="usedHeavy" 
            onChange={deployArmor} 
            />
        </label>
        <label> Special:
        <input 
          type="checkbox" 
          name="usedSpecial" 
          onChange={deployArmor} 
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
              // value={character.level3harm}
            />
        </div>
        <div>
          Level 2:
            <input
              type="text"
              name="level2First"
              onChange={updateCharacter}
              // value={character.level2First}
            />
            <input
              type="text"
              name="level2Second"
              onChange={updateCharacter}
              // value={character.level2Second}
            />
        </div>
        <div>
          Level 1:
          <input
            type="text"
            name="level1First"
            onChange={updateCharacter}
            // value={character.level1First}
          />
          <input
            type="text"
            name="level1Second"
            onChange={updateCharacter}
            // value={character.level1Second}
          />
        </div>

      </div>

      <div>
        <textarea 
          name="notes" 
          onChange={updateCharacter} 
          // value={character.notes}  
        />
      </div>
    </div>

  )
}
