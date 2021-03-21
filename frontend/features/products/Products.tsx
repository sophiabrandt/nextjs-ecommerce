import { useQuery } from "@apollo/client";
import { accessEnv } from "@/lib/index";
import { SimpleGrid } from "@chakra-ui/react";
import { DisplayError, Loading } from "@/components/index";
import { Product } from "./Product";
import { AllProductsQuery, AllProductsQueryVariables } from "@/generated/AllProductsQuery";
import { ALL_PRODUCTS_QUERY } from "@/graphql/index";

interface IProductsProps {
  page: number;
}

const perPage = parseInt(accessEnv("PER_PAGE", "4"), 10);

export const Products = ({ page }: IProductsProps) => {
  const { data, loading, error } = useQuery<AllProductsQuery, AllProductsQueryVariables>(
    ALL_PRODUCTS_QUERY,
    {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
      variables: {
        skip: page * perPage - perPage,
        first: perPage,
      },
    }
  );

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
