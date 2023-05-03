import { Link, Outlet } from "react-router-dom"
import "./NavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const DashboardPageNavBar = () => {
  return (
    <>
          <div class="p-3 m-0 border-0 bd-example">
            <nav class="navbar navbar-dark bg-dark fixed-top">
                <a class="navbar-brand justify-content-start">
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"       aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    Bootstrap
                </a>
                <div class="dropdown dropstart">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://img.icons8.com/ios-filled/50/FFFFFF/user-male-circle.png" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"/>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                      <Link to="/dashboard/Profile">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                      </Link>
                    {
                      localStorage.getItem("authorized_user")
                        ? 
                        <Link className="navbar__link" to="" onClick={() => {
                          localStorage.removeItem("authorized_user")}}>
                            <li className="navbar__item navbar__logout">
                              <a class="dropdown-item" href="#">Logout</a>
                            </li>
                        </Link>: ""
                    }
                  </ul>
                </div>

                <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                        </a>
                          <ul class="dropdown-menu dropdown-menu-dark">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                              <hr class="dropdown-divider"/>
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                      </li>
                    </ul>
                    <form class="d-flex mt-3" role="search">
                      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                      <button class="btn btn-success" type="submit">Search</button>
                    </form>
                  </div>
                </div>
            </nav>
          </div>
      <Outlet />
    </>
  )
}