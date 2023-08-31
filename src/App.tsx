import { useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import SvgSymbol from "./Components/SvgSymbol";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "./store/store";
import { getCookie } from "./store/auth";

function App() {
  const router = useRoutes(routes);
  const authSelector = useSelector((state: RootState) => state.authReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie("user")) {
      navigate("/login");
    }
  }, [authSelector.isLogin]);

  return (
    <>
      <SvgSymbol />

      {router}
    </>
  );
}

export default App;
