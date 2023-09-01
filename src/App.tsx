import { useNavigate, useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import SvgSymbol from "./Components/SvgSymbol";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "./store/store";
import { getCookie } from "./store/authSlice";

function App() {
  const router = useRoutes(routes);
  const authSelector = useSelector((state: RootState) => state.authReducer);
  const darkModeSelector = useSelector(
    (state: RootState) => state.darkModeReducer
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (!getCookie("user")) {
      navigate("/login");
    }
  }, [authSelector.isLogin]);

  useEffect(() => {
    const preferredTheme = darkModeSelector.isDarkMode ? "dark" : "";

    localStorage.setItem("theme", preferredTheme);

    document.documentElement.className = preferredTheme;
  }, [darkModeSelector.isDarkMode]);

  return (
    <>
      <SvgSymbol />

      {router}
    </>
  );
}

export default App;
