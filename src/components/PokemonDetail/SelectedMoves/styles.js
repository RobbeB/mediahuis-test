import styled from "styled-components";

export const SelectedMovesWrapper = styled.div`
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

export const SelectedMovesList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > li {
    width: 48%;
  }
`;
