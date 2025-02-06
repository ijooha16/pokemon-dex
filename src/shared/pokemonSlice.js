import { createSlice } from "@reduxjs/toolkit";

import pokeball from "../assets/pokeball.png";

//initialState
//createSlice (name, initialState, reducers)

const initialState = {
  myPokemonData:
    JSON.parse(localStorage.getItem("pokemonDex")).myPokemonData ||
    Array(6).fill({
      url: pokeball,
      name: "",
      filled: false,
    }),
  popup: {
    img_url: "",
    korean_name: "",
    types: [],
    id: null,
    description: "",
  },
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    ADD: (state, action) => {
      return {
        ...state,
        myPokemonData: state.myPokemonData.map((pokemon, idx) => {
          //비워져있는 인덱스 찾기
          const foundIdx = state.myPokemonData.findIndex(
            (pokemon) => !pokemon.filled
          );

          if (
            idx === foundIdx &&
            state.myPokemonData.every((mon) => mon.name !== action.payload.name)
          ) {
            //슬롯에 들어가있지 않고, 해당 인덱스면
            return { ...action.payload, filled: true }; //채워졌다고 변경
          }
          return pokemon; //빈 슬롯 찾았으면 나머지 그대로 반환
        }),
      };
    },
    REMOVE: (state, action) => {
      return {
        ...state,
        myPokemonData: state.myPokemonData.map((pokemon) =>
          pokemon.name === action.payload.name
            ? { url: pokeball, name: "", filled: false }
            : pokemon
        ),
      };
    },
    POPUP: (state, action) => {
      return { ...state, popup: action.payload };
    },
  },
});

export const { ADD, REMOVE, POPUP } = pokemonSlice.actions;
export default pokemonSlice.reducer;
