import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
  query ProductQuery($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      user {
        id
      }
      status
      photo {
        id
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
