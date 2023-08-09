import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Overlay from "../Components/Overlay/Overlay";
function Index() {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <div>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>

      {/* overlay */}
      <Overlay />
    </>
  );
}

export default Index;
