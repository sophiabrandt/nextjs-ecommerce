import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Spinner, Center } from "@chakra-ui/react";
import { Product as ProductsType } from "@/lib/graphql/allProducts.graphql";
import { Product as ProductType } from "@/lib/graphql/product.graphql";
import { GetStaticPaths, NextPage } from "next";
import { ProductDetail } from "@/features/product/index";
import Head from "next/head";
import { gql } from "@apollo/client";
import { initializeApollo } from "@/lib/apollo";
import { ALL_PRODUCTS_QUERY } from "@/pages/index";

export interface ProductProps {
  product: ProductType;
}

interface AllProductsReturnType {
  data: {
    allProducts: ProductsType[];
  };
}

interface StaticProps {
  params: { id: string | undefined };
}

const client = initializeApollo();

export const PRODUCT_QUERY = gql`
  query product($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

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
  }: AllProductsReturnType = await client.query({ query: ALL_PRODUCTS_QUERY });
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
    revalidate: 1,
  };
};

export default Product;
