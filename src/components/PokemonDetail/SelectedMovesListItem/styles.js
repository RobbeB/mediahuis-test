import styled from "styled-components";

export const ItemWrapper = styled.li`
  border: 1px solid ${props => props.theme.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px 8px;
`;

export const LearnMethod = styled.span`
  color: ${props => props.theme.yellow};
  text-transform: uppercase;
  font-size: 10px;
`;

export const Name = styled.span`
  color: ${props => props.theme.blue};
  text-transform: capitalize;
`;
