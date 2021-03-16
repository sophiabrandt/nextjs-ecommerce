import { useRouter } from "next/router";
import { Spinner, Center } from "@chakra-ui/react";
import { NextPage } from "next";
import { Query, getSdk } from "@/graphql/sdk";
import { graphqlClient } from "@/graphql/index";
import Head from "next/head";

const sdk = getSdk(graphqlClient);

interface ProductProps {
  product: Query["Product"];
}

const Product: NextPage<ProductProps> = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Center>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.primary"
          size="xl"
        />
      </Center>
    );
  }

  if (!product) {
    return <Head>Page not found</Head>;
  }

  return <div>{product.name}</div>;
};

export const getStaticPaths = async () => {
  const { allProducts } = await sdk.allProducts();
  const ids = allProducts?.map((product) => product?.id);
  const paths = ids?.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params: { id },
}: {
  params: { id: string | undefined };
}) => {
  if (!id) {
    throw new Error("Parameter is invalid");
  }

  let product = null;

  try {
    product = await sdk.singleProduct({
      id,
    });
  } catch (err) {
    if (err.status !== 404) {
      throw err;
    }
  }

  return {
    props: {
      product: product?.Product,
    },
    revalidate: 60,
  };
};

export default Product;
