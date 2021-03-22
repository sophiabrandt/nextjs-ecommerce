import { SignIn, SignUp } from "@/features/authentication";
import { SimpleGrid } from "@chakra-ui/react";

const SignInPage = () => {
  return (
    <SimpleGrid minChildWidth="300px" spacing={16}>
      <SignIn />
      <SignUp />
    </SimpleGrid>
  );
};

export default SignInPage;
