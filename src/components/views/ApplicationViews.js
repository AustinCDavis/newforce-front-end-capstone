import { Outlet, Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile"


export const ApplicationViews = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="title--main">Next Trade</h1>
              <div>Your one-stop-shop to get all stuff.</div>
              <div className="images-container"></div>
              <Outlet />
            </>
          }
        >
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    );
  };
      