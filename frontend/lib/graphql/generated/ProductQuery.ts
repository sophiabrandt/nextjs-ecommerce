/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductQuery
// ====================================================

export interface ProductQuery_Product_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface ProductQuery_Product_photo {
  __typename: "ProductImage";
  id: string;
  altText: string | null;
  image: ProductQuery_Product_photo_image | null;
}

export interface ProductQuery_Product {
  __typename: "Product";
  id: string;
  name: string | null;
  price: number | null;
  description: string | null;
  status: string | null;
  photo: ProductQuery_Product_photo | null;
}

export interface ProductQuery {
  /**
   *  Search for the Product item with the matching ID. 
   */
  Product: ProductQuery_Product | null;
}

export interface ProductQueryVariables {
  id: string;
}
