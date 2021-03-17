import { Product as ProductType } from "@/lib/graphql/product.graphql";
import { theme } from "@/infrastructure/theme";
import { formatMoney } from "@/lib/index";
import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";

interface StyledTextProps {
  theme?: typeof theme;
}

const PriceTag = styled(Heading)<StyledTextProps>`
  background: ${(props) => props.theme.colors.brand.primary};
  transform: rotate(3deg);
  color: ${(props) => props.theme.colors.text.inverse};
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 2.5rem;
  display: inline-block;
`;

const Title = styled(Heading)<StyledTextProps>`
  margin: 0 1rem;
  text-align: center;
  transform: skew(-5deg) rotate(-1deg);
  margin-top: -3rem;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  a {
    background: ${(props) => props.theme.colors.brand.primary};
    display: inline;
    line-height: 1.3;
    font-size: 2.5rem;
    text-align: center;
    color: white;
    padding: 0 1rem;
  }
`;

interface ProductProps {
  product: ProductType;
}

export const Product = ({ product }: ProductProps) => {
  return (
    <Box>
      <Flex justify="flex-end">
        <PriceTag>{formatMoney(product?.price as number | undefined)}</PriceTag>
      </Flex>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          boxSize="400px"
          objectFit="cover"
          src={product?.photo?.image?.publicUrlTransformed as string | undefined}
          alt={product?.photo?.altText as string | undefined}
          fallbackSrc="https://via.placeholder.com/400"
        />
        <Title>
          <NextLink href="/product/[id]" as={`/product/${product?.id}`}>
            <Link>{product?.name}</Link>
          </NextLink>
        </Title>
        <Text p="1" isTruncated>
          {product?.description}
        </Text>
      </Box>
    </Box>
  );
};
