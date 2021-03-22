import { RequestReset, Reset } from "@/features/authentication";
import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";
import { GetServerSideProps, NextPage } from "next";

interface IResetPageProps {
  token?: string;
}

const ResetPage: NextPage<IResetPageProps> = ({ token }) => {
  if (!token) {
    return (
      <>
        <Alert mt={8} mb={8} status="error">
          <AlertIcon />
          <AlertTitle mr={2}>Reset token missing!</AlertTitle>
          <AlertDescription>Please request a token.</AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
        <RequestReset />
      </>
    );
  }

  return (
    <div>
      <Reset token={token} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query?.token) {
    return {
      props: {
        token: query.token,
      },
    };
  }
  return {
    props: {},
  };
};

export default ResetPage;
