import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { LandingPage } from './components/landingpage/LandingPage';
import { Authorized } from './components/views/Authorized';
import { ApplicationViews } from './components/views/ApplicationViews';
import { Route, Routes } from "react-router-dom"
import { NavBar } from './components/nav/NavBar';


function App() {
  return <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/landingpage" element={<LandingPage />} />

  <Route path="*" element={
    <Authorized>
      <>
        <NavBar />
        <SideBar />
        <ApplicationViews />
      </>
    </Authorized>

  } />
</Routes>
}

export default aApp;
