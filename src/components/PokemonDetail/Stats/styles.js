import styled from "styled-components";

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  text-align: center;
  font-size: 10px;
  margin: 6px 0 3px;
  color: ${props => props.theme.blue};
`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  > li {
    width: 50%;
  }
`;
