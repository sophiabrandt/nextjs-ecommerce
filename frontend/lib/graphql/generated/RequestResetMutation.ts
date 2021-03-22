/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordResetRequestErrorCode } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: RequestResetMutation
// ====================================================

export interface RequestResetMutation_sendUserPasswordResetLink {
  __typename: "SendUserPasswordResetLinkResult";
  code: PasswordResetRequestErrorCode;
  message: string;
}

export interface RequestResetMutation {
  sendUserPasswordResetLink: RequestResetMutation_sendUserPasswordResetLink | null;
}

export interface RequestResetMutationVariables {
  email: string;
}
