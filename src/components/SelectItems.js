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
    <input
      type="text"
      name="0"
      id="0"
      value={myItems[0].name}
      onChange={updateItems}
    />
    <input
      type="text"
      name="1"
      id="1"
      value={myItems[1].name}
      onChange={updateItems}
    />
    <input
      type="text"
      name="2"
      id="2"
      value={myItems[2].name}
      onChange={updateItems}
    />
    <input
      type="text"
      name="3"
      id="3"
      value={myItems[3].name}
      onChange={updateItems}
    />
    <input
      type="text"
      name="4"
      id="4"
      value={myItems[4].name}
      onChange={updateItems}
    />
    </>
  )
}