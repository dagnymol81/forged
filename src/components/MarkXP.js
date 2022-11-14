export default function MarkXP({ statName, markClock, stat }) {
  return(
    <div id={statName} className="input-group bg-dark p-2 my-2">
      {statName === 'playbook' && <span className="me-3">Playbook: </span> }
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 1} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 2} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 3} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 4} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 5} />
      <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 6} />
      {statName === 'playbook' && <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 7} />}
      {statName === 'playbook' && <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={stat >= 8} />}
    </div>
  )
}