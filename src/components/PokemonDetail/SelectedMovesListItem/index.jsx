import * as React from "react";
import { ItemWrapper, LearnMethod, Name } from "./styles";

const SelectedMovesListItem = ({ learnMethod, name }) => {
  return (
    <ItemWrapper>
      <LearnMethod>{learnMethod}</LearnMethod>
      <Name>{name}</Name>
    </ItemWrapper>
  );
};

export default SelectedMovesListItem;
