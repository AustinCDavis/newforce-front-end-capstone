
import { DashboardPageNavBar } from "../nav/NavBar"
import { SideBar } from "../nav/SideBar";
import { JournalList } from "./JournalList"; 
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';



export const JournalContainer = () => {

    function NewStrategyModal() {
        const [modalShow, setModalShow] = React.useState(false);

        return (
            <>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                    New Strategy
                </Button>

                {/* <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                /> */}
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
                </section>
                <footer className="box e">

                </footer>
            </main>
        </div>
    </>
    )
}