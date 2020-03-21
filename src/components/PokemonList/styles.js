import styled from "styled-components";

export const PokemonListWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
  width: 200px;
`;

export const Title = styled.h1`
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 0;
  text-transform: uppercase;
  color: ${props => props.theme.yellow};
`;

export const SearchInput = styled.input`
  border: 2px solid ${props => props.theme.blue};
  text-transform: uppercase;
  width: 100%;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  width: 100%;
`;
