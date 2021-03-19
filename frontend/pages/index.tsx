import { Products } from "@/features/products";
import { addApolloState, ALL_PRODUCTS_QUERY, initializeApollo } from "@/lib/index";
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
    await client.query({ query: ALL_PRODUCTS_QUERY });

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
