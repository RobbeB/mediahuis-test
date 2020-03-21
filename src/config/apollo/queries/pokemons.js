import gql from "graphql-tag";

export const GET_POKEMONS = gql`
  {
    Pokemons {
      id
      name
    }
  }
`;
