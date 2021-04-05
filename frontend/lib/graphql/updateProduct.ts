import { gql } from "@apollo/client";

export const UPDATE_PRODUCT_MUTATION = gql`
  mutation UpdateProductMutation(
    $id: ID!
    $imageId: ID!
    $name: String
    $description: String
    $price: Int
    $image: Upload
  ) {
    updateProduct(id: $id, data: { name: $name, description: $description, price: $price }) {
      id
      name
      description
      price
    }
    updateProductImage(id: $imageId, data: { image: $image, altText: $name }) {
      id
      altText
      image {
        publicUrlTransformed(transformation: { width: "400", crop: "limit", quality: "auto" })
      }
    }
  }
`;
