import { Products } from "@/features/products";
import { Product as ProductsType } from "@/lib/graphql/allProducts.graphql";
import { gql } from "@apollo/client";
import { GetServerSidePropsContext, NextPage } from "next";
import ErrorPage from "next/error";
import { addApolloState, initializeApollo } from "@/lib/apollo";
import Head from "next/head";

export interface AllProductsProps {
  allProducts: ProductsType[];
}

export const ALL_PRODUCTS_QUERY = gql`
  query allProducts {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

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

const IndexPage: NextPage<AllProductsProps> = ({ allProducts }) => {
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
