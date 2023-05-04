import { Link} from "react-router-dom"
import "./SideBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const SideBar = () => {
  return (
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-auto bg-light position-fixed" id="sticky-sidebar">
                <div class="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                    <ul class="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                        <li>
                            <a href="http://localhost:3000/dashboard" class="nav-link py-1 px-3 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                <i class="bi-house-fill fs-1 text-house"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link py-1 px-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                <i class="bi-clipboard-data-fill fs-1 text-clipboard"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link py-1 px-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                                <i class="bi-pie-chart-fill fs-1 text-chart"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link py-1 px-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                                <i class="bi-people-fill fs-1 text-people"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link py-1 px-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                <i class="bi-journal-bookmark-fill fs-1 text-journal"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="nav-link py-1 px-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                <i class="bi-gear-fill fs-1 text-gear"></i>
                            </a>
                        </li>
                    </ul>
                    <div class="dropdown">
                        <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi-person-circle h2 text-profile"></i>
                        </a>
                        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm p-3 min-vh-100">
            </div>
        </div>
    </div>
  )
}