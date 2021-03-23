import { formatMoney, IStyledTheme } from "@/lib/index";
import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import { AllProductsQuery_allProducts } from "@/generated/AllProductsQuery";
import styled from "@emotion/styled";
import NextLink from "next/link";

interface IProductProps {
  product: AllProductsQuery_allProducts;
}

const PriceTag = styled(Heading)<IStyledTheme>`
  background: ${(props) => props.theme.colors.brand.primary};
  transform: rotate(3deg);
  color: ${(props) => props.theme.colors.text.inverse};
  font-weight: 600;
  padding: 5px;
  line-height: 1;
  font-size: 2.5rem;
  display: inline-block;
`;

const Title = styled(Heading)<IStyledTheme>`
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

export const Product = ({ product }: IProductProps) => {
  return (
    <Box mt={6} pos="relative">
      <PriceTag pos="absolute" top="-8" left="250">
        {formatMoney(product?.price || 0)}
      </PriceTag>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image
          boxSize="400px"
          objectFit="cover"
          src={product?.photo?.image?.publicUrlTransformed || ""}
          alt={product?.photo?.altText || ""}
          fallbackSrc="https://via.placeholder.com/400"
        />
        <Title>
          <NextLink href="/product/[id]" as={`/product/${product?.id}`}>
            <Link>{product?.name}</Link>
          </NextLink>
        </Title>
        <Text p={3} isTruncated>
          {product?.description}
        </Text>
      </Box>
    </Box>
  );
};
