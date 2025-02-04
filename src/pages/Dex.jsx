import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import MOCK_DATA from "../assets/data.js";
import logo from "../assets/logo.png";
import pokeball from "../assets/pokeball.png";
import Dashboard from "../components/Dashboard";
import { PokemonList } from "../components/PokemonList";
import { StBox } from "../shared/styleGuide";

const StLogoImg = styled.img`
  width: 300px;
  margin-bottom: 60px;
`;
const StPopup = styled.div`
  /* opacity: 0; */
  height: 100vh;
  width: 100vw;
  z-index: 10;

  display: ${props => props.show ? 'flex' : 'none'}; //여기 나중에 껐다 켰다 바꾸는 걸로 수정
  justify-content:center;
  align-items: center;
  
  position: fixed;
  top: 0;
  left: 0;

  background-color: #000000d0;

  div {
    height: 600px;
    width: 400px;
    padding: 0 60px;
    box-sizing: border-box;
    border-radius: 30px;

    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    background-color: #ffffffdb;

    img {
      width: 300px;
    }

    h2 {
      margin: 0;
      font-size: 36px;
    }

    p {
      margin-bottom: 40px;
      font-size: 20px;
      color: gray;
    }

    h4 {
      font-weight: 400;
      margin-bottom: 60px;
      line-height: 160%;
    }
  }
`

const Dex = () => {
  //초기 상태, 객체 6개, 기본이미지
  const initialMy = Array(6).fill({ url: pokeball, name: '', filled: false });
  const initialPopup = {img_url: '', korean_name: '', types: [], id: null, description: ''}
  const [my, setMy] = useState(initialMy);
  const [popup, setPopup] = useState(initialPopup)
  const navigator = useNavigate();

  const handlePopupClick = () => {
    setPopup({...popup, show:false})
  }

  return (
    <StBox show={popup.show} gap="30px">
      <StPopup onClick={handlePopupClick} show={popup.show}>
        <div>
          <img src={popup.img_url}/>
          <h2>{popup.korean_name}</h2>
          <p>{popup.types.join(' · ')}</p>
          <h4>{popup.description}</h4>
        </div>
      </StPopup>
      <StLogoImg src={logo} onClick={() => navigator("/")} />
      <Dashboard my={my} setMy={setMy} pokeball={pokeball} />
      <PokemonList my={my} setMy={setMy} MOCK_DATA={MOCK_DATA} popup={popup} setPopup={setPopup} />
    </StBox>
  );
};

export default Dex;
