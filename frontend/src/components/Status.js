export default function Status({ updateCharacter, deployArmor, markClock, character }) {

  return (
    <div id="status" className="border rounded-4 p-3">
    <div>
    <h3>Status</h3>
      <div id="stress" className="input-group">
        <strong>Stress:&nbsp;</strong>
        <input type="checkbox" onChange={markClock} checked={character.stress >= 1 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 2 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 3 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 4 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 5 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 6 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 7 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 8 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stress >= 9 || false} className="form-check-input bg-secondary" />
      </div>

      <div id="trauma" className="input-group">
        <strong>Trauma:&nbsp;</strong>
        <input type="checkbox" onChange={markClock} checked={character.trauma >= 1 || false} className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.trauma >= 2 || false} className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.trauma >= 3 || false} className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.trauma >= 4 || false} className="form-check-input bg-secondary"/>
      </div>

      <div id="healing" className="input-group">
        <strong>Healing:&nbsp;</strong>
        <input type="checkbox" onChange={markClock} checked={character.healing >= 1 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.healing >= 2 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.healing >= 3 || false} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.healing >= 4 || false} className="form-check-input bg-secondary" />
      </div>
      <br />
      <div><strong>Armor Used:&nbsp;</strong>
        <label>Armor: &nbsp;
          <input 
            type="checkbox" 
            name="usedArmor" 
            onChange={deployArmor} 
            checked={character.usedArmor || false}
            className="form-check-input bg-secondary"
            />
        </label>
        <label>&nbsp;Heavy:&nbsp;
          <input 
            type="checkbox" 
            name="usedHeavy" 
            onChange={deployArmor} 
            checked={character.usedHeavy || false}
            className="form-check-input bg-secondary"
            />
        </label>
        <label>&nbsp;Special:&nbsp;
        <input 
          type="checkbox" 
          name="usedSpecial" 
          onChange={deployArmor} 
          checked={character.usedSpecial || false}
          className="form-check-input bg-secondary"
          />
        </label>
      </div>
      <br />
      </div>
      <div>
        <strong>Injuries:</strong>
        <div className="mt-3">
          Level 3:&nbsp;
            <input
              type="text"
              name="level3harm"
              onChange={updateCharacter}
              value={character.level3harm}
              className="form-text-input bg-secondary"
            />
        </div>
        <div>
          Level 2:&nbsp;
            <input
              type="text"
              name="level2First"
              onChange={updateCharacter}
              value={character.level2First}
              className="form-text-input bg-secondary"
            />
            <input
              type="text"
              name="level2Second"
              onChange={updateCharacter}
              value={character.level2Second}
              className="form-text-input bg-secondary"
            />
        </div>
        <div>
          Level 1:&nbsp;
          <input
            type="text"
            name="level1First"
            onChange={updateCharacter}
            value={character.level1First}
            className="form-text-input bg-secondary"
          />
          <input
            type="text"
            name="level1Second"
            onChange={updateCharacter}
            value={character.level1Second}
            className="form-text-input bg-secondary"
          />
        </div>
      </div>
    </div>

  )
}
