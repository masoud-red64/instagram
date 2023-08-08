import Home from "./pages/Home";
import Index from "./pages/Index";
import Notifications from "./pages/Notifications";

const routes = [
  {
    path: "/",
    element: <Index />,
    children: [
      { path: "", element: <Home /> },
      { path: "notifications", element: <Notifications /> },
    ],
  },
];

export default routes;
