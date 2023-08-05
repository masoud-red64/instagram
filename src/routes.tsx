import Home from "./pages/Home";
import Index from "./pages/Index";

const routes = [
  {
    path: "/",
    element: <Index />,
    children: [{ path: "", element: <Home /> }],
  },
];

export default routes;
