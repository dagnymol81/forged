export default function ShowInfo({ character }) {
  return(
  <>
    <h1>{character.characterName}</h1>
    <p className="show-info">
      <strong>Crew:</strong> {character.crew} &nbsp; 
      <strong>Alias:</strong> {character.alias}<br />
      <strong>Look:</strong> {character.look}<br />
      <strong>Heritage:</strong> {character.heritage}<br />
      <strong>Background:</strong> {character.background}<br />
      <strong>Vice:</strong> {character.vice}&nbsp;
      <strong>Purveyor:</strong> {character.purveyor}
    </p>

  </>
  )
}