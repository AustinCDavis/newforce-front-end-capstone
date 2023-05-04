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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Edit Profile
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2 className="profile__title">Edit Profile</h2>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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