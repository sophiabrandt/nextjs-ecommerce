/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PasswordResetRedemptionErrorCode } from "./graphql-global-types";

// ====================================================
// GraphQL mutation operation: ResetMutation
// ====================================================

export interface ResetMutation_redeemUserPasswordResetToken {
  __typename: "RedeemUserPasswordResetTokenResult";
  code: PasswordResetRedemptionErrorCode;
  message: string;
}

export interface ResetMutation {
  redeemUserPasswordResetToken: ResetMutation_redeemUserPasswordResetToken | null;
}

export interface ResetMutationVariables {
  email: string;
  password: string;
  token: string;
}
