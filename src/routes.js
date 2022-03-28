import { Route, Routes } from "react-router-dom";

import Dashboard from "../src/components/features/Dashboard";
import Profile from "../src/components/features/Profile";
import Settings from "../src/components/features/Settings";
import Task from "../src/components/features/Task";
import Layout from "../src/components/layout";

function DashboardRoutes() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login/>}/>
        <Route path="/contactUs" element={<ContactUs/>}/> */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/Task" element={<Task />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default DashboardRoutes;
