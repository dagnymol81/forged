export default function XPTriggers({ character, updateCharacter }) {
  return(
    <>
      <h3>Experience</h3>
      <p>
        Every time you roll a desperate action, mark xp in that action's attribute.
      </p>
      <p>
        At the end of each session, for each item below, mark 1xp (in your playbook or an attribute) or 2xp if that item occured multiple times.
      </p>
      <ul>
        <li>You expressed your beliefs, drives, heritage, or background</li>
        <li>You struggled wioth issues from your vice or traumas during the session</li>
        <li>You addressed a challenge with:</li>
      </ul>

      <div className="input-group">
      <input 
          type="text"
          name="trigger1"
          className="form-control bg-secondary text-light"
          onChange={updateCharacter}
          value={character.trigger1}
        />
        <span className="input-group-text bg-dark text-light">or</span>
        <input 
          type="text"
          name="trigger2"
          className="form-control bg-secondary text-light"
          onChange={updateCharacter}
          value={character.trigger2}
        />
      </div>
      <p>
      <em>Examples: <strong>violence</strong> or <strong>intimidation</strong>, <strong>technical skill</strong> or <strong>mayhem</strong>,  <strong>stealth</strong> or <strong>evasion</strong>, <strong>deception</strong> or <strong>influence</strong>, <strong>knowledge</strong> or <strong>arcane power</strong>.</em>
      </p>      
    </>
  )
}