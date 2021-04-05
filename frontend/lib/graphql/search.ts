import { gql } from "@apollo/client";

export const SEARCH_PRODUCTS_QUERY = gql`
  query SearchProductsQuery($searchTerm: String!) {
    searchTerms: allProducts(
      where: { OR: [{ name_contains_i: $searchTerm }, { description_contains_i: $searchTerm }] }
    ) {
      id
      name
      price
      description
      photo {
        id
        altText
        image {
          publicUrlTransformed(
            transformation: { width: "50", height: "50", crop: "limit", quality: "100" }
          )
        }
      }
    }
  }
`;
