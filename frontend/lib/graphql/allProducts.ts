import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query AllProductsQuery($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
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
