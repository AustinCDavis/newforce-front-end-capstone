import "../Journal.css";
import { DashboardPageNavBar } from "../../nav/NavBar"
import { SideBar } from "../../nav/SideBar";
import { JournalExitList } from "./JournalExitList";
import React from 'react';



export const JournalExitPage = () => {

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
          <JournalExitList />
        </section>
        <footer className="box e">

        </footer>
      </main>
    </div>
  </>
  )
}