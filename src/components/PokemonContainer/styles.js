import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const PokemonSelection = styled.div`
  display: flex;
  height: 254px;
  flex: 1;
`;

export const EmptyState = styled.div`
  color: ${props => props.theme.grey};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
