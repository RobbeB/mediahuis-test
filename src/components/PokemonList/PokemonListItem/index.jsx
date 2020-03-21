import * as React from "react";
import { ListItemWrapper } from "./styles";

const PokemonListItem = ({ name }) => {
  return <ListItemWrapper>{name}</ListItemWrapper>;
};

export default PokemonListItem;
