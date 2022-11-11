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
        <input type="checkbox" onChange={markClock} checked={character.coin >= 1} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 4} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 5} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 6} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 7} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 8} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 9} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 10} />
        <br />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 11} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 12} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 13} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 14} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 15} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 16} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 17} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 18} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 19} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 20} />
        <br />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 21} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 22} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 23} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 24} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 25} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 26} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 27} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 28} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 29} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 30} />
        <br />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 31} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 32} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 33} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 34} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 35} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 36} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 37} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 38} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 39} />
        <input type="checkbox" onChange={markClock} checked={character.coin >= 40} />
      </div>

    </>

  )
}