import "./App.css";
import Router from "./shared/Router";
import { PokemonProvider } from "../src/shared/PokemonDexContext";

function App() {
  return (
    <PokemonProvider>
      <Router />
    </PokemonProvider>
  );
}

export default App;
