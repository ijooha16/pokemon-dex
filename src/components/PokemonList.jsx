import styled from "styled-components";
import { StDexBox, StH1 } from "../shared/styleGuide";
import PokemonCard from "./PokemonCard";

const StGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
`;

export const PokemonList = () => {
  return (
    <StDexBox>
      <StH1>Pokemon List</StH1>
      <StGrid flexDirection="row" gap="80px">
        <PokemonCard />
      </StGrid>
    </StDexBox>
  );
};
