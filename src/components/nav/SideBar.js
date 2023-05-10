import { Link } from "react-router-dom"
import "./SideBar.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';

export const SideBar = () => {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-sm-auto bg-light position-fixed" id="sticky-sidebar">
                    <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                        <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                            <li>
                                <OverlayTrigger placement="right" overlay={
                                    <Tooltip id="tooltip-right">Home</Tooltip>}>
                                    <a href="http://localhost:3000/dashboard" className="nav-link py-1 px-3 " data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                        <i className="bi-house-fill fs-1 text-house"></i>
                                    </a>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger placement="right" overlay={
                                    <Tooltip id="tooltip-right">Analytics</Tooltip>}>

                                    <a href="#" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                                        <i className="bi-clipboard-data-fill fs-1 text-clipboard"></i>
                                    </a>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger placement="right" overlay={
                                    <Tooltip id="tooltip-right">Portfolio</Tooltip>}>

                                    <a href="#" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                                        <i className="bi-pie-chart-fill fs-1 text-chart"></i>
                                    </a>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger placement="right" overlay={
                                    <Tooltip id="tooltip-right">Share</Tooltip>}>

                                    <a href="#" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                                        <i className="bi-people-fill fs-1 text-people"></i>
                                    </a>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger placement="right" overlay={
                                    <Tooltip id="tooltip-right">Strategies</Tooltip>}>

                                    <a href="http://localhost:3000/strategies" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                        <i className="bi-journal-bookmark-fill fs-1 text-journal"></i>
                                    </a>
                                </OverlayTrigger>
                            </li>
                            <li>
                                <OverlayTrigger placement="right" overlay={
                                    <Tooltip id="tooltip-right">Settings</Tooltip>}>

                                    <a href="#" className="nav-link py-1 px-3" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                                        <i className="bi-gear-fill fs-1 text-gear"></i>
                                    </a>
                                </OverlayTrigger>
                            </li>
                        </ul>

                        <Dropdown>
                            <Dropdown.Toggle variant="">
                                <OverlayTrigger placement="right" overlay={
                                    <Tooltip id="tooltip-right">Quick Add</Tooltip>}>

                                    <a href="#" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="bi-plus-square h2 fs-1 text-profile"></i>
                                    </a>
                                </OverlayTrigger></Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">New Strategy</Dropdown.Item>
                                <Dropdown.Item href="/Profile">New Stock Entry</Dropdown.Item>
                                <Dropdown.Item href="/Profile">New Stock Exit</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-sm p-3 min-vh-100">
                </div>
            </div>
        </div>
    )
}