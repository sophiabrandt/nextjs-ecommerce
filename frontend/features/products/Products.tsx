import { useQuery } from "@apollo/client";
import { Center, SimpleGrid } from "@chakra-ui/react";
import { DisplayError, Loading } from "@/components/index";
import { Product } from "./Product";
import { AllProductsQuery, AllProductsQueryVariables } from "@/generated/AllProductsQuery";
import { ALL_PRODUCTS_QUERY } from "@/graphql/index";

interface IProductsProps {
  page: number;
}

const perPage = parseInt(process.env.NEXT_PUBLIC_PER_PAGE || "6");

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
    <Center>
      <SimpleGrid minChildWidth="350px" spacing={4}>
        {data?.allProducts?.map((product) => {
          if (!product) return null;
          return <Product product={product} key={product.id} />;
        })}
      </SimpleGrid>
    </Center>
  );
};
