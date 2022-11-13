export default function ShowItems({ items }) {
  return(
    <>
    <h3 className="mt-3">All Items</h3>
    <table className="table table-dark table-sm">
      <thead className="bg-dark">
        <td>Item</td><td>Load</td>
      </thead>
    {items && items.map((item, i) => {
      if (item.name !== '') {
        return(
          <tr>
            <td>{item.name}</td>
            <td>{item.load}</td>
          </tr>
            
         
        )
      }
      })}
    </table>
    </>
  )
}