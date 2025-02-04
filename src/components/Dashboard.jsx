import styled from "styled-components";
import { StBox, StDexBox, StH1 } from "../shared/styleGuide";

const StDashBox = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: ${(props) => (props.filled ? "pointer" : "not-allowed")};

  img {
    height: 120px;
    width: 120px;
    transition: opacity 0.3s ease-in-out;
  }

  p {
    margin: 0;
    color: #21386e;
    font-size: 16px;
    font-weight: 700;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: ${(props) => (props.filled ? "scale(1.1)" : "scale(1)")};
    transition: transform 0.2s ease-in-out;
  }

  &:hover img,
  &:hover p {
    opacity: ${(props) =>
      props.filled ? "0.2" : "1"}; /* 이미지와 텍스트 투명도 조정 */
  }
`;
const StOverlay = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  color: #e73d3d;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${StDashBox}:hover & {
    opacity: ${(props) => (props.filled ? "1" : "0")};
  }
`;

const Dashboard = ({ my, setMy, pokeball }) => {
  
  
  const handleClick = (name) => {
    let newData = my.map((el) =>
      el.name === name ? { url: pokeball, name: "", filled: false } : el
    )
    setMy(newData);
    localStorage.setItem('pokemonDex', JSON.stringify(newData));
  };

  return (
    <StDexBox border="#3466AF">
      <StH1 color="#21386E">My Pokemons</StH1>
      <StBox flexDirection="row" gap="62px">
        {my.map((mon, idx) => {
          return (
            <StDashBox
              filled={mon.filled}
              key={idx}
              onClick={() => handleClick(mon.name)}
            >
              <StOverlay filled={mon.filled}>놓아주기</StOverlay>
              <img key={idx} src={mon.url} draggable="false" />
              <p>{mon.name}</p>
            </StDashBox>
          );
        })}
      </StBox>
    </StDexBox>
  );
};

export default Dashboard;
