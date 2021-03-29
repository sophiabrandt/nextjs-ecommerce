import { DisplayError } from "@/components/index";
import { SignUpMutation, SignUpMutationVariables } from "@/generated/SignUpMutation";
import { SIGNUP_MUTATION } from "@/graphql/index";
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
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface IFormData {
  name: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const toast = useToast();
  const { register, handleSubmit, errors, formState } = useForm<IFormData>();
  const [signup, { loading, error }] = useMutation<SignUpMutation, SignUpMutationVariables>(
    SIGNUP_MUTATION
  );

  const onSubmit = async (inputData: IFormData) => {
    try {
      const { data } = await signup({
        variables: {
          name: inputData.name,
          email: inputData.email,
          password: inputData.password,
        },
      });

      if (data?.createUser) {
        toast({
          position: "top",
          title: `Signed up with ${data?.createUser?.email}!`,
          description: "Please sign in now.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Heading mb={4} as="h3">
        Sign Up
      </Heading>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <DisplayError error={error} />
        <Progress mb={4} colorScheme="facebook" isIndeterminate={formState.isSubmitting} />
        <fieldset disabled={loading} aria-busy={loading}>
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel m="0" htmlFor="name">
              Name
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                ref={register({
                  required: "Please enter your name",
                  minLength: { value: 3, message: "Must be at least 3 characters long" },
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel m="0" htmlFor="signup_email">
              Email
              <Input
                type="email"
                id="signup_email"
                name="email"
                placeholder="example@example.com"
                ref={register({
                  required: "Please enter a valid email address",
                  pattern: { value: /^\S+@\S+$/, message: "Must be a valid email address" },
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.password)}>
            <FormLabel m="0" htmlFor="signup_password">
              Password
              <Input
                type="password"
                id="signup_password"
                name="password"
                placeholder="Password"
                ref={register({
                  required: "Please enter a password",
                  minLength: { value: 8, message: "Must be at least 8 characters long" },
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            backgroundColor="ui.success"
            _hover={{ backgroundColor: "green.300" }}
            isDisabled={loading}
            type="submit"
          >
            <CheckIcon mr={2} />
            Sign Up
          </Button>
        </fieldset>
      </form>
    </Container>
  );
};
