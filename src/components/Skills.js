import MarkXP from "./MarkXP";

export default function Skills({ character, markClock }) {

  return(
    <>
      <div id="insight">

        <MarkXP stat={character.insightXP} markClock={markClock} statName="insightXP" />

        <div id="skill1">
        Hunt: 
          <input type="checkbox" onChange={markClock} checked={character.skill1 >= 1} />
          <input type="checkbox" onChange={markClock} checked={character.skill1 >= 2} />
          <input type="checkbox" onChange={markClock} checked={character.skill1 >= 3} />
          <input type="checkbox" onChange={markClock} checked={character.skill1 >= 4} />
        </div>

        <div id="skill2">
        Study:
          <input type="checkbox" onChange={markClock} checked={character.skill2 >= 1} />
          <input type="checkbox" onChange={markClock} checked={character.skill2 >= 2} />
          <input type="checkbox" onChange={markClock} checked={character.skill2 >= 3} />
          <input type="checkbox" onChange={markClock} checked={character.skill2 >= 4} />
        </div>



        <div id="skill3">
        Survey:
          <input type="checkbox" onChange={markClock} checked={character.skill3 >= 1} />
          <input type="checkbox" onChange={markClock} checked={character.skill3 >= 2} />
          <input type="checkbox" onChange={markClock} checked={character.skill3 >= 3} />
          <input type="checkbox" onChange={markClock} checked={character.skill3 >= 4} />
        </div>


        <div id="skill4">
        Tinker:
          <input type="checkbox" onChange={markClock} checked={character.skill4 >= 1} />
          <input type="checkbox" onChange={markClock} checked={character.skill4 >= 2} />
          <input type="checkbox" onChange={markClock} checked={character.skill4 >= 3} />
          <input type="checkbox" onChange={markClock} checked={character.skill4 >= 4} />
        </div>
      </div>

      <div id="prowess">

      <MarkXP stat={character.prowessXP} markClock={markClock} statName="prowessXP" />

        <div id="skill5">
        Finesse:
          <input type="checkbox" onChange={markClock} checked={character.skill5 >= 1} />
          <input type="checkbox" onChange={markClock} checked={character.skill5 >= 2} />
          <input type="checkbox" onChange={markClock} checked={character.skill5 >= 3} />
          <input type="checkbox" onChange={markClock} checked={character.skill5 >= 4} />
        </div>

        <div id="skill6">
          Prowl:
          <input type="checkbox" onChange={markClock} checked={character.skill6 >= 1} />
          <input type="checkbox" onChange={markClock} checked={character.skill6 >= 2} />
          <input type="checkbox" onChange={markClock} checked={character.skill6 >= 3} />
          <input type="checkbox" onChange={markClock} checked={character.skill6 >= 4} />
        </div>

        <div id="skill7">
          Skirmish:
          <input type="checkbox" onChange={markClock} checked={character.skill7 >= 1} />
          <input type="checkbox" onChange={markClock} checked={character.skill7 >= 2} />
          <input type="checkbox" onChange={markClock} checked={character.skill7 >= 3} />
          <input type="checkbox" onChange={markClock} checked={character.skill7 >= 4} />
        </div>

        <div id="skill8">
          Wreck:
          <input type="checkbox" onChange={markClock} checked={character.skill8 >= 1} />
          <input type="checkbox" onChange={markClock} checked={character.skill8 >= 2} />
          <input type="checkbox" onChange={markClock} checked={character.skill8 >= 3} />
          <input type="checkbox" onChange={markClock} checked={character.skill8 >= 4} />
        </div>


      </div>

      <div id="resolve">

      <MarkXP stat={character.resolveXP} markClock={markClock} statName="resolveXP" />

      <div id="skill9">
        Attune:
        <input type="checkbox" onChange={markClock} checked={character.skill9 >= 1} />
        <input type="checkbox" onChange={markClock} checked={character.skill9 >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.skill9 >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.skill9 >= 4} />
      </div>

      <div id="skill10">
        Command:
        <input type="checkbox" onChange={markClock} checked={character.skill10 >= 1} />
        <input type="checkbox" onChange={markClock} checked={character.skill10 >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.skill10 >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.skill10 >= 4} />
      </div>


      <div id="skill11">
        Consort:
        <input type="checkbox" onChange={markClock} checked={character.skill11 >= 1} />
        <input type="checkbox" onChange={markClock} checked={character.skill11 >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.skill11 >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.skill11 >= 4} />
      </div>

      <div id="skill12">
        Sway:
        <input type="checkbox" onChange={markClock} checked={character.skill12 >= 1} />
        <input type="checkbox" onChange={markClock} checked={character.skill12 >= 2} />
        <input type="checkbox" onChange={markClock} checked={character.skill12 >= 3} />
        <input type="checkbox" onChange={markClock} checked={character.skill12 >= 4} />
      </div>
    </div>
  </>
  )
}