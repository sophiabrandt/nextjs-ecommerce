import { UpdateProduct } from "@/features/product/index";
import { PRODUCT_QUERY, IProduct, initializeApollo, addApolloState } from "@/lib/index";
import { GetServerSidePropsContext } from "next";

const UpdatePage = ({ product }: IProduct) => {
  return <UpdateProduct product={product} />;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = initializeApollo();

  try {
    const {
      data: { Product: product },
    } = await client.query({ query: PRODUCT_QUERY, variables: { id: context?.query?.id } });

    return addApolloState(client, {
      props: {
        product,
      },
    });
  } catch {
    return {
      notFound: true,
    };
  }
};

export default UpdatePage;
