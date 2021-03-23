import { Stat, StatNumber } from "@chakra-ui/react";

interface ICartCountIndicator {
  count: number;
}

export const CartCountIndicator = ({ count }: ICartCountIndicator) => {
  if (count === 0) return null;
  return (
    <Stat pos="absolute" top="-6" right="-4">
      <StatNumber>{count}</StatNumber>
    </Stat>
  );
};
