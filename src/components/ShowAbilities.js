export default function ShowAbilities({ abilities }) {

  return(
    <>
      {abilities && abilities.map((ability, i) => {
        return(
          <div key={i}>
            {ability}
          </div>
        )
      })}
    </>
  )
}