import * as React from "react";
import {
  MenuWrapper,
  LearnMethodList,
  LearnMethodListItem,
  MovesList,
  MoveListItem
} from "./styles";

const MovesMenu = ({ moves = [], toggleMove }) => {
  const [activeLearnMethod, setActiveLearnMethod] = React.useState();

  const availableLearnMethods = moves.reduce((result, currentMove) => {
    if (!result.includes(currentMove.learnMethod)) {
      result.push(currentMove.learnMethod);
    }
    return result;
  }, []);

  return (
    <MenuWrapper>
      <LearnMethodList>
        {availableLearnMethods.map(method => (
          <LearnMethodListItem
            key={method}
            active={activeLearnMethod === method}
            onClick={() => setActiveLearnMethod(method)}
          >
            {method}
          </LearnMethodListItem>
        ))}
      </LearnMethodList>
      <MovesList>
        {moves
          .filter(move => move.learnMethod === activeLearnMethod)
          .map(move => (
            <MoveListItem key={move.name} onClick={() => toggleMove(move)}>
              {move.name}
            </MoveListItem>
          ))}
      </MovesList>
    </MenuWrapper>
  );
};

export default MovesMenu;
