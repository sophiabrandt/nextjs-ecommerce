/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrderQuery
// ====================================================

export interface OrderQuery_order_user {
  __typename: "User";
  id: string;
}

export interface OrderQuery_order_items_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface OrderQuery_order_items_photo {
  __typename: "ProductImage";
  id: string;
  altText: string | null;
  image: OrderQuery_order_items_photo_image | null;
}

export interface OrderQuery_order_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  quantity: number | null;
  photo: OrderQuery_order_items_photo | null;
}

export interface OrderQuery_order {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  user: OrderQuery_order_user | null;
  items: OrderQuery_order_items[];
}

export interface OrderQuery {
  /**
   *  Search for the Order item with the matching ID. 
   */
  order: OrderQuery_order | null;
}

export interface OrderQueryVariables {
  id: string;
}
