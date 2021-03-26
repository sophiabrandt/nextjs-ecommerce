import { gql } from "@apollo/client";

export const PAGINATION_QUERY = gql`
  query pagination($status: String = "AVAILABLE") {
    _allProductsMeta(where: { status_in: [$status] }) {
      count
    }
  }
`;
