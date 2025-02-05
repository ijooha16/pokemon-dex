import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";


import logo from "../assets/logo.png";
import pokeball from "../assets/pokeball.png";
import Dashboard from "../components/Dashboard";
import { PokemonList } from "../components/PokemonList";
import { StBox } from "../shared/styleGuide";
import Popup from "../components/Popup";


const StLogoImg = styled.img`
  width: 300px;
  margin-bottom: 60px;
`;


const Dex = () => {
  const storage = () => {
    //로컬 스토리지 비어있으면 초기값 설정
    if (localStorage.getItem("pokemonDex") === null) {
      const initialMy = Array(6).fill({
        url: pokeball,
        name: "",
        filled: false,
      });
      localStorage.setItem("pokemonDex", JSON.stringify(initialMy));
    }

    // 로컬스토리지에서 'pokemonDex' 값 가져오기
    return JSON.parse(localStorage.getItem("pokemonDex"));
  };

  //초기 상태, 객체 6개, 기본이미지
  const initialPopup = {
    img_url: "",
    korean_name: "",
    types: [],
    id: null,
    description: "",
  };

  const [my, setMy] = useState(storage);
  const [popup, setPopup] = useState(initialPopup);
  const navigator = useNavigate();




  return (
    <StBox show={popup.show} gap="30px">
      <Popup popup={popup} setPopup={setPopup} my={my} setMy={setMy} />
      <StLogoImg src={logo} onClick={() => navigator("/")} />
      <Dashboard my={my} setMy={setMy} pokeball={pokeball} />
      <PokemonList
        my={my}
        setMy={setMy}
        setPopup={setPopup}
      />
    </StBox>
  );
};

export default Dex;
