import styled from "styled-components";
import { StDexBox, StH1 } from "../shared/styleGuide";
import AddBtn from "./AddBtn";

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
`;
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

export const PokemonList = ({  MOCK_DATA, my, setMy, setPopup }) => {
  console.log(my);

  const handleImgClick = (data) => {
    setPopup({ ...data, show: true });
  };

  return (
    <StDexBox>
      <StH1>Pokemon List</StH1>
      <StGrid flexDirection="row" gap="80px">
        {MOCK_DATA.map((pokemon) => {
          let caught = my.some((el) => el.url === pokemon.img_url);

          return (
            <StCard key={pokemon.id}>
              <h3>{pokemon.korean_name}</h3>
              <img
                onClick={() => handleImgClick(pokemon)}
                src={pokemon.img_url}
                draggable="false"
              ></img>
              <AddBtn caught={caught} pokemon={pokemon} my={my} setMy={setMy} />
            </StCard>
          );
        })}
      </StGrid>
    </StDexBox>
  );
};
