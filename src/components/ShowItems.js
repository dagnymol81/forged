export default function ShowItems({ items }) {
  return(
    <>
    <ul>
    {items && items.map((item, i) => {
      if (item.name !== '') {
        return(
          <li key={i}>
            {item.name}
          </li>
        )
      }
      })}
    </ul>
    </>
  )
}