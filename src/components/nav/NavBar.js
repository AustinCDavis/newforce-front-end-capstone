import { Link, Outlet } from "react-router-dom"
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";

export const DashboardPageNavBar = () => {

  const navigate = useNavigate()

  return (
    <>
          <div className="p-3 m-0 border-0 bd-example">
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <a className="navbar-brand justify-content-start">
                    <i>NextTrade</i>
                </a>

                <Dropdown>
                  <Dropdown.Toggle variant="dark">
                  <img src="https://img.icons8.com/ios-filled/50/FFFFFF/user-male-circle.png" alt="Logo" width="50" height="50" className="d-inline-block align-text-top"/>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
                    {localStorage.getItem("authorized_user") 
                      ? 
                      <Dropdown.Item href="/Profile" className="navbar__link" to="" onClick={() => {
                        localStorage.removeItem("authorized_user") 
                        navigate("/", {replace: true})
                        }}>Logout</Dropdown.Item>:""}
                  </Dropdown.Menu>
                </Dropdown>
            </nav>
          </div>
      <Outlet />
    </>
  )
}