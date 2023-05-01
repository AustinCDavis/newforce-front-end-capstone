import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
  return (
    <nav className="navbar">

      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Features</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Tutorials</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Log in</Link>
        </li>
      </ul>
    </nav>
  )
}