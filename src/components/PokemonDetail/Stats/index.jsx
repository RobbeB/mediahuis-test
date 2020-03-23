import * as React from "react";
import { StatsWrapper, Title, StatsList } from "./styles";
import StatsListItem from "./StatsListItem";

const Stats = ({ stats = [] }) => {
  return (
    <StatsWrapper>
      <Title>Stats</Title>
      <StatsList>
        {stats.map(stat => (
          <StatsListItem key={stat.name} name={stat.name} value={stat.value} />
        ))}
      </StatsList>
    </StatsWrapper>
  );
};

export default Stats;
