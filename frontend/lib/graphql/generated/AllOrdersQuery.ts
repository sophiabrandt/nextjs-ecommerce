/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllOrdersQuery
// ====================================================

export interface AllOrdersQuery_allOrders_user {
  __typename: "User";
  id: string;
}

export interface AllOrdersQuery_allOrders_items_photo_image {
  __typename: "CloudinaryImage_File";
  publicUrlTransformed: string | null;
}

export interface AllOrdersQuery_allOrders_items_photo {
  __typename: "ProductImage";
  id: string;
  altText: string | null;
  image: AllOrdersQuery_allOrders_items_photo_image | null;
}

export interface AllOrdersQuery_allOrders_items {
  __typename: "OrderItem";
  id: string;
  name: string | null;
  description: string | null;
  price: number | null;
  quantity: number | null;
  photo: AllOrdersQuery_allOrders_items_photo | null;
}

export interface AllOrdersQuery_allOrders {
  __typename: "Order";
  id: string;
  charge: string | null;
  total: number | null;
  user: AllOrdersQuery_allOrders_user | null;
  items: AllOrdersQuery_allOrders_items[];
}

export interface AllOrdersQuery {
  /**
   *  Search for all Order items which match the where clause. 
   */
  allOrders: (AllOrdersQuery_allOrders | null)[] | null;
}
