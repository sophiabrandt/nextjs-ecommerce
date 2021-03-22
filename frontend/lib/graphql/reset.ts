import { gql } from "@apollo/client";

export const RESET_MUTATION = gql`
  mutation ResetMutation($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
      code
      message
    }
  }
`;
