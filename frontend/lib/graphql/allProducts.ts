import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery {
    allProducts {
      id
      name
      price
      description
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
