export default function ShowInfo({ character }) {
  return(
  <div>
    Character Name: {character.characterName}<br />
    Crew: {character.crew}<br />
    Alias: {character.alias}<br />
    Look: {character.look}<br />
    Heritage: {character.heritage}<br />
    Background: {character.background}<br />
    Vice: {character.vice}<br />
    Purveyor: {character.purveyor}
  </div>
  )
}