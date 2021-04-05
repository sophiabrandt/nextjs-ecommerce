import { gql } from "@apollo/client";

export const ORDER_QUERY = gql`
  query OrderQuery($id: ID!) {
    order: Order(where: { id: $id }) {
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
            publicUrlTransformed(transformation: { width: "50", crop: "limit", quality: "auto" })
          }
        }
      }
    }
  }
`;
