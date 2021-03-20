import { useQuery } from "@apollo/client";
import { SimpleGrid } from "@chakra-ui/react";
import { DisplayError, Loading } from "@/components/index";
import { Product } from "./Product";
import { AllProductsQuery } from "@/generated/AllProductsQuery";
import { ALL_PRODUCTS_QUERY } from "@/graphql/index";

export const Products = () => {
  const { data, loading, error } = useQuery<AllProductsQuery>(ALL_PRODUCTS_QUERY, {
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-first",
  });

  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;

  return (
    <SimpleGrid minChildWidth="400px" spacing={4}>
      {data?.allProducts?.map((product) => {
        if (!product) return null;
        return <Product product={product} key={product.id} />;
      })}
    </SimpleGrid>
  );
};
