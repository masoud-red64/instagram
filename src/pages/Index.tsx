import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

function Index() {
  return (
    <div>
      {/* Sidebar */}
      <div className="fixed bottom-0 right-0 md:bottom-auto md:right-auto left-0">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
