import { CurrentUserQuery_authenticatedItem_cart } from "@/generated/CurrentUserQuery";

export const updateCart = (
  cart: CurrentUserQuery_authenticatedItem_cart[],
  newCartItem: CurrentUserQuery_authenticatedItem_cart
) => {
  // is the item already in the cart?
  const index = cart.findIndex((e) => e.id === newCartItem.id);
  if (index === -1) {
    // add item to the cart
    return [...cart, newCartItem];
  } else {
    // remove previous version of item, and add the current item
    // this updates the quantity, price, and all other variables automatically
    const copied = cart.filter((e) => e.id !== newCartItem.id);
    return [...copied, newCartItem];
  }
};
