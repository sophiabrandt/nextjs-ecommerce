/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CurrentUserQuery
// ====================================================

export interface CurrentUserQuery_authenticatedItem {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface CurrentUserQuery {
  authenticatedItem: CurrentUserQuery_authenticatedItem | null;
}
