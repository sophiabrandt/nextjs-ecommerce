/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUserQuery
// ====================================================

export interface CurrentUserQuery_authenticatedItem_cart_product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface CurrentUserQuery_authenticatedItem_cart_product_photo {
  __typename: "ProductImage";
  image: CurrentUserQuery_authenticatedItem_cart_product_photo_image | null;
}

export interface CurrentUserQuery_authenticatedItem_cart_product {
  __typename: "Product";
  id: string;
  price: number | null;
  name: string | null;
  description: string | null;
  photo: CurrentUserQuery_authenticatedItem_cart_product_photo | null;
}

export interface CurrentUserQuery_authenticatedItem_cart {
  __typename: "CartItem";
  id: string;
  quantity: number | null;
  product: CurrentUserQuery_authenticatedItem_cart_product | null;
}

export interface CurrentUserQuery_authenticatedItem {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
  cart: CurrentUserQuery_authenticatedItem_cart[];
}

export interface CurrentUserQuery {
  authenticatedItem: CurrentUserQuery_authenticatedItem | null;
}
