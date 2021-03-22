import { RequestReset, SignIn, SignUp } from "@/features/authentication";
import { SimpleGrid } from "@chakra-ui/react";
import { NextPage } from "next";

const SignInPage: NextPage = () => {
  return (
    <SimpleGrid minChildWidth="300px" spacing={16}>
      <SignIn />
      <SignUp />
      <RequestReset />
    </SimpleGrid>
  );
};

export default SignInPage;
