export default function MarkXP({ statName, markClock, stat }) {
  return(
    <div id={statName} className="input-group bg-dark p-2">
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 1} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 2} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 3} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 4} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 5} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 6} />
    </div>
  )
}