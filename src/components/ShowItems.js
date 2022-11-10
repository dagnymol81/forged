export default function ShowItems({ items }) {
  return(
    <>
    <ul>
    {items && items.map((item, i) => {
        return(
          <li key={i}>
            {item.name}: {item.load}
          </li>
        )
      })}
    </ul>
    </>
  )
}