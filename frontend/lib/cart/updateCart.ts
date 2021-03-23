import { CurrentUserQuery_authenticatedItem_cart } from "@/generated/CurrentUserQuery";

export const updateCart = (
  cart: CurrentUserQuery_authenticatedItem_cart[],
  newCartItem: CurrentUserQuery_authenticatedItem_cart
) => {
  const index = cart.findIndex((e) => e.id === newCartItem.id);
  if (index === -1) {
    return [...cart, newCartItem];
  } else {
    const copied = cart.filter((e) => e.id !== newCartItem.id);
    return [...copied, newCartItem];
  }
};
