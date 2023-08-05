import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import SvgSymbol from "./SvgSymbol";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <SvgSymbol />

      {router}
    </>
  );
}

export default App;
