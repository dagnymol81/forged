import MarkXP from "./MarkXP";

export default function Skills({ character, markClock }) {

  return(
    <>
        <h3>Insight</h3>
               
        <MarkXP stat={character.insightXP} markClock={markClock} statName="insightXP" />

        <div className="skills-box">
        <div>
        Hunt: 
        </div>

          <div id="skill1" className="input-group p-1">
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill1 >= 1} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill1 >= 2} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill1 >= 3} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill1 >= 4} />
        </div>

      <div>
      Study:
      </div>


        <div id="skill2"  className="input-group p-1">
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill2 >= 1} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill2 >= 2} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill2 >= 3} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill2 >= 4} />
        </div>


      <div>
      Survey:
      </div>


      <div id="skill3" className="input-group p-1">  
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill3 >= 1} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill3 >= 2} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill3 >= 3} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill3 >= 4} />
        </div>

        <div>
        Tinker:
        </div>


        <div id="skill4" className="input-group p-1">
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill4 >= 1} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill4 >= 2} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill4 >= 3} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill4 >= 4} />
        </div>
      </div>

      <div id="prowess">

      <h3>Prowess</h3>

      <MarkXP stat={character.prowessXP} markClock={markClock} statName="prowessXP" />

      <div className="skills-box">

      <div>Finesse:</div>

        <div id="skill5" className="input-group p-1">
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill5 >= 1} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill5 >= 2} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill5 >= 3} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill5 >= 4} />
        </div>

        <div>
        Prowl:
        </div>

        <div id="skill6" className="input-group p-1">

          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill6 >= 1} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill6 >= 2} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill6 >= 3} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill6 >= 4} />
        </div>

        <div>
        Skirmish:
        </div>

        <div id="skill7" className="input-group p-1">
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill7 >= 1} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill7 >= 2} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill7 >= 3} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill7 >= 4} />
        </div>

        <div>
        Wreck:
        </div>

        <div id="skill8" className="input-group p-1">
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill8 >= 1} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill8 >= 2} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill8 >= 3} />
          <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill8 >= 4} />
        </div>

      </div>

      </div>

      <div id="resolve" className="input-group p-1">

      <h3>Resolve</h3>

      <MarkXP stat={character.resolveXP} markClock={markClock} statName="resolveXP" />

      <div className="skills-box">

      <div>Attune:</div>

      <div id="skill9" className="input-group p-1">

        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill9 >= 1} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill9 >= 2} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill9 >= 3} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill9 >= 4} />
      </div>

      <div>Command:</div>

      <div id="skill10" className="input-group p-1">
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill10 >= 1} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill10 >= 2} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill10 >= 3} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill10 >= 4} />
      </div>

      <div>Consort:</div>

      <div id="skill11" className="input-group p-1">
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill11 >= 1} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill11 >= 2} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill11 >= 3} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill11 >= 4} />
      </div>

      <div>Sway:</div>

      <div id="skill12" className="input-group p-1">
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill12 >= 1} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill12 >= 2} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill12 >= 3} />
        <input type="checkbox" onChange={markClock} className="form-check-input bg-secondary" checked={character.skill12 >= 4} />
      </div>

      </div>

        <MarkXP stat={character.playbook} markClock={markClock} statName="playbook" />
      

    </div>
  </>
  )
}