import { Route, Routes} from "react-router-dom"
import { Profile } from "../profile/Profile";
import { Strategy } from "../strategypage/StrategyPage";
import { Dashboard } from "../dashboardpage/Dashboard";


export const ApplicationViews = () => {
    return (
      <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="strategy" element={<Strategy />} />
      </Routes>
    );
  };
      