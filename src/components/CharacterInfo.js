export default function CharacterInfo({ updateCharacter, character }) {

  return(
      <>
        <label className="name" htmlFor="characterName">
          Character Name: 
        </label>

          <input
            type="text"
            name="characterName"
            id="characterName"
            className="name-input form-control"
            onChange={updateCharacter}
            value={character.characterName}
          />


        <label className="alias" htmlFor="alias">
          Alias 
        </label>

          <input
            type="text"
            name="alias"
            id="alias"
            className="alias-input form-control"
            onChange={updateCharacter}
            value={character.alias}
          />


        <label className="crew" htmlFor="crew">
          Crew 
        </label>
          <input
            type="text"
            name="crew"
            id="crew"
            className="crew-input form-control"
            onChange={updateCharacter}
            value={character.crew}
          />

        <label className="look" htmlFor="look">
          Look 
        </label>

          <input
            type="text"
            name="look"
            id="look"
            className="look-input form-control"
            onChange={updateCharacter}
            value={character.look}
          />

        <label className="heritage" htmlFor="heritage">
          Heritage 
        </label>
          <input
            type="text"
            name="heritage"
            id="heritage"
            className="heritage-input form-control"
            onChange={updateCharacter}
            value={character.heritage}
          />

        <label className="background" htmlFor="background">
          Background 
        </label>

          <input
            type="text"
            name="background"
            id="background"
            className="background-input form-control"
            onChange={updateCharacter}
            value={character.background}
          />




        <label className="vice" htmlFor="vice">
          Vice
        </label>

          <input
            type="text"
            name="vice"
            id="vice"
            className="vice-input form-control"
            onChange={updateCharacter}
            value={character.vice}
          />


        <label className="purveyor" htmlFor="purveyor">
          Purveyor
        </label>

          <input
            type="text"
            name="purveyor"
            id="purveyor"
            className="purveyor-input form-control"
            onChange={updateCharacter}
            value={character.purveyor}
          />

      </>
  )
}

