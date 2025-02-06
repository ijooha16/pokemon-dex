import styled from "styled-components";

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

const AddBtn = ({ pokemon, setMy, my, setAlert }) => {
  const url = pokemon.img_url;
  const name = pokemon.korean_name;
  const caught = my.some((el) => el.url === url);

  const handleBtnClick = (url, name) => {
    let found = false;

    let newData = my.map((mon) => {
      if (!found && !mon.filled && my.every((el) => el.url !== url)) {
        //아직 못찾았고, 슬롯에 안 채워져있으면
        found = true; //찾았다는 표시
        return { url, name, filled: true }; //채워졌다고 변경
      }
      return mon; //빈 슬롯 찾았으면 나머지 그대로 반환
    });

    //포케몬 추가
    setMy(newData);

    //모든 슬롯이 찬 경우 알림창
    if (my.every((mon) => mon.filled)) {
      setAlert({ full: true, exist: false });
    }

    //이미 잡은 포켓몬인 경우
    if (caught) {
      setAlert({ full: false, exist: true });
    }

    localStorage.setItem("pokemonDex", JSON.stringify(newData));
  };

  return (
    <Button caught={caught} onClick={() => handleBtnClick(url, name)}>
      {caught ? "잡음" : "잡기"}
    </Button>
  );
};

export default AddBtn;
