import { formatMoney, IProduct, IStyledTheme } from "@/lib/index";
import { EditIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Heading, Image, Link, Spacer, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";

const StyledEditButton = styled(Button)<IStyledTheme>`
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.inverse};
  &:hover {
    background-color: ${(props) => props.theme.colors.brand.tertiary};
  }
`;

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
            <StyledEditButton m={2}>
              <NextLink href="/product/[id]/update" as={`/product/${product?.id}/update`}>
                <Link>
                  <EditIcon mr={2} />
                  Edit
                </Link>
              </NextLink>
            </StyledEditButton>
            <Button m={2} colorScheme="blue">
              Delete
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};
