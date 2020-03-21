import gql from "graphql-tag";

export const GET_POKEMON = gql`
  {
    Pokemon($name: String!) {
      image,
      stats {
        name,
        value,
      },
      types {
        name
      },
      abilities {
        name
      }
    }
  }
`;
