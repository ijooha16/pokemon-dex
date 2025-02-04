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

const Dex = () => {
  //초기 상태, 객체 6개, 기본이미지
  const initialMy = Array(6).fill({ url: pokeball, name: '', filled: false });
  const [my, setMy] = useState(initialMy);
  const navigator = useNavigate();

  return (
    <StBox gap="30px">
      <StLogoImg src={logo} onClick={() => navigator("/")} />
      <Dashboard my={my} setMy={setMy} pokeball={pokeball} />
      <PokemonList my={my} setMy={setMy} MOCK_DATA={MOCK_DATA} />
    </StBox>
  );
};

export default Dex;
