import { gql } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
  query CurrentUserQuery {
    authenticatedItem {
      ... on User {
        id
        email
        name
        products {
          id
        }
        cart {
          id
          quantity
          product {
            id
            price
            name
            description
            photo {
              image {
                publicUrlTransformed(
                  transformation: { width: "400", crop: "limit", quality: "auto" }
                )
              }
            }
          }
        }
      }
    }
  }
`;
