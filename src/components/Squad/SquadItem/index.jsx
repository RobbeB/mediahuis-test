import * as React from "react";
import { Placeholder, ItemWrapper, Image, Name, Move } from "./styles";

const SquadItem = ({ image, name, moves, type }) => {
  if (!name) return <Placeholder>empty</Placeholder>;

  return (
    <ItemWrapper type={type.name}>
      <Image src={image} alt={name} />
      <Name>Name</Name>
      {moves?.map(move => (
        <Move key={move.name}>{move.name}</Move>
      ))}
    </ItemWrapper>
  );
};

export default SquadItem;
