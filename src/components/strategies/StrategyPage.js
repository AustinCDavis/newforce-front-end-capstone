import "./Strategy.css";
import { DashboardPageNavBar } from "../nav/NavBar"
import { SideBar } from "../nav/SideBar";
import { StrategyList } from "./StrategyList";
import React from 'react';



export const Strategy = () => {

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
          <StrategyList />
        </section>
        <footer className="box e">

        </footer>
      </main>
    </div>
  </>
  )
}