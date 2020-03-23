import * as React from "react";
import { ListItemWrapper } from "./styles";

const PokemonListItem = ({ name, setSelectedPokemon }) => {
  return (
    <ListItemWrapper onClick={() => setSelectedPokemon(name)}>
      {name}
    </ListItemWrapper>
  );
};

export default PokemonListItem;
