import "./StrategyPage.css";
import { DashboardPageNavBar } from "../nav/NavBar"
import { SideBar } from "../nav/SideBar";
import { StrategyForm } from "../strategies/StrategyForm"
import { StrategyList } from "../strategies/StrategyList";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { MyVerticallyCenteredModal } from "../strategies/StrategyForm";



export const Strategy = () => {
    
    function NewStrategyModal() {
        const [modalShow, setModalShow] = React.useState(false);
      
        return (
          <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              New Strategy
            </Button>
      
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </>
        );
      }

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
                    <NewStrategyModal />
            </section>
            <footer className="box e">

            </footer>
          </main>
      </div>
  </>
  )
}