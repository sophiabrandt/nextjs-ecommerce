/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SignUpMutation
// ====================================================

export interface SignUpMutation_createUser {
  __typename: "User";
  id: string;
  email: string | null;
  name: string | null;
}

export interface SignUpMutation {
  /**
   *  Create a single User item. 
   */
  createUser: SignUpMutation_createUser | null;
}

export interface SignUpMutationVariables {
  email: string;
  name: string;
  password: string;
}
