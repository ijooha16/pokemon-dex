import styled from "styled-components";
import { StDexBox, StH1 } from "../shared/styleGuide";

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

  button {
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
    background-color: #d0d0d0;
    cursor: not-allowed;
  }
  }
`;

export const PokemonList = ({ MOCK_DATA, my, setMy }) => {
  console.log(my)
  
  const handleClick = (url, name) => {
    let found = false;
    
    //포케몬 추가
    setMy(
      my.map((mon) => {
        if (!found && !mon.filled && my.every((el) => el.url !== url)) {
          //아직 못찾았고, 슬롯에 안 채워져있으면
          found = true; //찾았다는 표시
          return { url, name, filled: true }; //채워졌다고 변경
        }
        return mon; //빈 슬롯 찾았으면 나머지 그대로 반환
      })
    );

    //모든 슬롯이 찬 경우 알림창
    if (my.every((mon) => mon.filled)) {
      alert("슬롯이 다 찼습니다!");
    }
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
              <img src={pokemon.img_url}></img>
              <button
                disabled={caught}
                onClick={() => handleClick(pokemon.img_url, pokemon.korean_name)}
              >
                {caught ? "잡음" : "잡기"}
              </button>
            </StCard>
          );
        })}
      </StGrid>
    </StDexBox>
  );
};
