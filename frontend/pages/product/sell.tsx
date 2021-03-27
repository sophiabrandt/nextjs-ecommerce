import { CreateProduct } from "@/features/product/index";
import { NextPage, GetServerSidePropsContext } from "next";

const SellPage: NextPage = () => {
  return <CreateProduct />;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
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
};

export default SellPage;
