/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveFromCartMutation
// ====================================================

export interface RemoveFromCartMutation_deleteCartItem {
  __typename: "CartItem";
  id: string;
}

export interface RemoveFromCartMutation {
  /**
   *  Delete a single CartItem item by ID. 
   */
  deleteCartItem: RemoveFromCartMutation_deleteCartItem | null;
}

export interface RemoveFromCartMutationVariables {
  id: string;
}
