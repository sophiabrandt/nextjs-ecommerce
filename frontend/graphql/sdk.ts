import { GraphQLClient } from "graphql-request";
import * as Dom from "graphql-request/dist/types.dom";
import gql from "graphql-tag";
import { ClientError } from "graphql-request/dist/types";
import useSWR, {
  ConfigInterface as SWRConfigInterface,
  keyInterface as SWRKeyInterface,
} from "swr";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

/**  A keystone list  */
export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  password_is_set?: Maybe<Scalars["Boolean"]>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<Maybe<UserWhereInput>>>;
  OR?: Maybe<Array<Maybe<UserWhereInput>>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  name_i?: Maybe<Scalars["String"]>;
  name_not_i?: Maybe<Scalars["String"]>;
  name_contains_i?: Maybe<Scalars["String"]>;
  name_not_contains_i?: Maybe<Scalars["String"]>;
  name_starts_with_i?: Maybe<Scalars["String"]>;
  name_not_starts_with_i?: Maybe<Scalars["String"]>;
  name_ends_with_i?: Maybe<Scalars["String"]>;
  name_not_ends_with_i?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  email?: Maybe<Scalars["String"]>;
  email_not?: Maybe<Scalars["String"]>;
  email_contains?: Maybe<Scalars["String"]>;
  email_not_contains?: Maybe<Scalars["String"]>;
  email_starts_with?: Maybe<Scalars["String"]>;
  email_not_starts_with?: Maybe<Scalars["String"]>;
  email_ends_with?: Maybe<Scalars["String"]>;
  email_not_ends_with?: Maybe<Scalars["String"]>;
  email_i?: Maybe<Scalars["String"]>;
  email_not_i?: Maybe<Scalars["String"]>;
  email_contains_i?: Maybe<Scalars["String"]>;
  email_not_contains_i?: Maybe<Scalars["String"]>;
  email_starts_with_i?: Maybe<Scalars["String"]>;
  email_not_starts_with_i?: Maybe<Scalars["String"]>;
  email_ends_with_i?: Maybe<Scalars["String"]>;
  email_not_ends_with_i?: Maybe<Scalars["String"]>;
  email_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  password_is_set?: Maybe<Scalars["Boolean"]>;
};

export type UserWhereUniqueInput = {
  id: Scalars["ID"];
};

export enum SortUsersBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
}

export type UserUpdateInput = {
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type UsersUpdateInput = {
  id: Scalars["ID"];
  data?: Maybe<UserUpdateInput>;
};

export type UserCreateInput = {
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type ProductImageRelateToOneInput = {
  create?: Maybe<ProductImageCreateInput>;
  connect?: Maybe<ProductImageWhereUniqueInput>;
  disconnect?: Maybe<ProductImageWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars["Boolean"]>;
};

/**  A keystone list  */
export type Product = {
  __typename?: "Product";
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  photo?: Maybe<ProductImage>;
  status?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<Maybe<ProductWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductWhereInput>>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  name_starts_with?: Maybe<Scalars["String"]>;
  name_not_starts_with?: Maybe<Scalars["String"]>;
  name_ends_with?: Maybe<Scalars["String"]>;
  name_not_ends_with?: Maybe<Scalars["String"]>;
  name_i?: Maybe<Scalars["String"]>;
  name_not_i?: Maybe<Scalars["String"]>;
  name_contains_i?: Maybe<Scalars["String"]>;
  name_not_contains_i?: Maybe<Scalars["String"]>;
  name_starts_with_i?: Maybe<Scalars["String"]>;
  name_not_starts_with_i?: Maybe<Scalars["String"]>;
  name_ends_with_i?: Maybe<Scalars["String"]>;
  name_not_ends_with_i?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  description_starts_with?: Maybe<Scalars["String"]>;
  description_not_starts_with?: Maybe<Scalars["String"]>;
  description_ends_with?: Maybe<Scalars["String"]>;
  description_not_ends_with?: Maybe<Scalars["String"]>;
  description_i?: Maybe<Scalars["String"]>;
  description_not_i?: Maybe<Scalars["String"]>;
  description_contains_i?: Maybe<Scalars["String"]>;
  description_not_contains_i?: Maybe<Scalars["String"]>;
  description_starts_with_i?: Maybe<Scalars["String"]>;
  description_not_starts_with_i?: Maybe<Scalars["String"]>;
  description_ends_with_i?: Maybe<Scalars["String"]>;
  description_not_ends_with_i?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  photo?: Maybe<ProductImageWhereInput>;
  photo_is_null?: Maybe<Scalars["Boolean"]>;
  status?: Maybe<Scalars["String"]>;
  status_not?: Maybe<Scalars["String"]>;
  status_contains?: Maybe<Scalars["String"]>;
  status_not_contains?: Maybe<Scalars["String"]>;
  status_starts_with?: Maybe<Scalars["String"]>;
  status_not_starts_with?: Maybe<Scalars["String"]>;
  status_ends_with?: Maybe<Scalars["String"]>;
  status_not_ends_with?: Maybe<Scalars["String"]>;
  status_i?: Maybe<Scalars["String"]>;
  status_not_i?: Maybe<Scalars["String"]>;
  status_contains_i?: Maybe<Scalars["String"]>;
  status_not_contains_i?: Maybe<Scalars["String"]>;
  status_starts_with_i?: Maybe<Scalars["String"]>;
  status_not_starts_with_i?: Maybe<Scalars["String"]>;
  status_ends_with_i?: Maybe<Scalars["String"]>;
  status_not_ends_with_i?: Maybe<Scalars["String"]>;
  status_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  status_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  price?: Maybe<Scalars["Int"]>;
  price_not?: Maybe<Scalars["Int"]>;
  price_lt?: Maybe<Scalars["Int"]>;
  price_lte?: Maybe<Scalars["Int"]>;
  price_gt?: Maybe<Scalars["Int"]>;
  price_gte?: Maybe<Scalars["Int"]>;
  price_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  price_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
};

export type ProductWhereUniqueInput = {
  id: Scalars["ID"];
};

export enum SortProductsBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  PhotoAsc = "photo_ASC",
  PhotoDesc = "photo_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
}

export type ProductUpdateInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  status?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
};

export type ProductsUpdateInput = {
  id: Scalars["ID"];
  data?: Maybe<ProductUpdateInput>;
};

export type ProductCreateInput = {
  name?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  photo?: Maybe<ProductImageRelateToOneInput>;
  status?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
};

export type ProductsCreateInput = {
  data?: Maybe<ProductCreateInput>;
};

export type CloudinaryImage_File = {
  __typename?: "CloudinaryImage_File";
  id?: Maybe<Scalars["ID"]>;
  path?: Maybe<Scalars["String"]>;
  filename?: Maybe<Scalars["String"]>;
  originalFilename?: Maybe<Scalars["String"]>;
  mimetype?: Maybe<Scalars["String"]>;
  encoding?: Maybe<Scalars["String"]>;
  publicUrl?: Maybe<Scalars["String"]>;
  publicUrlTransformed?: Maybe<Scalars["String"]>;
};

export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: Maybe<CloudinaryImageFormat>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.`  */
  prettyName?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["String"]>;
  height?: Maybe<Scalars["String"]>;
  crop?: Maybe<Scalars["String"]>;
  aspect_ratio?: Maybe<Scalars["String"]>;
  gravity?: Maybe<Scalars["String"]>;
  zoom?: Maybe<Scalars["String"]>;
  x?: Maybe<Scalars["String"]>;
  y?: Maybe<Scalars["String"]>;
  format?: Maybe<Scalars["String"]>;
  fetch_format?: Maybe<Scalars["String"]>;
  quality?: Maybe<Scalars["String"]>;
  radius?: Maybe<Scalars["String"]>;
  angle?: Maybe<Scalars["String"]>;
  effect?: Maybe<Scalars["String"]>;
  opacity?: Maybe<Scalars["String"]>;
  border?: Maybe<Scalars["String"]>;
  background?: Maybe<Scalars["String"]>;
  overlay?: Maybe<Scalars["String"]>;
  underlay?: Maybe<Scalars["String"]>;
  default_image?: Maybe<Scalars["String"]>;
  delay?: Maybe<Scalars["String"]>;
  color?: Maybe<Scalars["String"]>;
  color_space?: Maybe<Scalars["String"]>;
  dpr?: Maybe<Scalars["String"]>;
  page?: Maybe<Scalars["String"]>;
  density?: Maybe<Scalars["String"]>;
  flags?: Maybe<Scalars["String"]>;
  transformation?: Maybe<Scalars["String"]>;
};

export type ProductRelateToOneInput = {
  create?: Maybe<ProductCreateInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<ProductWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars["Boolean"]>;
};

/**  A keystone list  */
export type ProductImage = {
  __typename?: "ProductImage";
  id: Scalars["ID"];
  image?: Maybe<CloudinaryImage_File>;
  altText?: Maybe<Scalars["String"]>;
  product?: Maybe<Product>;
};

export type ProductImageWhereInput = {
  AND?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  OR?: Maybe<Array<Maybe<ProductImageWhereInput>>>;
  id?: Maybe<Scalars["ID"]>;
  id_not?: Maybe<Scalars["ID"]>;
  id_in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  image?: Maybe<Scalars["String"]>;
  image_not?: Maybe<Scalars["String"]>;
  image_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  image_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  altText?: Maybe<Scalars["String"]>;
  altText_not?: Maybe<Scalars["String"]>;
  altText_contains?: Maybe<Scalars["String"]>;
  altText_not_contains?: Maybe<Scalars["String"]>;
  altText_starts_with?: Maybe<Scalars["String"]>;
  altText_not_starts_with?: Maybe<Scalars["String"]>;
  altText_ends_with?: Maybe<Scalars["String"]>;
  altText_not_ends_with?: Maybe<Scalars["String"]>;
  altText_i?: Maybe<Scalars["String"]>;
  altText_not_i?: Maybe<Scalars["String"]>;
  altText_contains_i?: Maybe<Scalars["String"]>;
  altText_not_contains_i?: Maybe<Scalars["String"]>;
  altText_starts_with_i?: Maybe<Scalars["String"]>;
  altText_not_starts_with_i?: Maybe<Scalars["String"]>;
  altText_ends_with_i?: Maybe<Scalars["String"]>;
  altText_not_ends_with_i?: Maybe<Scalars["String"]>;
  altText_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  altText_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  product?: Maybe<ProductWhereInput>;
  product_is_null?: Maybe<Scalars["Boolean"]>;
};

export type ProductImageWhereUniqueInput = {
  id: Scalars["ID"];
};

export enum SortProductImagesBy {
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  AltTextAsc = "altText_ASC",
  AltTextDesc = "altText_DESC",
  ProductAsc = "product_ASC",
  ProductDesc = "product_DESC",
}

export type ProductImageUpdateInput = {
  image?: Maybe<Scalars["Upload"]>;
  altText?: Maybe<Scalars["String"]>;
  product?: Maybe<ProductRelateToOneInput>;
};

export type ProductImagesUpdateInput = {
  id: Scalars["ID"];
  data?: Maybe<ProductImageUpdateInput>;
};

export type ProductImageCreateInput = {
  image?: Maybe<Scalars["Upload"]>;
  altText?: Maybe<Scalars["String"]>;
  product?: Maybe<ProductRelateToOneInput>;
};

export type ProductImagesCreateInput = {
  data?: Maybe<ProductImageCreateInput>;
};

export type _ListAccess = {
  __typename?: "_ListAccess";
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'create' operations.
   * NOTE: 'create' can only return a Boolean.
   * It is not possible to specify a declarative Where clause for this
   * operation
   */
  create?: Maybe<Scalars["Boolean"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'read' operations.
   */
  read?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'update' operations.
   */
  update?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'delete' operations.
   */
  delete?: Maybe<Scalars["JSON"]>;
  /**
   * Access Control settings for the currently logged in (or anonymous)
   * user when performing 'auth' operations.
   */
  auth?: Maybe<Scalars["JSON"]>;
};

export type _ListQueries = {
  __typename?: "_ListQueries";
  /** Single-item query name */
  item?: Maybe<Scalars["String"]>;
  /** All-items query name */
  list?: Maybe<Scalars["String"]>;
  /** List metadata query name */
  meta?: Maybe<Scalars["String"]>;
};

export type _ListMutations = {
  __typename?: "_ListMutations";
  /** Create mutation name */
  create?: Maybe<Scalars["String"]>;
  /** Create many mutation name */
  createMany?: Maybe<Scalars["String"]>;
  /** Update mutation name */
  update?: Maybe<Scalars["String"]>;
  /** Update many mutation name */
  updateMany?: Maybe<Scalars["String"]>;
  /** Delete mutation name */
  delete?: Maybe<Scalars["String"]>;
  /** Delete many mutation name */
  deleteMany?: Maybe<Scalars["String"]>;
};

export type _ListInputTypes = {
  __typename?: "_ListInputTypes";
  /** Input type for matching multiple items */
  whereInput?: Maybe<Scalars["String"]>;
  /** Input type for matching a unique item */
  whereUniqueInput?: Maybe<Scalars["String"]>;
  /** Create mutation input type name */
  createInput?: Maybe<Scalars["String"]>;
  /** Create many mutation input type name */
  createManyInput?: Maybe<Scalars["String"]>;
  /** Update mutation name input */
  updateInput?: Maybe<Scalars["String"]>;
  /** Update many mutation name input */
  updateManyInput?: Maybe<Scalars["String"]>;
};

export type _ListSchemaFields = {
  __typename?: "_ListSchemaFields";
  /** The path of the field in its list */
  path?: Maybe<Scalars["String"]>;
  /**
   * The name of the field in its list
   * @deprecated Use `path` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The field type (ie, Checkbox, Text, etc) */
  type?: Maybe<Scalars["String"]>;
};

export type _ListSchemaRelatedFields = {
  __typename?: "_ListSchemaRelatedFields";
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
  /** A list of GraphQL field names */
  fields?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type _ListSchema = {
  __typename?: "_ListSchema";
  /** The typename as used in GraphQL queries */
  type?: Maybe<Scalars["String"]>;
  /**
   * Top level GraphQL query names which either return this type, or
   * provide aggregate information about this type
   */
  queries?: Maybe<_ListQueries>;
  /** Top-level GraphQL mutation names */
  mutations?: Maybe<_ListMutations>;
  /** Top-level GraphQL input types */
  inputTypes?: Maybe<_ListInputTypes>;
  /** Information about fields defined on this list */
  fields?: Maybe<Array<Maybe<_ListSchemaFields>>>;
  /**
   * Information about fields on other types which return this type, or
   * provide aggregate information about this type
   */
  relatedFields?: Maybe<Array<Maybe<_ListSchemaRelatedFields>>>;
};

export type _ListSchemaFieldsArgs = {
  where?: Maybe<_ListSchemaFieldsInput>;
};

export type _ListMeta = {
  __typename?: "_ListMeta";
  /** The Keystone list key */
  key?: Maybe<Scalars["String"]>;
  /**
   * The Keystone List name
   * @deprecated Use `key` instead
   */
  name?: Maybe<Scalars["String"]>;
  /** The list's user-facing description */
  description?: Maybe<Scalars["String"]>;
  /** The list's display name in the Admin UI */
  label?: Maybe<Scalars["String"]>;
  /** The list's singular display name */
  singular?: Maybe<Scalars["String"]>;
  /** The list's plural display name */
  plural?: Maybe<Scalars["String"]>;
  /** The list's data path */
  path?: Maybe<Scalars["String"]>;
  /** Access control configuration for the currently authenticated request */
  access?: Maybe<_ListAccess>;
  /** Information on the generated GraphQL schema */
  schema?: Maybe<_ListSchema>;
};

export type _QueryMeta = {
  __typename?: "_QueryMeta";
  count?: Maybe<Scalars["Int"]>;
};

export type _KsListsMetaInput = {
  key?: Maybe<Scalars["String"]>;
  /** Whether this is an auxiliary helper list */
  auxiliary?: Maybe<Scalars["Boolean"]>;
};

export type _ListSchemaFieldsInput = {
  type?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single ProductImage item.  */
  createProductImage?: Maybe<ProductImage>;
  /**  Create multiple ProductImage items.  */
  createProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Update a single ProductImage item by ID.  */
  updateProductImage?: Maybe<ProductImage>;
  /**  Update multiple ProductImage items by ID.  */
  updateProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Delete a single ProductImage item by ID.  */
  deleteProductImage?: Maybe<ProductImage>;
  /**  Delete multiple ProductImage items by ID.  */
  deleteProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  endSession: Scalars["Boolean"];
};

export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};

export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};

export type MutationUpdateUserArgs = {
  id: Scalars["ID"];
  data?: Maybe<UserUpdateInput>;
};

export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars["ID"]>>;
};

export type MutationCreateProductArgs = {
  data?: Maybe<ProductCreateInput>;
};

export type MutationCreateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsCreateInput>>>;
};

export type MutationUpdateProductArgs = {
  id: Scalars["ID"];
  data?: Maybe<ProductUpdateInput>;
};

export type MutationUpdateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsUpdateInput>>>;
};

export type MutationDeleteProductArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteProductsArgs = {
  ids?: Maybe<Array<Scalars["ID"]>>;
};

export type MutationCreateProductImageArgs = {
  data?: Maybe<ProductImageCreateInput>;
};

export type MutationCreateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesCreateInput>>>;
};

export type MutationUpdateProductImageArgs = {
  id: Scalars["ID"];
  data?: Maybe<ProductImageUpdateInput>;
};

export type MutationUpdateProductImagesArgs = {
  data?: Maybe<Array<Maybe<ProductImagesUpdateInput>>>;
};

export type MutationDeleteProductImageArgs = {
  id: Scalars["ID"];
};

export type MutationDeleteProductImagesArgs = {
  ids?: Maybe<Array<Scalars["ID"]>>;
};

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};

export type AuthenticatedItem = User;

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordSuccess
  | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: "UserAuthenticationWithPasswordSuccess";
  sessionToken: Scalars["String"];
  item: User;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: "UserAuthenticationWithPasswordFailure";
  code: PasswordAuthErrorCode;
  message: Scalars["String"];
};

export enum PasswordAuthErrorCode {
  Failure = "FAILURE",
  IdentityNotFound = "IDENTITY_NOT_FOUND",
  SecretNotSet = "SECRET_NOT_SET",
  MultipleIdentityMatches = "MULTIPLE_IDENTITY_MATCHES",
  SecretMismatch = "SECRET_MISMATCH",
}

export type CreateInitialUserInput = {
  name?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  password?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<Maybe<User>>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**  Perform a meta-query on all User items which match the where clause.  */
  _allUsersMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the User list.  */
  _UsersMeta?: Maybe<_ListMeta>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**  Perform a meta-query on all Product items which match the where clause.  */
  _allProductsMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the Product list.  */
  _ProductsMeta?: Maybe<_ListMeta>;
  /**  Search for all ProductImage items which match the where clause.  */
  allProductImages?: Maybe<Array<Maybe<ProductImage>>>;
  /**  Search for the ProductImage item with the matching ID.  */
  ProductImage?: Maybe<ProductImage>;
  /**  Perform a meta-query on all ProductImage items which match the where clause.  */
  _allProductImagesMeta?: Maybe<_QueryMeta>;
  /**  Retrieve the meta-data for the ProductImage list.  */
  _ProductImagesMeta?: Maybe<_ListMeta>;
  /**  Retrieve the meta-data for all lists.  */
  _ksListsMeta?: Maybe<Array<Maybe<_ListMeta>>>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};

export type QueryAllUsersArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type Query_AllUsersMetaArgs = {
  where?: Maybe<UserWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<Array<SortUsersBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllProductsArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};

export type Query_AllProductsMetaArgs = {
  where?: Maybe<ProductWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<Array<SortProductsBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryAllProductImagesArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type QueryProductImageArgs = {
  where: ProductImageWhereUniqueInput;
};

export type Query_AllProductImagesMetaArgs = {
  where?: Maybe<ProductImageWhereInput>;
  search?: Maybe<Scalars["String"]>;
  sortBy?: Maybe<Array<SortProductImagesBy>>;
  orderBy?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  skip?: Maybe<Scalars["Int"]>;
};

export type Query_KsListsMetaArgs = {
  where?: Maybe<_KsListsMetaInput>;
};

export type KeystoneMeta = {
  __typename?: "KeystoneMeta";
  adminMeta: KeystoneAdminMeta;
};

export type KeystoneAdminMeta = {
  __typename?: "KeystoneAdminMeta";
  enableSignout: Scalars["Boolean"];
  enableSessionItem: Scalars["Boolean"];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};

export type KeystoneAdminMetaListArgs = {
  key: Scalars["String"];
};

export type KeystoneAdminUiListMeta = {
  __typename?: "KeystoneAdminUIListMeta";
  key: Scalars["String"];
  itemQueryName: Scalars["String"];
  listQueryName: Scalars["String"];
  hideCreate: Scalars["Boolean"];
  hideDelete: Scalars["Boolean"];
  path: Scalars["String"];
  label: Scalars["String"];
  singular: Scalars["String"];
  plural: Scalars["String"];
  description?: Maybe<Scalars["String"]>;
  initialColumns: Array<Scalars["String"]>;
  pageSize: Scalars["Int"];
  labelField: Scalars["String"];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars["Boolean"];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: "KeystoneAdminUIFieldMeta";
  path: Scalars["String"];
  label: Scalars["String"];
  isOrderable: Scalars["Boolean"];
  fieldMeta?: Maybe<Scalars["JSON"]>;
  viewsIndex: Scalars["Int"];
  customViewsIndex?: Maybe<Scalars["Int"]>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars["ID"];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: "KeystoneAdminUIFieldMetaCreateView";
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = "edit",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: "KeystoneAdminUIFieldMetaListView";
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = "read",
  Hidden = "hidden",
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: "KeystoneAdminUIFieldMetaItemView";
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = "edit",
  Read = "read",
  Hidden = "hidden",
}

export type KeystoneAdminUiSort = {
  __typename?: "KeystoneAdminUISort";
  field: Scalars["String"];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = "ASC",
  Desc = "DESC",
}

export type AllProductsQueryVariables = Exact<{ [key: string]: never }>;

export type AllProductsQuery = { __typename?: "Query" } & {
  allProducts?: Maybe<
    Array<
      Maybe<
        { __typename?: "Product" } & Pick<Product, "id" | "name" | "price" | "description"> & {
            photo?: Maybe<
              { __typename?: "ProductImage" } & Pick<ProductImage, "id"> & {
                  image?: Maybe<
                    { __typename?: "CloudinaryImage_File" } & Pick<
                      CloudinaryImage_File,
                      "publicUrlTransformed"
                    >
                  >;
                }
            >;
          }
      >
    >
  >;
};

export type SingleProductQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type SingleProductQuery = { __typename?: "Query" } & {
  Product?: Maybe<
    { __typename?: "Product" } & Pick<Product, "name" | "price" | "description"> & {
        photo?: Maybe<
          { __typename?: "ProductImage" } & Pick<ProductImage, "altText"> & {
              image?: Maybe<
                { __typename?: "CloudinaryImage_File" } & Pick<
                  CloudinaryImage_File,
                  "publicUrlTransformed"
                >
              >;
            }
        >;
      }
  >;
};

export const AllProductsDocument = gql`
  query allProducts {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
export const SingleProductDocument = gql`
  query singleProduct($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    allProducts(
      variables?: AllProductsQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<AllProductsQuery> {
      return withWrapper(() =>
        client.request<AllProductsQuery>(AllProductsDocument, variables, requestHeaders)
      );
    },
    singleProduct(
      variables: SingleProductQueryVariables,
      requestHeaders?: Dom.RequestInit["headers"]
    ): Promise<SingleProductQuery> {
      return withWrapper(() =>
        client.request<SingleProductQuery>(SingleProductDocument, variables, requestHeaders)
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export function getSdkWithHooks(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  const sdk = getSdk(client, withWrapper);
  return {
    ...sdk,
    useAllProducts(
      key: SWRKeyInterface,
      variables?: AllProductsQueryVariables,
      config?: SWRConfigInterface<AllProductsQuery, ClientError>
    ) {
      return useSWR<AllProductsQuery, ClientError>(key, () => sdk.allProducts(variables), config);
    },
    useSingleProduct(
      key: SWRKeyInterface,
      variables: SingleProductQueryVariables,
      config?: SWRConfigInterface<SingleProductQuery, ClientError>
    ) {
      return useSWR<SingleProductQuery, ClientError>(
        key,
        () => sdk.singleProduct(variables),
        config
      );
    },
  };
}
export type SdkWithHooks = ReturnType<typeof getSdkWithHooks>;
