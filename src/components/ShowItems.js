export default function ShowItems({ items }) {
  return(
    <>
    <h3 className="mt-3">All Items</h3>
    <table className="table text-light table-sm">
      <thead className="bg-dark">
        <tr>
          <th>Item</th><th>Load</th>
        </tr>
      </thead>
      <tbody>
    {items && items.map((item, i) => {
      if (item.name !== '') {
        return(
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.load}</td>
          </tr>        
        )
      }
      })}
      </tbody>
    </table>
    </>
  )
}