import "../Journal.css";
import { DashboardPageNavBar } from "../../nav/NavBar"
import { SideBar } from "../../nav/SideBar";
import { JournalEntryList } from "./JournalEntryList";
import React from 'react';



export const JournalEntryPage = () => {

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
          <JournalEntryList />
        </section>
        <footer className="box e">

        </footer>
      </main>
    </div>
  </>
  )
}