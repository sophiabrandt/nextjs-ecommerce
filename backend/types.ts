/* eslint-disable */
import { KeystoneGraphQLAPI, KeystoneListsAPI } from "@keystone-next/types";

import type { KeystoneListsTypeInfo } from "./.keystone/schema-types";

import type { Permission } from "./schemas/fields";
export type { Permission } from "./schemas/fields";

export type Session = {
  itemId: string;
  listKey: string;
  data: {
    name: string;
    role?: {
      id: string;
      name: string;
    } & {
      [key in Permission]: boolean;
    };
  };
};

export type ListsAPI = KeystoneListsAPI<KeystoneListsTypeInfo>;
export type GraphqlAPI = KeystoneGraphQLAPI<KeystoneListsTypeInfo>;

export type AccessArgs = {
  session?: Session;
  item?: any;
};

export type AccessControl = {
  [key: string]: (args: AccessArgs) => any;
};

export type ListAccessArgs = {
  itemId?: string;
  session?: Session;
};
