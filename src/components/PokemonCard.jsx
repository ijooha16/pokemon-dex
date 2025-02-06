import AddBtn from "./AddBtn";
import styled from "styled-components";
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

const PokemonCard = ({ my, setMy, setPopup, openPopup, setAlert }) => {
  
  const handleImgClick = (data) => {
    openPopup();
    setPopup({ ...data });
  };

  return (
    <>
      {MOCK_DATA.map((pokemon) => {
        return (
          <StCard key={pokemon.id}>
            <h3>{pokemon.korean_name}</h3>
            <img
              onClick={() => handleImgClick(pokemon)}
              src={pokemon.img_url}
              draggable="false"
            ></img>
            <AddBtn pokemon={pokemon} my={my} setMy={setMy} setAlert={setAlert} />
          </StCard>
        );
      })}
    </>
  );
};

export default PokemonCard;
