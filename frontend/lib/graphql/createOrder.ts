import { gql } from "@apollo/client";

export const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`;
