import { gql } from "@apollo/client";

export const ADD_TO_CART_MUTATION = gql`
  mutation AddToCartMutation($id: ID!) {
    addToCart(productId: $id) {
      id
      quantity
      product {
        id
        price
        name
        description
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
