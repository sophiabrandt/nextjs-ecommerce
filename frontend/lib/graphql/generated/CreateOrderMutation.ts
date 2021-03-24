/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateOrderMutation
// ====================================================

export interface CreateOrderMutation_checkout_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
}

export interface CreateOrderMutation_checkout {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  items: CreateOrderMutation_checkout_items[];
}

export interface CreateOrderMutation {
  checkout: CreateOrderMutation_checkout | null;
}

export interface CreateOrderMutationVariables {
  token: string;
}
