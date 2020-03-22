import * as React from "react";
import PokemonList from "../PokemonList";
import { ContainerWrapper, PokemonSelection, EmptyState } from "./styles";
import PokemonDetail from "../PokemonDetail";
import Squad from "../Squad";

const PokemonContainer = () => {
  const [selectedPokemon, setSelectedPokemon] = React.useState();
  const [squad, setSquad] = React.useState([]);

  const addToSquad = React.useCallback(
    (pokemon, selectedMoves) =>
      selectedMoves.length > 0
        ? setSquad(squad => [{ ...pokemon, selectedMoves }, ...squad])
        : window.alert("choose atleast 1 move"),
    [setSquad]
  );

  return (
    <ContainerWrapper>
      <PokemonSelection>
        <PokemonList setSelectedPokemon={setSelectedPokemon} />
        {selectedPokemon ? (
          <PokemonDetail name={selectedPokemon} addToSquad={addToSquad} />
        ) : (
          <EmptyState>Select a Pokemon from the list on the left</EmptyState>
        )}
      </PokemonSelection>
      <Squad squad={squad} />
    </ContainerWrapper>
  );
};

export default PokemonContainer;
