export default function ShowAbilities({ character }) {
  const abilities = character.abilities
  return(
    <>
      {abilities && abilities.map((ability, i) => {
        return(
          <div key={i}>
            <p><strong>{ability.name}</strong> {ability.shortDesc}</p>
            <p>{ability.detail}</p>           
          </div>
        )
      })}
    </>
  )
}