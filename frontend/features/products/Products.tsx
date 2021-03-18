import { SimpleGrid } from "@chakra-ui/react";
import { Product } from "./Product";
import { AllProductsProps } from "@/pages/index";

export const Products = ({ allProducts }: AllProductsProps) => {
  return (
    <SimpleGrid minChildWidth="400px" spacing={4}>
      {allProducts?.map((product) => (
        <Product product={product} key={product?.id} />
      ))}
    </SimpleGrid>
  );
};
