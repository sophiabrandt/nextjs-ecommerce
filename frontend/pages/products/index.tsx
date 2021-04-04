import { Products } from "@/features/products";
import { Pagination } from "@/components/index";
import { addApolloState, initializeApollo } from "@/lib/index";
import { ALL_PRODUCTS_QUERY } from "@/graphql/index";
import { AllProductsQuery, AllProductsQueryVariables } from "@/generated/AllProductsQuery";
import { NextPage } from "next";
import { useRouter } from "next/router";

const ProductsPage: NextPage = () => {
  const { query } = useRouter();
  const page = parseInt(query?.page as string, 10);
  return (
    <div>
      <Pagination page={page || 1} />
      <Products page={page || 1} />
      <Pagination page={page || 1} />
    </div>
  );
};

export const getStaticProps = async () => {
  const client = initializeApollo();

  try {
    await client.query<AllProductsQuery, AllProductsQueryVariables>({
      query: ALL_PRODUCTS_QUERY,
    });

    // add all products to the Apollo cache;
    // but not the page props
    // the client will query the Apollo cache
    return addApolloState(client, {
      props: {},
      revalidate: 60,
    });
  } catch {
    return {
      notFound: true,
    };
  }
};

export default ProductsPage;
