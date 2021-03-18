import { gql } from "@apollo/client";
import { Product as ProductsType } from "@/lib/graphql/allProducts.graphql";

export interface IProduct {
  product: ProductsType;
}

export interface IAllProducts {
  allProducts: ProductsType[];
}

export const PRODUCT_QUERY = gql`
  query product($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export const ALL_PRODUCTS_QUERY = gql`
  query allProducts {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
