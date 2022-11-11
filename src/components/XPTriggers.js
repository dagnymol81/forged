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

      <div class="input-group">
      <input 
          type="text"
          name="trigger1"
          className="form-control"
          onChange={updateCharacter}
          value={character.trigger1}
        />
        <span className="input-group-text">or</span>
        <input 
          type="text"
          name="trigger2"
          className="form-control"
          onChange={updateCharacter}
          value={character.trigger1}
        />
      </div>

      
    </>
  )
}