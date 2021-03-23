import { CURRENT_USER_QUERY, ADD_TO_CART_MUTATION } from "@/graphql/index";
import { updateCart } from "@/lib/index";
import { AddToCartMutation, AddToCartMutationVariables } from "@/generated/AddToCartMutation";
import { CurrentUserQuery } from "@/generated/CurrentUserQuery";
import { useMutation } from "@apollo/client";
import { Button, useToast } from "@chakra-ui/react";

interface IAddToCartProps {
  id: string;
}

export const AddToCart = ({ id }: IAddToCartProps) => {
  const toast = useToast();
  const [addToCart, { loading }] = useMutation<AddToCartMutation, AddToCartMutationVariables>(
    ADD_TO_CART_MUTATION,
    {
      variables: { id },
      update(cache, { data }) {
        const newCartItem = data?.addToCart;
        const currentUser = cache.readQuery<CurrentUserQuery>({
          query: CURRENT_USER_QUERY,
        });
        if (currentUser?.authenticatedItem?.cart && newCartItem) {
          const authenticatedUser = currentUser.authenticatedItem;
          const newCart = updateCart(authenticatedUser.cart, newCartItem);
          const userWithUpdatedCart = {
            ...authenticatedUser,
            cart: newCart,
          };
          cache.writeQuery({
            query: CURRENT_USER_QUERY,
            data: {
              authenticatedItem: userWithUpdatedCart,
            },
          });
          toast({
            position: "top",
            title: "Success!",
            description: "Item added to cart.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        }
      },
    }
  );

  return (
    <Button
      backgroundColor="ui.success"
      _hover={{ backgroundColor: "green.300" }}
      type="button"
      onClick={() => addToCart()}
      disabled={loading}
      isLoading={loading}
    >
      <span role="img" aria-label="cart">
        🛒
      </span>{" "}
      Add to Cart
    </Button>
  );
};
