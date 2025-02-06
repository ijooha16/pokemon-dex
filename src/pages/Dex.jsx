import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import logo from "../assets/logo.png";
import pokeball from "../assets/pokeball.png";
import Dashboard from "../components/Dashboard";
import { PokemonList } from "../components/PokemonList";
import { StBox } from "../shared/styleGuide";
import Popup from "../components/Popup";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

const StLogoImg = styled.img`
  width: 300px;
  margin-bottom: 60px;
`;

const Dex = () => {
  const storage = () => {
    //로컬 스토리지 비어있으면 초기값 설정
    if (localStorage.getItem("pokemonDex").length < 6) {
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

  //popup 초기값, 객체 6개, 기본이미지
  const initialPopup = {
    img_url: "",
    korean_name: "",
    types: [],
    id: null,
    description: "",
  };

  //alert 초기값
  const initialAlert = {
    full: false,
    exist: false,
  };

  const [my, setMy] = useState(storage);
  const [popup, setPopup] = useState(initialPopup);
  const [alert, setAlert] = useState(initialAlert);
  const navigator = useNavigate();
  const location = useLocation();

  const isPopupOpen =
    new URLSearchParams(location.search).get("popup") === "open"; //팝업 열려있는지 확인
  const openPopup = () => navigator("?popup=open"); //팝업 열기 페이지
  const closePopup = () => navigator(-1); //뒤로가기

  useEffect(() => {
    if (alert.full) {
      toast.warn("포켓몬 슬롯이 가득 찼어요!"); //state.alert = true면 알림창
      setAlert({ full: false, exist: false }); //초기화
    }

    if (alert.exist) {
      toast.error("이미 잡은 포켓몬이예요!");
      setAlert({ full: false, exist: false });
    }
  }, [alert]);

  
  
  return (
    <StBox show={popup.show} gap="30px">
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
        <Popup
          popup={popup}
          setPopup={setPopup}
          my={my}
          setMy={setMy}
          closePopup={closePopup}
          setAlert={setAlert}
        />
      )}
      {/* 홈화면으로 */}
      <StLogoImg src={logo} onClick={() => navigator("/")} />
      <Dashboard
        my={my}
        setMy={setMy}
        pokeball={pokeball}
        
      />
      <PokemonList
        my={my}
        setMy={setMy}
        setPopup={setPopup}
        openPopup={openPopup}
        setAlert={setAlert}
      />
    </StBox>
  );
};

export default Dex;
