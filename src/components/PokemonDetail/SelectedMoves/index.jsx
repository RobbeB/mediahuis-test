import * as React from "react";
import { SelectedMovesWrapper, Title, SelectedMovesList } from "./styles";
import SelectedMovesListItem from "../SelectedMovesListItem";

const SelectedMoves = ({ selectedMoves = [] }) => {
  return (
    <SelectedMovesWrapper>
      <Title>Selected moves</Title>
      <SelectedMovesList>
        {selectedMoves.map(move => (
          <SelectedMovesListItem
            key={move.name}
            name={move.name}
            learnMethod={move.learnMethod}
          />
        ))}
      </SelectedMovesList>
    </SelectedMovesWrapper>
  );
};

export default SelectedMoves;
