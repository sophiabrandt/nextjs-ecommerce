import { Products } from "@/features/products";
import { gql } from "@apollo/client";
import { InferGetStaticPropsType } from "next";
import { initializeApollo } from "@/lib/apollo";
import Head from "next/head";

const productsQuery = gql`
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

export const getStaticProps = async () => {
  const client = initializeApollo();
  const {
    data: { allProducts: products },
  } = await client.query({ query: productsQuery });

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};

const IndexPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Shoppy</title>
      </Head>
      <Products products={products} />
    </div>
  );
};

export default IndexPage;
