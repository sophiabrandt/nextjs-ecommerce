import { gql } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
  query CurrentUserQuery {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`;
