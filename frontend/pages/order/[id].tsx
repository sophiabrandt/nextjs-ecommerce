import { Order } from "@/features/order";
import { OrderQuery, OrderQueryVariables } from "@/generated/OrderQuery";
import { ORDER_QUERY } from "@/graphql/index";
import { addApolloState, initializeApollo } from "@/lib/index";
import { GetServerSidePropsContext, NextPage } from "next";
import ErrorPage from "next/error";
import Head from "next/head";

interface IOrderPageProps {
  id?: string;
}

const OrderPage: NextPage<IOrderPageProps> = ({ id }) => {
  if (!id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>Shoppy | Order {id}</title>
      </Head>
      <Order id={id} />
    </div>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = initializeApollo({}, context);
  try {
    const id = (context?.query?.id as string) ?? "";
    await client.query<OrderQuery, OrderQueryVariables>({
      query: ORDER_QUERY,
      variables: {
        id,
      },
    });

    return addApolloState(client, {
      props: { id },
    });
  } catch {
    return {
      props: {},
    };
  }
};

export default OrderPage;
