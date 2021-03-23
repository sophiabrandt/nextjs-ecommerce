/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchProductsQuery
// ====================================================

export interface SearchProductsQuery_searchTerms_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface SearchProductsQuery_searchTerms_photo {
  __typename: "ProductImage";
  id: string;
  altText: string | null;
  image: SearchProductsQuery_searchTerms_photo_image | null;
}

export interface SearchProductsQuery_searchTerms {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number | null;
  description: string | null;
  photo: SearchProductsQuery_searchTerms_photo | null;
}

export interface SearchProductsQuery {
  /**
   *  Search for all Product items which match the where clause. 
   */
  searchTerms: (SearchProductsQuery_searchTerms | null)[] | null;
}

export interface SearchProductsQueryVariables {
  searchTerm: string;
}
