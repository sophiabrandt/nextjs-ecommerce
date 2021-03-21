import { DisplayError } from "@/components/index";
import { SignInMutation, SignInMutationVariables } from "@/generated/SignInMutation";
import { CURRENT_USER_QUERY, SIGNIN_MUTATION } from "@/graphql/index";
import { useMutation } from "@apollo/client";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Progress,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface IFormData {
  email: string;
  password: string;
}

export const SignIn = () => {
  const router = useRouter();
  const { register, handleSubmit, errors, formState } = useForm<IFormData>();
  const [signin, { data, loading, error }] = useMutation<SignInMutation, SignInMutationVariables>(
    SIGNIN_MUTATION
  );

  const onSubmit = async (inputData: IFormData) => {
    const { data } = await signin({
      variables: {
        email: inputData.email,
        password: inputData.password,
      },
      update(cache, { data }) {
        const user = data?.authenticateUserWithPassword;
        // is authentication successful?
        if (user?.__typename === "UserAuthenticationWithPasswordSuccess") {
          const authenticatedUser = user.item;
          cache.writeQuery({
            query: CURRENT_USER_QUERY,
            data: {
              authenticatedItem: authenticatedUser,
            },
          });
        }
      },
    });

    // go back to previous page after sucessful login
    if (
      data?.authenticateUserWithPassword?.__typename === "UserAuthenticationWithPasswordSuccess"
    ) {
      router.back();
    }
  };
  // did authentication fail?
  const authenticationError =
    data?.authenticateUserWithPassword.__typename === "UserAuthenticationWithPasswordFailure"
      ? data?.authenticateUserWithPassword
      : undefined;

  return (
    <Container>
      <Heading mb={4} as="h3">
        Sign Into Your Account
      </Heading>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <DisplayError error={error || authenticationError} />
        <Progress mb={4} colorScheme="facebook" isIndeterminate={formState.isSubmitting} />
        <fieldset disabled={loading} aria-busy={loading}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel m="0" htmlFor="email">
              Email
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                ref={register({
                  required: "Please enter a valid email address",
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel m="0" htmlFor="password">
              Password
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                ref={register({
                  required: "Please enter a password",
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>
          <Button mt={4} colorScheme="whatsapp" isDisabled={loading} type="submit">
            <CheckIcon mr={2} />
            Sign In
          </Button>
        </fieldset>
      </form>
    </Container>
  );
};
