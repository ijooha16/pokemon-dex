import { useLocation } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logo.png";
import Dashboard from "../components/Dashboard";
import { PokemonList } from "../components/PokemonList";
import { StBox } from "../shared/styleGuide";
import Popup from "../components/Popup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { ALERT } from "../shared/pokemonSlice";
import { useEffect } from "react";

const StLogoImg = styled.img`
  width: 300px;
  margin-bottom: 60px;
`;

const Dex = () => {
  const location = useLocation();

  const isPopupOpen =
    new URLSearchParams(location.search).get("popup") === "open"; //팝업 열려있는지 확인
  const navigator = useNavigate();

  const dispatch = useDispatch();
  const alert = useSelector(state => state.pokemon.alert)


  useEffect(() => {
    if (alert) {
      toast.warn('포켓몬 슬롯이 가득 찼어요!');
      dispatch(ALERT(false));
    }
  });

  return (
    <StBox gap="30px">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
        // transition={Bounce}
      />
      {isPopupOpen && ( //팝업이 open으로 돼있으면 팝업 페이지 보이기
        <Popup />
      )}
      {/* 홈화면으로 */}
      <StLogoImg src={logo} onClick={() => navigator("/")} />
      <Dashboard />
      <PokemonList />
    </StBox>
  );
};

export default Dex;
