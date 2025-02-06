import styled from "styled-components";
import AddBtn from "../components/AddBtn.jsx";

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

const Popup = ({ popup, setPopup, my, setMy, closePopup, setAlert }) => {
  const handlePopupClick = () => {
    closePopup();
    setPopup({ ...popup });
  };

  return (
    <>
      <StPopup onClick={handlePopupClick}>
        <div>
          <img src={popup.img_url} />
          <h2>{popup.korean_name}</h2>
          <p>{popup.types.join(" · ")}</p>
          <AddBtn pokemon={popup} my={my} setMy={setMy} setAlert={setAlert} />
          <h4>{popup.description}</h4>
        </div>
      </StPopup>
    </>
  );
};

export default Popup;
