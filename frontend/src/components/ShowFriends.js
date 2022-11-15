import up from './images/up.svg'
import down from './images/down.svg'
import downFill from './images/downFill.svg'
import upFill from './images/upFill.svg'

export default function ShowFriends({friends}) {

  return(
    <>
    <h3>Friends</h3>
    <ul className="friendlist">
    {friends && friends.map((friend) => {
      return(
        <li key={friend.name}>
          <img src={up} alt="Up Arrow" />
          <img src={down} alt="Down Arrow" />
          {friend.name}
        </li>
      )
    })
    }
    </ul>

    </>
  )
}