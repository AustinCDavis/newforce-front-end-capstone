import { Link} from "react-router-dom"
import "./SideBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const SideBar = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-sm-auto bg-light position-fixed" id="sticky-sidebar">
                <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                    <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                        <li>
                            <a href="http://localhost:3000/dashboard" className="nav-link py-1 px-3 " data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                <i className="bi-house-fill fs-1 text-house"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                <i className="bi-clipboard-data-fill fs-1 text-clipboard"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                                <i className="bi-pie-chart-fill fs-1 text-chart"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                                <i className="bi-people-fill fs-1 text-people"></i>
                            </a>
                        </li>
                                <li>
                                    <a href="http://localhost:3000/strategy" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                        <i className="bi-journal-bookmark-fill fs-1 text-journal"></i>
                                    </a>
                                </li>
                        <li>
                            <a href="#" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                <i className="bi-gear-fill fs-1 text-gear"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi-person-circle h2 fs-1 text-profile"></i>
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm p-3 min-vh-100">
            </div>
        </div>
    </div>
  )
}