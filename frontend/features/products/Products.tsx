import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { Product } from "./Product";
import { Product as ProductsType } from "@/lib/graphql/products.graphql";

interface ProductsProps {
  products: ProductsType[];
}

export const Products = ({ products }: ProductsProps) => {
  if (!products)
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.primary"
          size="xl"
        />
      </Center>
    );

  return (
    <SimpleGrid minChildWidth="400px" spacing={4}>
      {products?.map((product) => (
        <Product product={product} key={product?.id} />
      ))}
    </SimpleGrid>
  );
};
