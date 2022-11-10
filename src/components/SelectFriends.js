import { useEffect } from "react"
import { useState } from "react"

export default function SelectFriends({ character, setCharacter }) {

  const [friends, setFriends] = useState(character.friends)

  const updateFriend = (e) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id === e.target.name) {
        return {...friend, name: e.target.value}
      } else {
        return friend
      } 
    })
    setFriends(updatedFriends)
  }

  const selectCloseFriend = (e) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id === e.target.name) {
        return {...friend, closeFriend: true}
      } else {
        return friend
      }
    })
    setFriends(updatedFriends)
  }

  const selectRival = (e) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id === e.target.name) {
        return {...friend, rival: true}
      } else {
        return friend
      }
    })
    setFriends(updatedFriends)
  }

  useEffect(() => {
    setCharacter(existingValues => ({
      ...existingValues,
      friends: friends
    }))
  }, [friends, setCharacter])

  return(
    <>
        <input 
          type="text"
          name="1"
          id="1"
          onChange={updateFriend}
          value={friends[0].name}
        />
        <input
          type="checkbox"
          name="1"
          id="1"
          onChange={selectCloseFriend}
          value={character.friends[0].isCloseFriend}
        />
        <input
          type="checkbox"
          name="1"
          id="1"
          onChange={selectRival}
          value={character.friends[0].isRival}
        />


        <input 
          type="text"
          name="2"
          id="2"
          onChange={updateFriend}
          value={friends[1].name}
        />
        <input
          type="checkbox"
          name="2"
          id="2"
          onChange={selectCloseFriend}
          value={character.friends[1].isCloseFriend}
        />
        <input
          type="checkbox"
          name="2"
          id="2"
          onChange={selectRival}
          value={character.friends[1].isRival}
        />


        <input 
          type="text"
          name="3"
          id="3"
          onChange={updateFriend}
          value={friends[2].name}
        />
        <input
          type="checkbox"
          name="3"
          id="3"
          onChange={selectCloseFriend}
          value={character.friends[2].isCloseFriend}
        />
        <input
          type="checkbox"
          name="3"
          id="3"
          onChange={selectRival}
          value={character.friends[2].isRival}
        />

        <input 
          type="text"
          name="4"
          id="4"
          onChange={updateFriend}
          value={friends[3].name}
        />
        <input
          type="checkbox"
          name="4"
          id="4"
          onChange={selectCloseFriend}
          value={character.friends[3].isCloseFriend}
        />
        <input
          type="checkbox"
          name="4"
          id="4"
          onChange={selectRival}
          value={character.friends[3].isRival}
        />

        <input 
          type="text"
          name="5"
          id="5"
          onChange={updateFriend}
          value={friends[4].name}
        />
        <input
          type="checkbox"
          name="5"
          id="5"
          onChange={selectCloseFriend}
          value={character.friends[4].isCloseFriend}
        />
        <input
          type="checkbox"
          name="5"
          id="5"
          onChange={selectRival}
          value={character.friends[4].isRival}
        />
    </>
  )
}