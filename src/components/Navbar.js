import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {

    const logout = () => {
        setUser({})
        localStorage.removeItem("token")
    }

    if (user) {
        return (
            <ul>
                <li>
                    <Link to="/">
                        <img src="./favicon.ico" alt="React Icon" id="icon"/>
                    </Link>
                </li>
                <li style={{ color: 'black' }}>
                    Welcome {user}!
                </li>
                <li>
                    <Link to="/todos">Todos</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li onClick={logout}>
                    <Link>Logout</Link>
                </li>
            </ul>
        )
    } else {
        return (
            <ul>
                <li>
                    <Link to="/">
                        <img src="./favicon.ico" alt="React Icon" id="icon"/>
                    </Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        )
    }
}

export default Navbar;