import { useAllProductsQuery } from "@/lib/graphql/allProducts.graphql";
import { ProductsType } from "@/lib/index";
import { SimpleGrid } from "@chakra-ui/react";
import { DisplayError, Loading } from "@/components/index";
import { Product } from "./Product";

export const Products = () => {
  const { data, loading, error } = useAllProductsQuery();

  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;

  return (
    <SimpleGrid minChildWidth="400px" spacing={4}>
      {data?.allProducts?.map((product: ProductsType | null) => {
        if (!product) return null;
        return <Product product={product} key={product.id} />;
      })}
    </SimpleGrid>
  );
};
