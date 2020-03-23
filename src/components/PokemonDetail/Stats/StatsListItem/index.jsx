import * as React from "react";
import { Name, Value, ItemWrapper } from "./styles";

const StatsListItem = ({ name, value }) => {
  return (
    <ItemWrapper>
      <Name>{name}</Name>
      <Value>{value}</Value>
    </ItemWrapper>
  );
};

export default StatsListItem;
