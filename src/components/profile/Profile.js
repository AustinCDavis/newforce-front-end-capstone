import "./Profile.css";
import { DashboardPageNavBar } from "../nav/NavBar"
import { SideBar } from "../nav/SideBar";
import { MyVerticallyCenteredProfileModal, UserForm } from "./ProfileEditForm";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, {useState} from "react";

 export const Profile = () => {
   
    function UpdateStrategyModal() {
        const [modalShow, setModalShow] = React.useState(false);
      
        return (
          <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Edit Profile
            </Button>
      
            <MyVerticallyCenteredProfileModal
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
              <h1>Hello Profile Page</h1>

                {/* <!-- Progile modal --> */}
                <UpdateStrategyModal />
            </section>
            <footer className="box e">

            </footer>
          </main>
      </div>
  </>
  )
}