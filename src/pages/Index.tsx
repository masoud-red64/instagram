import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
function Index() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
