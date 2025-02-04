import styled from "styled-components";

export const StBox = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: ${(props) => props.flexDirection || "column"};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap || "20px"};
`;

export const StDexBox = styled.div`
  margin: 0;
  padding: 80px 0;
  width: 1280px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  border: 6px solid ${(props) => props.border || "#FFCB05"};
  border-radius: 40px;

  background-color: rgb(255, 250, 234);
`;

export const StH1 = styled.h1`
  font-family: "Bangers";
  font-size: 42px;
  letter-spacing: 2px;
  color: ${(props) => props.color || "#C7A008"};

  margin: 0;
  margin-bottom: 60px;
`;
