import { Products } from "@/features/products";
import { getSdk } from "@/graphql/sdk";
import { graphqlClient } from "@/graphql/index";
import { InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps = async () => {
  const sdk = getSdk(graphqlClient);
  const { allProducts } = await sdk.allProducts();
  return {
    props: {
      allProducts,
    },
    revalidate: 60,
  };
};

const IndexPage = ({ allProducts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Shoppy</title>
      </Head>
      <Products products={allProducts} />
    </div>
  );
};

export default IndexPage;
