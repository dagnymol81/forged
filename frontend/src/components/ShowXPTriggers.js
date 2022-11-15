export default function ShowXPTriggers({ character }) {
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
        <li>You addressed a challenge with: {character.trigger1} or {character.trigger2} </li>
      </ul>
  
    </>
  )
}