import { formatMoney, IStyledTheme } from "@/lib/index";
import { useUser } from "@/features/authentication";
import { AddToCart } from "@/features/cart";
import { DeleteProduct } from "./DeleteProduct";
import { useQuery } from "@apollo/client";
import { ProductQuery, ProductQueryVariables } from "@/generated/ProductQuery";
import { PRODUCT_QUERY } from "@/graphql/index";
import { EditIcon } from "@chakra-ui/icons";
import { DisplayError, Loading } from "@/components/index";
import { SimpleGrid, Box, Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";

const StyledEditButton = styled(Button)<IStyledTheme>`
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.inverse};
  &:hover {
    background-color: ${(props) => props.theme.colors.brand.tertiary};
  }
`;

export const ProductDetail = ({ id }: { id: string }) => {
  const user = useUser();
  const { data, loading, error } = useQuery<ProductQuery, ProductQueryVariables>(PRODUCT_QUERY, {
    variables: { id },
  });

  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;

  if (data?.Product) {
    const { Product: product } = data;
    return (
      <SimpleGrid justifyItems="center" minChildWidth="400px" spacing={8}>
        <Image
          borderRadius="lg"
          boxSize="400px"
          objectFit="cover"
          src={product.photo?.image?.publicUrlTransformed as string | undefined}
          alt={product.photo?.altText as string | undefined}
          fallbackSrc="https://via.placeholder.com/400"
        />
        <Box w="400px" overflow="hidden">
          <Stack directon={["column"]} spacing={4}>
            <Heading color="brand.primary">{data?.Product?.name}</Heading>
            <Text mt={4} color="text.primary">
              {product.description}
            </Text>
            <Text mt={2} fontSize="lg" fontWeight="semibold" color="text.secondary">
              {formatMoney(Number(product.price))}
            </Text>
            <Flex alignItems="center" justify="center">
              {user && <AddToCart id={product.id} />}
              {product.user && product.user.id === user?.id && (
                <>
                  <NextLink href="/product/[id]/update" as={`/product/${product.id}/update`}>
                    <StyledEditButton ml={2}>
                      <Flex alignItems="center">
                        <EditIcon mr={2} />
                        Edit
                      </Flex>
                    </StyledEditButton>
                  </NextLink>
                  <DeleteProduct id={product.id} />
                </>
              )}
            </Flex>
          </Stack>
        </Box>
      </SimpleGrid>
    );
  }
  return null;
};
