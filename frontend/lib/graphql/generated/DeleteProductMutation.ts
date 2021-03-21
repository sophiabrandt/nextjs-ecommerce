/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteProductMutation
// ====================================================

export interface DeleteProductMutation_deleteProduct {
  __typename: "Product";
  id: string;
  name: string | null;
}

export interface DeleteProductMutation {
  /**
   *  Delete a single Product item by ID. 
   */
  deleteProduct: DeleteProductMutation_deleteProduct | null;
}

export interface DeleteProductMutationVariables {
  id: string;
}
