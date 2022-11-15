import { useEffect } from "react"
import { useState } from "react"
import up from './images/up.svg'
import down from './images/down.svg'
import downFill from './images/downFill.svg'
import upFill from './images/upFill.svg'

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
        if (friend.closeFriend) {
          return {...friend, closeFriend: false}
        } else {
          return {...friend, closeFriend: true}
        }
      } else {
        return friend
      }
    })
    setFriends(updatedFriends)

    if (e.target.src.includes('upFill')) {
      e.target.setAttribute('src', up)
    } else {
      e.target.setAttribute('src', upFill)
    }
  }

  const selectRival = (e) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id === e.target.name) {
        if (friend.rival) {
          return {...friend, rival: false}
        } else {
          return {...friend, rival: true}
        }
      } else {
        return friend
      }
    })
    setFriends(updatedFriends)

    if (e.target.src.includes('downFill')) {
      e.target.setAttribute('src', down)
    } else {
      e.target.setAttribute('src', downFill)
    }

  }

  useEffect(() => {
    setCharacter(existingValues => ({
      ...existingValues,
      friends: friends
    }))
  }, [friends, setCharacter])

  return(
    <>
    <h3>Friends</h3>
    <p>
    List the names of five friends or rivals, along with a brief description.
    </p><p>
     Some possibilities include: A spy, a bounty hunter, a pugilist, a cold killer, an extortionist, a physicker, an assassin, a sentinel, an apothecary, a priestess, a noble, a city clerk, an officer, an inspector, a beggar, a locksmith, a gang leader, a drug dealer, a tavern owner, a prostitute, a jail-bird, an information broker, a servant, an archivist, or a supernatural entity.
    </p><p>
      Select the <img src={up} alt="up arrow" /> next to one to indicate a close friend such as a mentor, family member or romantic interest.
    </p>
    <p>
      Select the <img src={down} alt="down arrow" /> next to one to indicate a rival.
    </p>
        <div className="input-group-text input-group-sm bg-dark text-light w-100">
          <input 
            type="text"
            name="1"
            id="1"
            className="form-control bg-secondary text-light"
            onChange={updateFriend}
            value={friends[0].name}
          />

          <img 
            src={up} 
            alt="Select Close Friend" 
            name="1"
            id="1"
            onClick={selectCloseFriend}
          />
          <img 
            src={down} 
            alt="Select Rival"
            name="1"
            id="1"
            onClick={selectRival}
          />

        </div>


        <div className="input-group-text input-group-sm bg-dark text-light w-100">
        <input 
          type="text"
          name="2"
          id="2"
          className="form-control bg-secondary text-light"
          onChange={updateFriend}
          value={friends[1].name}
        />
          <img 
            src={up} 
            alt="Select Close Friend" 
            name="2"
            id="2"
            onClick={selectCloseFriend}
          />
          <img 
            src={down} 
            alt="Select Rival"
            name="2"
            id="2"
            onClick={selectRival}
          />
        </div>

        <div className ="input-group-text input-group-sm bg-dark text-light w-100">
        <input 
          type="text"
          name="3"
          id="3"
          className="form-control bg-secondary text-light"
          onChange={updateFriend}
          value={friends[2].name}
        />
          <img 
            src={up} 
            alt="Select Close Friend" 
            name="3"
            id="3"
            onClick={selectCloseFriend}
          />
          <img 
            src={down} 
            alt="Select Rival"
            name="3"
            id="3"
            onClick={selectRival}
          />
        </div>

        <div className="input-group-text input-group-sm bg-dark text-light w-100">
        <input 
          type="text"
          name="4"
          id="4"
          className="form-control bg-secondary text-light"
          onChange={updateFriend}
          value={friends[3].name}
        />
          <img 
            src={up} 
            alt="Select Close Friend" 
            name="4"
            id="4"
            onClick={selectCloseFriend}
          />
          <img 
            src={down} 
            alt="Select Rival"
            name="4"
            id="4"
            onClick={selectRival}
          />
        </div>

        <div className="input-group-text input-group-sm bg-dark text-light w-100">
        <input 
          type="text"
          name="5"
          id="5"
          className="form-control bg-secondary text-light"
          onChange={updateFriend}
          value={friends[4].name}
        />
          <img 
            src={up} 
            alt="Select Close Friend" 
            name="5"
            id="5"
            onClick={selectCloseFriend}
          />
          <img 
            src={down} 
            alt="Select Rival"
            name="5"
            id="5"
            onClick={selectRival}
          />
      </div>
    </>
  )
}