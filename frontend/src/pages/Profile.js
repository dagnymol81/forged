function Profile({ user, email }) {
    return ( 
        <div>
            <h1>Profile</h1>
            <p>username: {user}</p>
            <p>email: {email}</p>
        </div>
        
     );
}

export default Profile;