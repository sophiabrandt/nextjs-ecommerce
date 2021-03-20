import { gql } from "@apollo/client";

export const DELETE_PRODUCT_MUTATION = gql`
  mutation DeleteProductMutation($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;
