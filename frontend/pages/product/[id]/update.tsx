import { UpdateProduct } from "@/features/product/index";
import {
  ProductQuery,
  ProductQueryVariables,
  ProductQuery_Product,
} from "@/generated/ProductQuery";
import { PRODUCT_QUERY } from "@/graphql/index";
import { addApolloState, initializeApollo } from "@/lib/index";
import { GetServerSidePropsContext } from "next";

interface IUpdatePageProps {
  product: ProductQuery_Product;
}

const UpdatePage = ({ product }: IUpdatePageProps) => {
  return <UpdateProduct product={product} />;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = initializeApollo({ headers: context?.req?.headers });

  try {
    const {
      data: { Product: product },
    } = await client.query<ProductQuery, ProductQueryVariables>({
      query: PRODUCT_QUERY,
      variables: { id: context?.query?.id as string },
      context: { headers: { Cookie: context?.req?.headers?.cookie } },
    });

    return addApolloState(client, {
      props: {
        product,
      },
    });
  } catch {
    if (context?.req?.headers?.cookie) {
      return {
        props: {},
      };
    }
    return {
      props: {},
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
};

export default UpdatePage;
