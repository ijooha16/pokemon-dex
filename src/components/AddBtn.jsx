import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { ADD, FULLALERT, EXISTALERT } from "../redux/modules/pokemonSlice.js";

const Button = styled.button`
  height: 36px;
  width: 80px;
  border: 0px;
  border-radius: 18px;
  color: white;
  background-color: ${(props) => (props.caught ? "#d0d0d0" : "#3466af")};
  cursor: pointer;

  &:hover {
    transform: ${(props) => (props.caught ? "scale(1)" : "scale(1.1)")};
    transition: transform 0.2s ease-in-out;
  }
`;

const AddBtn = ({ data }) => {
  const dispatch = useDispatch();
  const myPokemon = useSelector((state) => state.pokemon.myPokemonData);
  const caught = myPokemon.some((el) => el.name === data[1]);

  const handleBtnClick = () => {
    //data는 url, name 가진 배열
    dispatch(ADD({ url: data[0], name: data[1] }));

    //모든 슬롯이 찬 경우 state.alert 변경
    if (myPokemon.every((mon) => mon.filled)) {
      dispatch(FULLALERT(true));
    }

    //이미 잡은 포켓몬인 경우
    if (caught) {
      dispatch(EXISTALERT(true));
    }
  };

  return (
    <Button caught={caught} onClick={handleBtnClick}>
      {caught ? "잡음" : "잡기"}
    </Button>
  );
};

export default AddBtn;
