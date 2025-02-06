import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

//로컬스토리지 동기화
store.subscribe(() => {
  localStorage.setItem(
    "pokemonDex",
    JSON.stringify(store.getState().pokemon.myPokemonData)
  );
});

export default store;
