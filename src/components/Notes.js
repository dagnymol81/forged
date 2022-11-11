export default function Notes({ character, updateCharacter }) {
  return(
  <>
    <h3>Notes</h3>
    <textarea 
      name="notes" 
      onChange={updateCharacter} 
      value={character.notes}  
    />
  </>
  )
}
