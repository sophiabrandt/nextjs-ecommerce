import { useRouter } from "next/router";
import { Spinner, Center } from "@chakra-ui/react";
import { Product as ProductsType } from "@/lib/graphql/products.graphql";
import { Product as ProductType } from "@/lib/graphql/product.graphql";
import { NextPage } from "next";
import { ProductDetail } from "@/features/product/index";
import Head from "next/head";
import { gql } from "@apollo/client";
import { initializeApollo } from "@/lib/apollo";

const client = initializeApollo();

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

const productQuery = gql`
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

interface ProductProps {
  product: ProductType;
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
    return <Head>404 - Page not found</Head>;
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

interface AllProducts {
  data: {
    allProducts: ProductsType[];
  };
}

export const getStaticPaths = async () => {
  const {
    data: { allProducts },
  }: AllProducts = await client.query({ query: productsQuery });
  const ids = allProducts?.map((product) => product?.id);
  const paths = ids?.map((id) => ({ params: { id } }));

  return {
    paths,
    fallback: true,
  };
};

interface StaticProps {
  params: { id: string | undefined };
}

export const getStaticProps = async ({ params: { id } }: StaticProps) => {
  if (!id) {
    throw new Error("Parameter is invalid");
  }

  let product;

  try {
    product = await client.query({
      query: productQuery,
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
