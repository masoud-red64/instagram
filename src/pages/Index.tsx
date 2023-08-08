import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import SearchSlideShow from "../Components/SlideShow/SearchSlideShow";
import NotificationSlideShow from "../Components/SlideShow/NotificationSlideShow";

function Index() {
  return (
    <div>
      {/* Sidebar */}
      <div>
        <Sidebar />
      </div>
      <div>
        <SearchSlideShow />
        <NotificationSlideShow />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Index;
