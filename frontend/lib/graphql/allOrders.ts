import { gql } from "@apollo/client";

export const ALL_ORDERS_QUERY = gql`
  query AllOrdersQuery {
    allOrders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          id
          altText
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
