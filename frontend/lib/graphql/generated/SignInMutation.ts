/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordAuthErrorCode } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: SignInMutation
// ====================================================

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_products {
  __typename: "Product";
  id: string;
}

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_cart_product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_cart_product_photo {
  __typename: "ProductImage";
  image: SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_cart_product_photo_image | null;
}

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_cart_product {
  __typename: "Product";
  id: string;
  price: number | null;
  name: string | null;
  description: string | null;
  photo: SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_cart_product_photo | null;
}

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_cart {
  __typename: "CartItem";
  id: string;
  quantity: number | null;
  product: SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_cart_product | null;
}

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
  products: SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_products[];
  cart: SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item_cart[];
}

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess {
  __typename: "UserAuthenticationWithPasswordSuccess";
  item: SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess_item;
}

export interface SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure {
  __typename: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
  message: string;
}

export type SignInMutation_authenticateUserWithPassword = SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordSuccess | SignInMutation_authenticateUserWithPassword_UserAuthenticationWithPasswordFailure;

export interface SignInMutation {
  authenticateUserWithPassword: SignInMutation_authenticateUserWithPassword;
}

export interface SignInMutationVariables {
  email: string;
  password: string;
}
