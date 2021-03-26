import { Orders } from "@/features/order";
import { AllOrdersQuery } from "@/generated/AllOrdersQuery";
import { ALL_ORDERS_QUERY } from "@/graphql/index";
import { addApolloState, initializeApollo } from "@/lib/index";
import { NextPage, GetServerSidePropsContext } from "next";
import Head from "next/head";

const OrdersPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shoppy | Orders </title>
      </Head>
      <Orders />
    </div>
  );
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const client = initializeApollo({}, context);
  try {
    await client.query<AllOrdersQuery>({
      query: ALL_ORDERS_QUERY,
    });

    return addApolloState(client, {
      props: {},
    });
  } catch {
    return {
      notFound: true,
    };
  }
};

export default OrdersPage;
