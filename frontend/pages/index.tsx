import { Products } from "@/features/products";
import { getSdk } from "@/graphql/sdk";
import { graphqlClient } from "@/graphql/index";
import { InferGetStaticPropsType } from "next";

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
  return <Products products={allProducts} />;
};

export default IndexPage;
