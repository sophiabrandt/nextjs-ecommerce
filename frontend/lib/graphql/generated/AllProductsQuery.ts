/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllProductsQuery
// ====================================================

export interface AllProductsQuery_allProducts_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface AllProductsQuery_allProducts_photo {
  __typename: "ProductImage";
  id: string;
  altText: string | null;
  image: AllProductsQuery_allProducts_photo_image | null;
}

export interface AllProductsQuery_allProducts {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number | null;
  description: string | null;
  status: string | null;
  photo: AllProductsQuery_allProducts_photo | null;
}

export interface AllProductsQuery {
  /**
   *  Search for all Product items which match the where clause. 
   */
  allProducts: (AllProductsQuery_allProducts | null)[] | null;
}

export interface AllProductsQueryVariables {
  skip?: number | null;
  first?: number | null;
  status?: string | null;
}
