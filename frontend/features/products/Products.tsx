import { IAllProducts } from "@/lib/index";
import { SimpleGrid } from "@chakra-ui/react";
import { Product } from "./Product";

export const Products = ({ allProducts }: IAllProducts) => {
  return (
    <SimpleGrid minChildWidth="400px" spacing={4}>
      {allProducts?.map((product) => (
        <Product product={product} key={product?.id} />
      ))}
    </SimpleGrid>
  );
};
