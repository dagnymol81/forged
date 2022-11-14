export default function Coin({character, markClock}) {
  return(
    <>
      <div id="coin" className="input-group">
        Coin:&nbsp;
        <input type="checkbox" onChange={markClock} checked={character.coin >= 1} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 2} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 3} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 4} className="form-check-input bg-secondary" />
      </div>
      <div id="stash">
        Stash:
        <div className="input-group">
        <input type="checkbox" onChange={markClock} checked={character.stash >= 1} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 2}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 3}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 4}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 5}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 6}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 7}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 8} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 9}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 10}  className="form-check-input bg-secondary" />
        </div><div className="input-group">
        <input type="checkbox" onChange={markClock} checked={character.stash >= 11} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 12} className="form-check-input bg-secondary"  />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 13}  className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 14} className="form-check-input bg-secondary"  />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 15} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 16} className="form-check-input bg-secondary"  />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 17} className="form-check-input bg-secondary"  />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 18} className="form-check-input bg-secondary"  />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 19} className="form-check-input bg-secondary"  />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 20} className="form-check-input bg-secondary"  />
        </div>
        <div className="input-group">
        <input type="checkbox" onChange={markClock} checked={character.stash >= 21} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 22}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 23} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 24} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 25} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 26}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 27} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 28} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 29} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 30} className="form-check-input bg-secondary" />
        </div>
        <div className="input-group">
        <input type="checkbox" onChange={markClock} checked={character.stash >= 31}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 32} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 33} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 34}  className="form-check-input bg-secondary"/>
        <input type="checkbox" onChange={markClock} checked={character.stash >= 35} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 36} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 37} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 38} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 39} className="form-check-input bg-secondary" />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 40} className="form-check-input bg-secondary" />
        </div>
      </div>

    </>

  )
}