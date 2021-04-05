import { gql } from "@apollo/client";

export const SIGNIN_MUTATION = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
          products {
            id
          }
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
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;
