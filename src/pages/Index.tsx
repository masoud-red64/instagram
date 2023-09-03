import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import Overlay from "../Components/Overlay/Overlay";
import CreateNewPost from "../Components/CreateNewPost/CreateNewPost";
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

      {/* Create New Post */}
      <CreateNewPost/>

      {/* overlay */}
      <Overlay />
    </>
  );
}

export default Index;
