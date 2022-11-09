export default function CharacterInfo({ updateCharacter, character }) {

  return(
<>
        <label>
          Character Name: 
          <input
            type="text"
            name="characterName"
            id="characterName"
            onChange={updateCharacter}
            value={character.characterName}
          />
        </label>

        <label>
          Crew 
          <input
            type="text"
            name="crew"
            id="crew"
            onChange={updateCharacter}
            value={character.crew}
          />
        </label>

        <label>
          Alias 
          <input
            type="text"
            name="alias"
            id="alias"
            onChange={updateCharacter}
            value={character.alias}
          />
        </label>

        <label>
          Look 
          <input
            type="text"
            name="look"
            id="look"
            onChange={updateCharacter}
            value={character.look}
          />
        </label>

        <label>
          Heritage 
          <input
            type="text"
            name="heritage"
            id="heritage"
            onChange={updateCharacter}
            value={character.heritage}
          />
        </label>

        <label>
          Background 
          <input
            type="text"
            name="background"
            id="background"
            onChange={updateCharacter}
            value={character.background}
          />
        </label>


        <label>
          Vice
          <input
            type="text"
            name="vice"
            id="vice"
            onChange={updateCharacter}
            value={character.vice}
          />
        </label>

        <label>
          Purveyor
          <input
            type="text"
            name="purveyor"
            id="purveyor"
            onChange={updateCharacter}
            value={character.purveyor}
          />
        </label>

        </>
  )
}

