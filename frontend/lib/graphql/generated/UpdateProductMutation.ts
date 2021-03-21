/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateProductMutation
// ====================================================

export interface UpdateProductMutation_updateProduct {
  __typename: "Product";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
}

export interface UpdateProductMutation_updateProductImage_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface UpdateProductMutation_updateProductImage {
  __typename: "ProductImage";
  id: string;
  altText: string | null;
  image: UpdateProductMutation_updateProductImage_image | null;
}

export interface UpdateProductMutation {
  /**
   *  Update a single Product item by ID. 
   */
  updateProduct: UpdateProductMutation_updateProduct | null;
  /**
   *  Update a single ProductImage item by ID. 
   */
  updateProductImage: UpdateProductMutation_updateProductImage | null;
}

export interface UpdateProductMutationVariables {
  id: string;
  imageId: string;
  name?: string | null;
  description?: string | null;
  price?: number | null;
  image?: any | null;
}
