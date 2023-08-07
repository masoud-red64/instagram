import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import SvgSymbol from "./Components/SvgSymbol";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const router = useRoutes(routes);

  return (
    <Provider store={store}>
      <SvgSymbol />

      {router}
    </Provider>
  );
}

export default App;
