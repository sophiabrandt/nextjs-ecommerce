import { Products } from "@/features/products";
import { addApolloState, ALL_PRODUCTS_QUERY, IAllProducts, initializeApollo } from "@/lib/index";
import { GetServerSidePropsContext, NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = initializeApollo();

  try {
    const {
      data: { allProducts },
    } = await client.query({ query: ALL_PRODUCTS_QUERY });

    return addApolloState(client, {
      props: {
        allProducts,
      },
    });
  } catch {
    return {
      notFound: true,
    };
  }
};

const IndexPage: NextPage<IAllProducts> = ({ allProducts }) => {
  if (!allProducts) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>Shoppy</title>
      </Head>
      <Products allProducts={allProducts} />
    </div>
  );
};

export default IndexPage;
