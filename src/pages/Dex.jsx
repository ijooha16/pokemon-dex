import styled from "styled-components";
import { StBox } from "../shared/styleGuide";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { FULLALERT, EXISTALERT } from "../redux/modules/pokemonSlice.js";
import Dashboard from "../components/Dashboard.jsx";
import { PokemonList } from "../components/PokemonList.jsx";
import Popup from "../components/Popup.jsx";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

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
  const alert = useSelector((state) => state.pokemon.alert);

  useEffect(() => {
    if (alert.full) {
      toast.warn("포켓몬 슬롯이 가득 찼어요!"); //state.alert = true면 알림창
      dispatch(FULLALERT(false)); //초기화
    }

    if (alert.exist) {
      toast.error("이미 잡은 포켓몬이예요!");
      dispatch(EXISTALERT(false));
    }
  });

  return (
    <StBox gap="30px">
      <ToastContainer
        position="top-right"
        autoClose={1000}
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
