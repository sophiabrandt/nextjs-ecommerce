import { DisplayError } from "@/components/index";
import { ResetMutation, ResetMutationVariables } from "@/generated/ResetMutation";
import { RESET_MUTATION } from "@/graphql/index";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
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
  email: string;
  password: string;
  token: string;
}

interface IResetProps {
  token: string;
}

export const Reset = ({ token }: IResetProps) => {
  const router = useRouter();
  const toast = useToast();
  const { register, handleSubmit, errors, formState } = useForm<IFormData>();
  const [reset, { data, loading, error }] = useMutation<ResetMutation, ResetMutationVariables>(
    RESET_MUTATION
  );

  const resetError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;

  const onSubmit = async (inputData: IFormData) => {
    try {
      await reset({
        variables: {
          email: inputData.email,
          password: inputData.password,
          token,
        },
      });

      if (resetError) {
        toast({
          position: "top",
          title: "Success!",
          description: "You can now sign in.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        router.push("/signin");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Heading mb={4} as="h3">
        Reset Email
      </Heading>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <DisplayError error={error || resetError} />
        <Progress mb={4} colorScheme="facebook" isIndeterminate={formState.isSubmitting} />
        <fieldset disabled={loading} aria-busy={loading}>
          <FormControl isInvalid={Boolean(errors.email)}>
            <FormLabel m="0" htmlFor="reset_email_with_token">
              Email
              <Input
                type="email"
                id="reset_email_with_token"
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
            <FormLabel m="0" htmlFor="reset_password_with_token">
              Password
              <Input
                type="password"
                id="reset_password_with_token"
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
            Reset
          </Button>
        </fieldset>
      </form>
    </Container>
  );
};
