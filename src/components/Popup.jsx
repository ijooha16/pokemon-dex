import styled from "styled-components";
import AddBtn from "../components/AddBtn.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"

const StPopup = styled.div`
  /* opacity: 0; */
  height: 100vh;
  width: 100vw;
  z-index: 10;

  display: flex;
  /* display: ${(props) => (props.show ? "flex" : "none")}; */
  justify-content: center;
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

    display: flex;
    flex-direction: column;
    justify-content: center;
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
      margin-bottom: 20px;
      font-size: 20px;
      color: gray;
    }

    h4 {
      font-weight: 400;
      margin-bottom: 60px;
      line-height: 160%;
    }
  }
`;

const Popup = () => {
  const popData = useSelector(state => state.pokemon.popup)
  const data = [popData.img_url, popData.korean_name];

  const navigator = useNavigate();
  const closePopup = () => navigator(-1); //뒤로가기

  const handlePopupClick = () => {
    closePopup();
  };

  return (
    <>
      <StPopup onClick={handlePopupClick}>
        <div>
          <img src={popData.img_url} />
          <h2>{popData.korean_name}</h2>
          <p>{popData.types.join(" · ")}</p>
          <AddBtn data={data} />
          <h4>{popData.description}</h4>
        </div>
      </StPopup>
    </>
  );
};

export default Popup;
