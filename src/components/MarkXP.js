export default function MarkXP({ statName, markClock, stat }) {
  return(
    <div id={statName} className="input-group bg-light p-2">
      <input type="checkbox" onChange={markClock} className="form-check-input" checked={stat >= 1} />
      <input type="checkbox" onChange={markClock} className="form-check-input" checked={stat >= 2} />
      <input type="checkbox" onChange={markClock} className="form-check-input" checked={stat >= 3} />
      <input type="checkbox" onChange={markClock} className="form-check-input" checked={stat >= 4} />
      <input type="checkbox" onChange={markClock} className="form-check-input" checked={stat >= 5} />
      <input type="checkbox" onChange={markClock} className="form-check-input" checked={stat >= 6} />
    </div>
  )
}