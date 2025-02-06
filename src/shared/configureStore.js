import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from './pokemonSlice'

const store = configureStore({
    reducer: {
        pokemon: pokemonReducer
    }
})

store.subscribe(() => {
    localStorage.setItem(
      "pokemonDex",
      JSON.stringify({ myPokemonData: store.getState().pokemon.myPokemonData })
    );
  });

export default store;