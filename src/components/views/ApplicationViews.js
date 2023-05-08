import { Route, Routes } from "react-router-dom"
import { Profile } from "../profile/Profile";
import { Strategy } from "../strategies/StrategyPage";
import { Dashboard } from "../dashboardpage/Dashboard";
import { JournalContainer } from "../journals/JournalContainer";


export const ApplicationViews = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="profile" element={<Profile />} />
      <Route path="strategies" element={<Strategy />} />
      <Route path="strategies/:strategyId" element={<JournalContainer />} />
    </Routes>
  );
};
