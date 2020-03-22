import styled from "styled-components";

export const Placeholder = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${props => props.theme.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.blue};
  margin: 10px;
`;

export const ItemWrapper = styled.div`
  background-color: ${props =>
    props.theme.typeColors[props.type?.toLowerCase()]};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  color: ${props => props.theme.blue};
  margin: 10px;
`;

export const Image = styled.img`
  width: 96px;
  height: 96px;
`;

export const Name = styled.span`
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 4px;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
`;

export const Move = styled.div`
  width: 100%;
  background-color: ${props => props.theme.white};
  font-size: 10px;
  margin-bottom: 5px;
  padding: 3px;
  border-radius: 5px;
`;
