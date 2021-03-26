/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pagination
// ====================================================

export interface pagination__allProductsMeta {
  __typename: "_QueryMeta";
  count: number | null;
}

export interface pagination {
  /**
   *  Perform a meta-query on all Product items which match the where clause. 
   */
  _allProductsMeta: pagination__allProductsMeta | null;
}

export interface paginationVariables {
  status?: string | null;
}
