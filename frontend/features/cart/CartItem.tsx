import { Heading, ListItem, Text } from "@chakra-ui/react";
import { formatMoney } from "@/lib/index";
import styled from "@emotion/styled";
import { IStyledTheme } from "@/lib/index";
import { CurrentUserQuery_authenticatedItem_cart } from "@/generated/CurrentUserQuery";

interface ICartItemProps {
  cartItem: CurrentUserQuery_authenticatedItem_cart;
}

const CartItemStyles = styled(ListItem)<IStyledTheme>`
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.ui.secondary};
  display: grid;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 1rem;
  }
  h3,
  p {
    margin: 0;
  }
`;

export const CartItem = ({ cartItem }: ICartItemProps) => {
  const { product } = cartItem;

  if (product) {
    return (
      <CartItemStyles>
        <img
          width="100"
          src={product?.photo?.image?.publicUrlTransformed ?? ""}
          alt={product?.name ?? ""}
        />
        <div>
          <Heading as="h4" size="sm">
            {product?.name}
          </Heading>
          <Text>
            {formatMoney((product?.price ?? 0) * (cartItem.quantity ?? 0))} —
            <em>
              {cartItem.quantity} &times; {formatMoney(product.price ?? 0)} each
            </em>
          </Text>
        </div>
      </CartItemStyles>
    );
  }
  return null;
};
