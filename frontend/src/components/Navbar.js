import { Link } from "react-router-dom";
import logo from './fitd.png'

function Navbar({ user, setUser }) {

    const logout = () => {
        setUser({})
        localStorage.removeItem("token")
    }

    if (user) {
        return (
          
          <nav className="nav bg-secondary border-bottom p-3">
          
            <ul className="nav w-100 px-3 flex-row justify-content-between align-items-center">
          
                <li className="nav-item">

                    <img src={logo} alt="Forged in the Dark" width="114px" height="54px"  />

                </li>
                <li className="nav-item">
                    Welcome {user}!
                </li>
                <li className="nav-item">
                    <Link to="/create">New Character</Link>
                </li>
                  <li className="nav-item">
                  <Link to="/crew">Profile</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li onClick={logout} className="nav-item">
                    <Link>Logout</Link>
                </li>
            </ul>

        </nav>
        )
    } else {
        return (
          <nav className="nav bg-secondary border-bottom p-3">
              <ul className="nav w-100 px-3 flex-row justify-content-between align-items-center">
                <li  className="nav-item">
                  <Link to="/"><img src={logo} alt="Forged in the Dark" width="114px" height="54px"  /></Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li  className="nav-item">
                    <Link to="/register">Register</Link>
                </li>
                <li  className="nav-item">
                  <Link to="/about">About</Link>
                </li>
            </ul>
          </nav>

        )
    }
}

export default Navbar;