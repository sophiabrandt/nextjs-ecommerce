import { gql } from "@apollo/client";

export const REQUEST_RESET_MUTATION = gql`
  mutation RequestResetMutation($email: String!) {
    sendUserPasswordResetLink(email: $email) {
      code
      message
    }
  }
`;
