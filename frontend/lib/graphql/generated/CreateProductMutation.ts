/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateProductMutation
// ====================================================

export interface CreateProductMutation_createProduct {
  __typename: "Product";
  id: string;
  price: number | null;
  description: string | null;
  name: string | null;
}

export interface CreateProductMutation {
  /**
   *  Create a single Product item.
   */
  createProduct: CreateProductMutation_createProduct | null;
}

export interface CreateProductMutationVariables {
  name: string;
  description: string;
  price: number;
  image?: any | null;
}
