import * as React from "react";
import PokemonList from "../PokemonList";
import { ContainerWrapper, PokemonSelection, EmptyState } from "./styles";
import PokemonDetail from "../PokemonDetail";

const PokemonContainer = () => {
  const [selectedPokemon, setSelectedPokemon] = React.useState();

  return (
    <ContainerWrapper>
      <PokemonSelection>
        <PokemonList setSelectedPokemon={setSelectedPokemon} />
        {selectedPokemon ? (
          <PokemonDetail name={selectedPokemon} />
        ) : (
          <EmptyState>Select a Pokemon from the list on the left</EmptyState>
        )}
      </PokemonSelection>
    </ContainerWrapper>
  );
};

export default PokemonContainer;
