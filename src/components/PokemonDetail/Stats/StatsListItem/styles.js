import styled from "styled-components";

export const ItemWrapper = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Name = styled.span`
  color: ${props => props.theme.yellow};
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 5px;
`;

export const Value = styled.span`
  font-size: 30px;
  color: ${props => props.theme.blue};
`;
