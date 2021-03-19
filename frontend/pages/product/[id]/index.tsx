import { Loading } from "@/components/index";
import { ProductDetail } from "@/features/product/index";
import type { ProductsType } from "@/lib/index";
import { ALL_PRODUCTS_QUERY, initializeApollo, PRODUCT_QUERY } from "@/lib/index";
import { GetStaticPaths, NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

interface IAllProductsReturnType {
  data: {
    allProducts: ProductsType[];
  };
}

interface IStaticProps {
  params: { id: string | undefined };
}

interface IProductPage {
  id?: string;
  title?: string;
}

const client = initializeApollo();

const Product: NextPage<IProductPage> = ({ id, title }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  if (!id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>Shoppy | {title}</title>
      </Head>
      <ProductDetail id={id} />
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

export const getStaticProps = async ({ params: { id } }: IStaticProps) => {
  if (!id) {
    throw new Error("Parameter is invalid");
  }

  try {
    const {
      data: { Product: product },
    } = await client.query({
      query: PRODUCT_QUERY,
      variables: { id },
    });
    return {
      props: {
        id: product?.id,
        title: product?.name,
      },
      revalidate: 60,
    };
  } catch (err) {
    if (err.status !== 404) {
      throw err;
    }
    return {
      props: {},
    };
  }
};

export default Product;
