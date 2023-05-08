import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/landingpage/LandingPage";
import { LandingPageNavBar } from "./components/nav/LandingPageNavBar";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register"
import { Dashboard } from "./components/dashboardpage/Dashboard";
import { Authorized } from "./components/views/Authorized";
import { ApplicationViews } from "./components/views/ApplicationViews";
import { DashboardPageNavBar } from "./components/nav/NavBar";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={
        <Authorized>
          <>
            <ApplicationViews />
          </>
        </Authorized>
      } />
    </Routes>
  )
}

export default App;
