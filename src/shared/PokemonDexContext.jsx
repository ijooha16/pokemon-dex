import { createContext, useReducer } from "react";
import pokeball from "../assets/pokeball.png";

//대쉬보드에 추가
//대쉬보드에서 삭제
//팝업
const ADD = "ADD";
const REMOVE = "REMOVE";
const POPUP = "POPUP";
const FULLALERT = "FULLALERT";
const EXISTALERT = "EXISTALERT";

const initialState = {
  myPokemonData:
    JSON.parse(localStorage.getItem("pokemonDex")) ||
    Array(6).fill({
      url: pokeball,
      name: "",
      filled: false,
    }),
  alert: { full: false, exist: false },
  popup: {
    img_url: "",
    korean_name: "",
    types: [],
    id: null,
    description: "",
  },
};

//reducer 함수
//자리 비었는지 확인

const reducer = (state, action) => {
  const myPokemon = state.myPokemonData;
  let found = false;

  const add = myPokemon.map((pokemon) => {
    if (
      !found &&
      !pokemon.filled &&
      myPokemon.every((mon) => mon.url !== action.payload.url)
    ) {
      //아직 못찾았고, 슬롯에 안 채워져있으면
      found = true; //찾았다는 표시

      return { ...action.payload, filled: true }; //채워졌다고 변경
    }
    return pokemon; //빈 슬롯 찾았으면 나머지 그대로 반환
  });

  const remove = myPokemon.map((pokemon) =>
    pokemon.name === action.payload.name
      ? { url: pokeball, name: "", filled: false }
      : pokemon
  );

  switch (action.type) {
    case ADD: //payload: pokemon
      return { ...state, myPokemonData: add };
    case REMOVE: //payload: {url, name} 객체
      return { ...state, myPokemonData: remove };
    case POPUP: //모든 값 객체
      return { ...state, popup: action.payload };
    case FULLALERT: //모든 값 객체
      return { ...state, alert: { full: action.payload, exist: false } };
    case EXISTALERT: //모든 값 객체
      return { ...state, alert: { full: false, exist: action.payload } };
  }
};

const PokemonContext = createContext();

//provider
const PokemonProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

export {
  PokemonContext,
  PokemonProvider,
  ADD,
  REMOVE,
  POPUP,
  FULLALERT,
  EXISTALERT,
};
