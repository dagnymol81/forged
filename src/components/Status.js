export default function Status({ updateCharacter, deployArmor, markClock}) {

  //todo: display
  //todo: mark boxes according to number

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
            />
        </div>
        <div>
          Level 2:
            <input
              type="text"
              name="level2first"
              onChange={updateCharacter}
            />
            <input
              type="text"
              name="level2second"
              onChange={updateCharacter}
            />
        </div>
        <div>
          Level 1:
          <input
            type="text"
            name="level1first"
            onChange={updateCharacter}
          />
          <input
            type="text"
            name="level1second"
            onChange={updateCharacter}
          />
        </div>

      </div>

      <div>
        <textarea name="notes" onChange={updateCharacter} />
      </div>
    </div>

  )
}
