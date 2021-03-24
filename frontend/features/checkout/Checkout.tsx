import { CreateOrderMutation, CreateOrderMutationVariables } from "@/generated/CreateOrderMutation";
import { CurrentUserQuery_authenticatedItem } from "@/generated/CurrentUserQuery";
import { useUser } from "@/features/authentication";
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
import { StoreValue } from "@apollo/client";

interface ICheckoutProps {
  children: React.ReactNode;
}

interface ICheckoutFormProps {
  onClose: () => void;
}

type StoreObjectCompatible = CurrentUserQuery_authenticatedItem & {
  [storeFieldName: string]: StoreValue;
};

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY ?? "");

const CheckoutFormStyles = styled.form<IStyledTheme>`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

export const CheckoutForm = ({ onClose }: ICheckoutFormProps) => {
  const user = useUser();
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
        setLoading(false);
        setError(paymentMethodResult.error);
        return;
      }

      try {
        const order = await checkout({
          variables: {
            token: paymentMethodResult?.paymentMethod?.id ?? "",
          },
          // remove cart items from the Apollo cache
          update(cache) {
            cache.modify({
              id: cache.identify(user as StoreObjectCompatible),
              fields: {
                cart() {
                  return [];
                },
              },
            });
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

    onClose(); // close the Cart drawer
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

export const Checkout = ({ children }: ICheckoutProps) => {
  return <Elements stripe={stripeLib}>{children}</Elements>;
};
