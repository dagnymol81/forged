import { Link } from "react-router-dom";
import logo from './fitd.png'

function Navbar({ user, setUser }) {

    const logout = () => {
        setUser({})
        localStorage.removeItem("token")
    }

    if (user) {
        return (
          
          <nav className="nav bg-secondary text-light">
          
            <ul className="nav w-100 px-3 flex-row justify-content-between align-items-center">
          
                <li className="nav-item">
                    <Link to="/">
                    <img src={logo} alt="Forged in the Dark" width="152px" height="72px"  />
                    </Link>
                </li>
                <li className="nav-item">
                    Welcome {user}!
                </li>
                <li className="nav-item">
                    <Link to="/create">New Character</Link>
                </li>
                <li className="nav-item">
                    <Link to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to="/crew">My Characters</Link>
                </li>
                <li onClick={logout} className="nav-item">
                    <Link>Logout</Link>
                </li>
            </ul>

        </nav>
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