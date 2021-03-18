import { formatMoney, IProduct } from "@/lib/index";
import { Box, Button, Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";

export const ProductDetail = ({ product }: IProduct) => {
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
        <Stack directon={["column"]} spacing={4}>
          <Heading color="brand.primary">{product?.name}</Heading>
          <Text mt={4} color="text.primary">
            {product?.description}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="semibold" color="text.secondary">
            {formatMoney(product?.price as number | undefined)}
          </Text>
          <Flex justify="center">
            <Button m={2} colorScheme="blue">
              Edit
            </Button>
            <Button m={2} colorScheme="blue">
              Delete
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};
