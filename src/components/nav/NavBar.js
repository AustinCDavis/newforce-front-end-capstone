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
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"       aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    Bootstrap
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

                <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                          <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                              <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                      </li>
                    </ul>
                    <form className="d-flex mt-3" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button className="btn btn-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
            </nav>
          </div>
      <Outlet />
    </>
  )
}