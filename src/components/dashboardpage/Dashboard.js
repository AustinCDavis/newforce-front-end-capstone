import { Link, Outlet } from "react-router-dom"
import { DashboardPageNavBar } from "../nav/NavBar"
import { SideBar } from "../nav/SideBar"
import "./Dashboard.css"

export const Dashboard = () => {

    return (<>
        <div className="grid">
            <nav className="box a">
                <DashboardPageNavBar />
            </nav>
            <aside className="box b">
                <SideBar />
            </aside>
            <main className="box c">
                <section className="box d">
                <h1>Hello Dashboard</h1>
                </section>
                <footer>
                </footer>
            </main>
        </div>
    </>
    )
}