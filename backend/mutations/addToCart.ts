import { KeystoneContext } from "@keystone-next/types";
import { CartItemCreateInput } from "../.keystone/schema-types";
import { Session } from "../types";

async function addToCart(
  // eslint-disable-next-line
  root: any,
  { productId }: { productId: string },
  context: KeystoneContext
): Promise<CartItemCreateInput> {
  const ses = <Session>context.session;
  if (!ses.itemId) {
    throw new Error("You must be logged in to do this!");
  }

  const allCartItems = await context.lists.CartItem.findMany({
    where: { user: { id: ses.itemId }, product: { id: productId } },
    resolveFields: "id,quantity",
  });

  const [existingCartItem] = allCartItems;
  if (existingCartItem) {
    // console.log(
    //   `There are already ${existingCartItem.quantity} items in the cart, increment by 1!`
    // );
    return await context.lists.CartItem.updateOne({
      id: existingCartItem.id,
      data: { quantity: existingCartItem.quantity + 1 },
      resolveFields: false,
    });
  }

  // console.log(`Adding item with id ${productId} to cart!`);
  return await context.lists.CartItem.createOne({
    data: {
      product: { connect: { id: productId } },
      user: { connect: { id: ses.itemId } },
    },
    resolveFields: false,
  });
}

export default addToCart;
