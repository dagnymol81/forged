export default function MarkXP({ statName, markClock, stat }) {
  return(
    <div id={statName}>
      <input type="checkbox" onChange={markClock} checked={stat >= 1} />
      <input type="checkbox" onChange={markClock} checked={stat >= 2} />
      <input type="checkbox" onChange={markClock} checked={stat >= 3} />
      <input type="checkbox" onChange={markClock} checked={stat >= 4} />
      <input type="checkbox" onChange={markClock} checked={stat >= 5} />
      <input type="checkbox" onChange={markClock} checked={stat >= 6} />
    </div>
  )
}