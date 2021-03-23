import { CurrentUserQuery_authenticatedItem_cart } from "@/graphql/generated/CurrentUserQuery";

export const calcCart = (cart: CurrentUserQuery_authenticatedItem_cart[]) => {
  return cart.reduce((sum: number, item: CurrentUserQuery_authenticatedItem_cart) => {
    if (cart.length === 0 || !item.product) return sum;
    return sum + (item.quantity ?? 0) * (item.product.price ?? 0);
  }, 0);
};
