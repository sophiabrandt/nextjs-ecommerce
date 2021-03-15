import { Flex, Spacer, Container } from "@chakra-ui/react";
import { NextPage } from "next";
import { Header, Nav } from "@/features/navigation-header/";

interface Props {
  children: React.ReactNode;
}

const IndexPage: NextPage<Props> = ({ children }) => {
  return (
    <Container maxW="container.xl" mt={2}>
      <Flex>
        <Header />
        <Spacer />
        <Nav />
      </Flex>
      {children}
    </Container>
  );
};

export default IndexPage;
