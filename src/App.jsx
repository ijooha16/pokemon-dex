import "./App.css";
import Router from "./shared/Router.jsx";
import { Provider } from "react-redux";
import store from "./redux/config/configureStore.js";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
