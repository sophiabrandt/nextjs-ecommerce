import { formatMoney } from "@/lib/index";
import { Product as ProductDetailType } from "@/lib/graphql/product.graphql";
import { Heading, Flex, Spacer, Text, Box, Image } from "@chakra-ui/react";

interface ProductDetailProps {
  product: ProductDetailType;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <Flex>
      <Image
        borderRadius="lg"
        boxSize="400px"
        objectFit="cover"
        src={product?.photo?.image?.publicUrlTransformed as string | undefined}
        alt={product?.photo?.altText as string | undefined}
        fallbackSrc="https://via.placeholder.com/400"
      />
      <Spacer />
      <Box w="400px" overflow="hidden">
        <Heading color="brand.primary">{product?.name}</Heading>
        <Text mt={4} color="text.primary">
          {product?.description}
        </Text>
        <Text mt={2} fontSize="lg" fontWeight="semibold" color="text.secondary">
          {formatMoney(product?.price as number | undefined)}
        </Text>
      </Box>
    </Flex>
  );
};
