export default function CharacterInfo({ updateCharacter, character }) {

  return(
      <>
        <label className="name" htmlFor="characterName">
          Character Name 
        </label>

          <input
            type="text"
            name="characterName"
            id="characterName"
            className="name-input form-control bg-secondary text-light"
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
            className="alias-input form-control bg-secondary text-light"
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
            className="crew-input form-control bg-secondary text-light"
            onChange={updateCharacter}
            value={character.crew}
          />

        <label className="look" htmlFor="look">
          Look 
        </label>

          <div className="look-input">
          <input
            type="text"
            name="look"
            id="look"
            className="look-input form-control bg-secondary text-light"
            onChange={updateCharacter}
            value={character.look}
          />
          <em>Gender, appearance, typical attire</em>
          </div>

        <label className="heritage" htmlFor="heritage">
          Heritage 
        </label>
        <div className="heritage-input">
          <input
            type="text"
            name="heritage"
            id="heritage"
            className="form-control bg-secondary text-light"
            onChange={updateCharacter}
            value={character.heritage}
          />
          <em>Describe where their family line is from.</em>
          </div>

        <label className="background" htmlFor="background">
          Background 
        </label>

            <div className="background-input">
            <input
              type="text"
              name="background"
              id="background"
              className="form-control bg-secondary text-light"
              onChange={updateCharacter}
              value={character.background}
            />
            <em>Academic - Labor - Law - Trade - Military - Noble - Underworld</em>
          </div>
          
        <label className="vice" htmlFor="vice">
          Vice
        </label>

          <div className="vice-input">
            <input
              type="text"
              name="vice"
              id="vice"
              className="form-control bg-secondary text-light"
              onChange={updateCharacter}
              value={character.vice}
            />
            <em>Faith - Gambling - Luxury - Obligation - Pleasure - Stupor - Weird</em>
          </div>


        <label className="purveyor" htmlFor="purveyor">
          Purveyor
        </label>

          <input
            type="text"
            name="purveyor"
            id="purveyor"
            className="purveyor-input form-control bg-secondary text-light"
            onChange={updateCharacter}
            value={character.purveyor}
          />

      </>
  )
}

