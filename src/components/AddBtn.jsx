import styled from "styled-components";


const AddBtn = ({caught, handleBtnClick}) => {
  const StAddBtn = styled.button`
    height: 36px;
    width: 80px;
    border: 0px;
    border-radius: 18px;
    color: white;
    background-color: #3466af;
    cursor: pointer;
  
    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
  
    &:disabled {
      transform: scale(1);
      background-color: #d0d0d0;
      cursor: not-allowed;
    }
  `;
  
  return (
    <StAddBtn
      disabled={caught}
      onClick={() => handleBtnClick()}
    >
      {caught ? "잡음" : "잡기"}
    </StAddBtn>
  );
};

export default AddBtn;
