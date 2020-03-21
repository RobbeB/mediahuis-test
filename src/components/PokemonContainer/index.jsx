import * as React from "react";
import PokemonList from "../PokemonList";
import { ContainerWrapper } from "./styles";

const PokemonContainer = () => {
  return (
    <ContainerWrapper>
      <div>
        <PokemonList />
      </div>
    </ContainerWrapper>
  );
};

export default PokemonContainer;
