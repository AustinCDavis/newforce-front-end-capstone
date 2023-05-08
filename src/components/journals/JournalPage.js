import "./Journal.css";
import { DashboardPageNavBar } from "../nav/NavBar"
import { SideBar } from "../nav/SideBar";
import { JournalList } from "./JournalList";
import React from 'react';



export const Journal = () => {

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
          <JournalList />
        </section>
        <footer className="box e">

        </footer>
      </main>
    </div>
  </>
  )
}