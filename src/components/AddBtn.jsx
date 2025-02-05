import styled from "styled-components";
import { PokemonContext, ADD } from "../shared/PokemonDexContext";
import { useContext } from "react";

const Button = styled.button`
  height: 36px;
  width: 80px;
  border: 0px;
  border-radius: 18px;
  color: white;
  background-color: #3466af;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
  }

  &:disabled {
    transform: scale(1);
    background-color: #d0d0d0;
    cursor: not-allowed;
  }
`;

const AddBtn = ({ caught, data }) => {
  const { state, dispatch } = useContext(PokemonContext);
  const myPokemon = state.myPokemonData;

  const handleBtnClick = () => {
    //data는 url, name 가진 배열
    dispatch({ type: ADD, payload: { url: data[0], name: data[1] } });

    //모든 슬롯이 찬 경우 알림창
    if (myPokemon.every((mon) => mon.filled)) {
      alert("슬롯이 다 찼습니다!");
    }
  };

  return (
    <Button disabled={caught} onClick={handleBtnClick}>
      {caught ? "잡음" : "잡기"}
    </Button>
  );
};

export default AddBtn;
