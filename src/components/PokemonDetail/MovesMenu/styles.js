import styled, { css } from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  height: 100%;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const LearnMethodList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LearnMethodListItem = styled.li`
  color: ${props => props.theme.yellow};
  text-transform: uppercase;
  margin-right: 5px;
  font-size: 12px;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      border-bottom: solid 1px ${props.theme.yellow};
    `}
`;

export const MovesList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const MoveListItem = styled.li`
  color: ${props => props.theme.blue};
  cursor: pointer;
  font-size: 12px;
`;
