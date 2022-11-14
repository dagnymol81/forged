export default function ShowFriends({friends}) {
  return(
    <>
    <h3>Friends</h3>
    <ul>
    {friends && friends.map((friend) => {
      return(
        <li>{friend.name}</li>
      )
    })
    }
    </ul>

    </>
  )
}