import { IStyledTheme } from "@/lib/index";
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ApolloError } from "@apollo/client";

const ErrorStyles = styled(Box)<IStyledTheme>`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid ${(props) => props.theme.colors.ui.error};
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

interface MutationError {
  __typename: string;
  code: string;
  message: string;
}

interface IDisplayErrorProps {
  error?: ApolloError | MutationError;
}

export const DisplayError = ({ error }: IDisplayErrorProps) => {
  if (!error || !error.message) return null;
  if (
    error instanceof ApolloError &&
    error.networkError &&
    "result" in error.networkError &&
    error.networkError.result?.errors?.length
  ) {
    return (
      <>
        {error.networkError.result.errors.map((error: Error, i: string) => (
          <ErrorStyles key={i}>
            <p data-test="graphql-error">
              <strong>Shoot!</strong>
              {error.message.replace("GraphQL error: ", "")}
            </p>
          </ErrorStyles>
        ))}
      </>
    );
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Shoot!</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </ErrorStyles>
  );
};
