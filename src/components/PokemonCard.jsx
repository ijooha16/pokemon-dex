import styled from "styled-components";
import { useContext } from "react";
import { PokemonContext, POPUP } from "../shared/PokemonDexContext";
import { useNavigate } from "react-router-dom";
import AddBtn from "./AddBtn";
import MOCK_DATA from "../assets/data";

const StCard = styled.div`
  width: 200px;
  height: 260px;
  box-sizing: border-box;
  padding: 30px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #eaeaea;
  border-radius: 12px;
  background-color: white;

  img {
    width: 150px;
    position: absolute;
    margin-top: 20px;
  }

  h3 {
    margin: 0;
  }
`;

const PokemonCard = () => {
  const { dispatch } = useContext(PokemonContext);

  const navigator = useNavigate();
  const openPopup = () => navigator("?popup=open"); //팝업 열기 페이지

  const handleImgClick = (pokemon) => {
    openPopup();
    dispatch({ type: POPUP, payload: pokemon });
  };

  return (
    <>
      {MOCK_DATA.map((pokemon) => {
        const data = [pokemon.img_url, pokemon.korean_name];

        return (
          <StCard key={pokemon.id}>
            <h3>{pokemon.korean_name}</h3>
            <img
              onClick={() => handleImgClick(pokemon)}
              src={pokemon.img_url}
              draggable="false"
            ></img>
            <AddBtn data={data} />
          </StCard>
        );
      })}
    </>
  );
};

export default PokemonCard;
