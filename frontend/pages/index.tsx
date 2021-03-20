import { Products } from "@/features/products";
import { addApolloState, initializeApollo } from "@/lib/index";
import { ALL_PRODUCTS_QUERY } from "@/graphql/index";
import { AllProductsQuery } from "@/generated/AllProductsQuery";
import { NextPage } from "next";
import Head from "next/head";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shoppy</title>
      </Head>
      <Products />
    </div>
  );
};

export const getStaticProps = async () => {
  const client = initializeApollo();

  try {
    await client.query<AllProductsQuery>({ query: ALL_PRODUCTS_QUERY });

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

export default IndexPage;
