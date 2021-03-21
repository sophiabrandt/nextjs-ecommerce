import { gql } from "@apollo/client";

export const PAGINATION_QUERY = gql`
  query PaginationQuery {
    _allProductsMeta {
      count
    }
  }
`;
