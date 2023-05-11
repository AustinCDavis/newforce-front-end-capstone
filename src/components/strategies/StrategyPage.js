import "./Strategy.css";
import { DashboardPageNavBar } from "../nav/NavBar"
import { SideBar } from "../nav/SideBar";
import { StrategyList } from "./StrategyList";
import React from 'react';
import { Stack } from "react-bootstrap";



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
          <section className="container">
            <section className="box f">
              <Stack className="stats">
                <div className="cardBody">
                  <div className="text">
                    <h6>Total invested</h6>
                    -----clarify here---
                  </div>
                  <div className="number">
                    <h5>1340</h5>
                  </div>
                </div>
                <div className="cardBody">
                  <div className="text">
                    <h6>---Another Statistic---</h6>
                    -----clarify here---
                  </div>
                  <div className="number">
                    <h5>1340</h5>
                  </div>
                </div>
                <div className="cardBody">
                  <div className="text">
                    <h6>---Profits---</h6>
                    -----clarify here---
                  </div>
                  <div className="number">
                    <h5>1340</h5>
                  </div>
                </div>
              </Stack>
              <section className="graph">
                <div className="graphBody">
                  <div className="text">
                    <h5>Graph ?</h5>
                  </div>
                </div>
              </section>
            </section>
            <section className="box g">
              <StrategyList />
            </section>
          </section>
      </main>
    </div>
  </>
  )
}