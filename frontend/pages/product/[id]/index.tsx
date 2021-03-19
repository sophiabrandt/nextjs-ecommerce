import { ProductDetail } from "@/features/product/index";
import type { ProductsType } from "@/lib/index";
import { ALL_PRODUCTS_QUERY, initializeApollo, IProduct, PRODUCT_QUERY } from "@/lib/index";
import { Center, Spinner } from "@chakra-ui/react";
import { GetStaticPaths, NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

interface IAllProductsReturnType {
  data: {
    allProducts: ProductsType[];
  };
}

interface StaticProps {
  params: { id: string | undefined };
}

const client = initializeApollo();

const Product: NextPage<IProduct> = ({ product }) => {
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
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>Shoppy | {product.name}</title>
      </Head>
      <ProductDetail product={product} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { allProducts },
  }: IAllProductsReturnType = await client.query({ query: ALL_PRODUCTS_QUERY });
  const ids = allProducts?.map((product) => product?.id);
  const paths = ids?.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { id } }: StaticProps) => {
  if (!id) {
    throw new Error("Parameter is invalid");
  }

  let product;

  try {
    product = await client.query({
      query: PRODUCT_QUERY,
      variables: { id },
    });
  } catch (err) {
    if (err.status !== 404) {
      throw err;
    }
  }

  return {
    props: {
      product: product?.data?.Product,
    },
    revalidate: 60,
  };
};

export default Product;
