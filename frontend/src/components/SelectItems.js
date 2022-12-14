import { useEffect } from 'react'
import { useState } from 'react'

export default function SelectItems({ character, setCharacter }) {

const [myItems, setMyItems] = useState(character.items)

const updateItems = (e) => {
  const index = Number(e.target.name)
  const newItems = myItems.map((item, i) => {
    if (i === index) {
      return {...item, name: e.target.value}
    } else {
      return item
    }
  })
  setMyItems(newItems)
}

useEffect(() => {
  setCharacter(existingValues => ({
    ...existingValues,
    items: myItems
  }))
}, [myItems, setCharacter])

  return(
    <>
    <h3>Items</h3>
    <p>Add a list of five distinctive items that are either Fine (+1 quality), light (reduced load), rare, or otherwise specific to this character.</p>
    <p>Some examples include: Weapons, clothes, arcane implements, specialized tools, custom gear, capable pets, or supernatural objects.</p>
    
    <div className="bg-dark text-light item-header p-2 my-3">
      <div>
        <strong>Item</strong>
      </div>
      <div>
        <strong>Load</strong>
      </div>
    </div>

    <div className="input-group">
      <input
        type="text"
        name="0"
        id="0"
        className="form-control bg-secondary text-light w-75"
        value={myItems[0].name}
        onChange={updateItems}
      />
      <input
        type="number"
        name="0"
        id="0"
        className="form-control bg-secondary text-light w-25"
        value={myItems[0].load}
        onChange={updateItems}
      />
    </div>

    <div className="input-group">
    <input
      type="text"
      name="1"
      id="1"
      className="form-control bg-secondary text-light w-75"
      value={myItems[1].name}
      onChange={updateItems}
    />
    <input
        type="number"
        name="1"
        id="1"
        className="form-control bg-secondary text-light w-25"
        value={myItems[1].load}
        onChange={updateItems}
      />
    </div>

    <div className="input-group">
    <input
      type="text"
      name="2"
      id="2"
      className="form-control bg-secondary text-light w-75"
      value={myItems[2].name}
      onChange={updateItems}
    />
    <input
        type="number"
        name="2"
        id="2"
        className="form-control bg-secondary text-light w-25"
        value={myItems[2].load}
        onChange={updateItems}
      />
    </div>

    <div className="input-group">
    <input
      type="text"
      name="3"
      id="3"
      className="form-control bg-secondary text-light w-75"
      value={myItems[3].name}
      onChange={updateItems}
    />
    <input
        type="number"
        name="3"
        id="3"
        className="form-control bg-secondary text-light w-25"
        value={myItems[3].load}
        onChange={updateItems}
      />
    </div>

    <div className="input-group">
    <input
      type="text"
      name="4"
      id="4"
      className="form-control bg-secondary text-light w-75"
      value={myItems[4].name}
      onChange={updateItems}
    />
    <input
        type="number"
        name="4"
        id="4"
        className="form-control bg-secondary text-light w-25"
        value={myItems[4].load}
        onChange={updateItems}
      />
    </div>
    </>
  )
}