import Home from "./pages/Home";
import Index from "./pages/Index";
import Notifications from "./pages/Notifications";
import Stories from "./pages/Stories";

const routes = [
  {
    path: "/",
    element: <Index />,
    children: [
      { path: "", element: <Home /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
  {
    path: "/stories/:userID",
    element: <Stories />,
  },
];

export default routes;
