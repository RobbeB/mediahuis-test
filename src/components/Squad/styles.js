import styled from "styled-components";

export const SquadWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  height: 250px;
`;

export const Title = styled.h1`
  font-size: 15px;
  color: ${props => props.theme.yellow};
  text-transform: uppercase;
  margin-bottom: 8px;
  text-align: center;
`;

export const SquadList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
