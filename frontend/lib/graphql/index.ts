import { MutationResult, QueryResult } from "@apollo/client";

export { ALL_PRODUCTS_QUERY } from "./allProducts";
export { CREATE_PRODUCT_MUTATION } from "./createProduct";
export { DELETE_PRODUCT_MUTATION } from "./deleteProduct";
export { PAGINATION_QUERY } from "./pagination";
export { PRODUCT_QUERY } from "./product";
export { UPDATE_PRODUCT_MUTATION } from "./updateProduct";

export type CustomQueryHook<T, R extends QueryResult> = (input: T) => R;
export type CustomMutationHook<T, R extends MutationResult> = (input: T) => R;
