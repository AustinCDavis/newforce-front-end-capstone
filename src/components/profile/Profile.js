import "./Profile.css";
import { DashboardPageNavBar } from "../nav/NavBar"
import { SideBar } from "../nav/SideBar";
import { UserForm } from "./ProfileForm";

 export const Profile = () => {
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

                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Edit Profile
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2 className="profile__title">Edit Profile</h2>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <UserForm />
                        </div>
                    </div>
                </div>
            </section>
            <footer className="box e">

            </footer>
          </main>
      </div>
  </>
  )
}