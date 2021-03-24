import { CreateOrderMutation, CreateOrderMutationVariables } from "@/generated/CreateOrderMutation";
import { CREATE_ORDER_MUTATION } from "@/graphql/index";
import { IStyledTheme } from "@/lib/index";
import { useMutation } from "@apollo/client";
import { Button, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe, StripeError } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import nprogress from "nprogress";
import { FormEvent, useState } from "react";

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY ?? "");

const CheckoutFormStyles = styled.form<IStyledTheme>`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  // set loading state and error for stripe
  const [error, setError] = useState<StripeError | null>(null);
  const [loading, setLoading] = useState(false);

  const [checkout, { error: graphqlError }] = useMutation<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >(CREATE_ORDER_MUTATION);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    nprogress.start();
    try {
      const paymentMethodResult = await stripe?.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement) ?? { token: "" },
      });

      if (paymentMethodResult?.error) {
        nprogress.done();
        setError(paymentMethodResult.error);
        return;
      }
      try {
        const order = await checkout({
          variables: {
            token: paymentMethodResult?.paymentMethod?.id ?? "",
          },
        });

        router.push({
          pathname: "/order/[id]",
          query: {
            id: order?.data?.checkout?.id ?? "#",
          },
        });
      } catch (err) {
        // graphql error is handled via useMutation
        console.error(err);
      }
    } catch (err) {
      setError(err);
      console.error(err);
    }

    setLoading(false);
    nprogress.done();
  };

  return (
    <CheckoutFormStyles onSubmit={(event) => onSubmit(event)}>
      <CardElement />
      {error && (
        <Text fontSize="lg" color="ui.error">
          {error?.message}
        </Text>
      )}
      {graphqlError && (
        <Text fontSize="lg" color="ui.error">
          {graphqlError.message}
        </Text>
      )}
      <Button
        alignItems="center"
        isLoading={loading}
        disabled={loading}
        loadingText="Charging credit card"
        type="submit"
        backgroundColor="brand.primary"
        color="text.inverse"
        _hover={{ backgroundColor: "brand.tertiary" }}
      >
        Checkout
      </Button>
    </CheckoutFormStyles>
  );
};

export const Checkout = () => {
  return (
    <Elements stripe={stripeLib}>
      <CheckoutForm />
    </Elements>
  );
};
