import gql from "graphql-tag";

export const GET_POKEMON = gql`
  query Pokemon($name: String!) {
    Pokemon(name: $name) {
      image
      stats {
        name
        value
      }
      types {
        name
      }
      moves {
        name
        learnMethod
      }
    }
  }
`;
