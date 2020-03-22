import * as React from "react";
import { SquadWrapper, Title, SquadList } from "./styles";
import SquadItem from "./SquadItem";
import { SQUAD_SIZE } from "../../constants";

const Squad = ({ squad = [] }) => {
  const placeholders = new Array(SQUAD_SIZE - squad.length).fill(null);

  return (
    <SquadWrapper>
      <Title>Selected squad</Title>
      <SquadList>
        {[...squad, ...placeholders].slice(0, 6).map((item, index) => (
          <SquadItem
            key={index}
            image={item?.image}
            name={item?.name}
            moves={item?.selectedMoves}
            type={item?.type}
          />
        ))}
      </SquadList>
    </SquadWrapper>
  );
};

export default Squad;
