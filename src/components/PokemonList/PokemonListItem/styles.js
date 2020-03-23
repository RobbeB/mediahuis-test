import styled from "styled-components";

export const ListItemWrapper = styled.li`
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.yellow};
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  padding: 7px 14px;
  border-radius: 10px;
  margin: 4px 0;
  width: 100%;
`;
