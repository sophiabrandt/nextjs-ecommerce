/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUser
// ====================================================

export interface CurrentUser_authenticatedItem {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface CurrentUser {
  authenticatedItem: CurrentUser_authenticatedItem | null;
}
