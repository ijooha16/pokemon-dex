import styled from "styled-components";
import { StBox } from "../shared/styleGuide";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  const StImg = styled.img`
    width: 600px;
  `;
  const StBtn = styled.button`
    height: 54px;
    width: 180px;

    color: white;
    border: 0;
    border-radius: 40px;
    background-color: #e62829;

    font-size: 22px;
    font-weight: 400;

    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
  `;

  return (
    <StBox>
      <StImg src={logo}></StImg>
      <StBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        시작하기
      </StBtn>
    </StBox>
  );
};

export default Home;
