import { Loading } from "@/components/index";
import { ProductDetail } from "@/features/product/index";
import { AllProductsQuery } from "@/generated/AllProductsQuery";
import { ALL_PRODUCTS_QUERY, PRODUCT_QUERY } from "@/graphql/index";
import { initializeApollo } from "@/lib/index";
import { NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

interface IStaticProps {
  params: { id: string | undefined };
}

interface IProductPageProps {
  id?: string;
  title?: string;
}

const client = initializeApollo();

const Product: NextPage<IProductPageProps> = ({ id, title }) => {
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

export const getStaticPaths = async () => {
  const {
    data: { allProducts },
  } = await client.query<AllProductsQuery>({ query: ALL_PRODUCTS_QUERY });
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
    return {
      notFound: true,
    };
  }
};

export default Product;
