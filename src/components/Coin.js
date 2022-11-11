export default function Coin({character, markClock}) {
  return(
    <>
      <div id="coin">
        Coin:
        <input type="checkbox" onChange={markClock} checked={character.coin >= 1} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 4} />
      </div>
      <div id="stash">
        <input type="checkbox" onChange={markClock} checked={character.stash >= 1} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 4} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 5} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 6} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 7} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 8} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 9} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 10} />
        <br />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 11} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 12} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 13} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 14} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 15} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 16} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 17} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 18} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 19} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 20} />
        <br />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 21} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 22} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 23} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 24} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 25} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 26} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 27} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 28} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 29} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 30} />
        <br />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 31} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 32} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 33} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 34} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 35} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 36} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 37} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 38} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 39} />
        <input type="checkbox" onChange={markClock} checked={character.stash >= 40} />
      </div>

    </>

  )
}