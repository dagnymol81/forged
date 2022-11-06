export default function CharacterInfo({ character, updateCharacter, stress }) {

  return(
<>
        <label>
          Character Name: 
          <input
            type="text"
            name="characterName"
            id="characterName"
            value={character.characterName}
            onChange={updateCharacter}
          />
        </label>

        <label>
          Crew 
          <input
            type="text"
            name="crew"
            id="crew"
            onChange={updateCharacter}
          />
        </label>

        <label>
          Alias 
          <input
            type="text"
            name="alias"
            id="alias"
            value={character.alias}
            onChange={updateCharacter}
          />
        </label>

        <label>
          Look 
          <input
            type="text"
            name="look"
            id="look"
            onChange={updateCharacter}
          />
        </label>

        <label>
          Heritage 
          <input
            type="text"
            name="heritage"
            id="heritage"
            onChange={updateCharacter}
          />
        </label>

        <label>
          Background 
          <input
            type="text"
            name="background"
            id="background"
            onChange={updateCharacter}
          />
        </label>


        <label>
          Vice
          <input
            type="text"
            name="vice"
            id="vice"
            onChange={updateCharacter}
          />
        </label>

        <label>
          Purveyor
          <input
            type="text"
            name="purveyor"
            id="purveyor"
            onChange={updateCharacter}
          />
        </label>

        <div>
          I'm going to say some stuff
        </div>


        </>
  )
}

