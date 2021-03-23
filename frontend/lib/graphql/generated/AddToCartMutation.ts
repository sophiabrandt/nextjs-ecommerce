/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddToCartMutation
// ====================================================

export interface AddToCartMutation_addToCart_product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface AddToCartMutation_addToCart_product_photo {
  __typename: "ProductImage";
  image: AddToCartMutation_addToCart_product_photo_image | null;
}

export interface AddToCartMutation_addToCart_product {
  __typename: "Product";
  id: string;
  price: number | null;
  name: string | null;
  description: string | null;
  photo: AddToCartMutation_addToCart_product_photo | null;
}

export interface AddToCartMutation_addToCart {
  __typename: "CartItem";
  id: string;
  quantity: number | null;
  product: AddToCartMutation_addToCart_product | null;
}

export interface AddToCartMutation {
  addToCart: AddToCartMutation_addToCart | null;
}

export interface AddToCartMutationVariables {
  id: string;
}
