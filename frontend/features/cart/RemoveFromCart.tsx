import { useMutation } from "@apollo/client";
import { REMOVE_FROM_CART_MUTATION } from "@/graphql/index";
import {
  RemoveFromCartMutation,
  RemoveFromCartMutationVariables,
  RemoveFromCartMutation_deleteCartItem,
} from "@/generated/RemoveFromCartMutation";
import { CloseButton } from "@chakra-ui/react";
import { StoreValue } from "@apollo/client";

interface IRemoveFromCartProps {
  id: string;
}

// https://github.com/apollographql/apollo-client/issues/7577
type StoreObjectCompatible = RemoveFromCartMutation_deleteCartItem & {
  [storeFieldName: string]: StoreValue;
};

export const RemoveFromCart = ({ id }: IRemoveFromCartProps) => {
  const [removeFromCart, { loading }] = useMutation<
    RemoveFromCartMutation,
    RemoveFromCartMutationVariables
  >(REMOVE_FROM_CART_MUTATION, {
    variables: { id },
    update(cache, { data }) {
      cache.evict({ id: cache.identify(data?.deleteCartItem as StoreObjectCompatible) });
    },
  });
  return (
    <CloseButton
      size="lg"
      onClick={() => removeFromCart()}
      disabled={loading}
      title="Remove This Product from the Cart"
    />
  );
};
