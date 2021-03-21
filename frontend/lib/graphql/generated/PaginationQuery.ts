/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PaginationQuery
// ====================================================

export interface PaginationQuery__allProductsMeta {
  __typename: "_QueryMeta";
  count: number | null;
}

export interface PaginationQuery {
  /**
   *  Perform a meta-query on all Product items which match the where clause. 
   */
  _allProductsMeta: PaginationQuery__allProductsMeta | null;
}
