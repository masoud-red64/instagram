import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import SearchSlideShow from "../Components/SlideShow/SearchSlideShow";
import NotificationSlideShow from "../Components/SlideShow/NotificationSlideShow";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import TransparentOverlay from "../Components/TransparentOverlay/TransparentOverlay";

function Index() {
  const serachBoxSelector = useSelector(
    (state: RootState) => state.searchBoxReducer
  );
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
