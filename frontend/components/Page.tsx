import { Flex, Spacer, Container } from "@chakra-ui/react";
import { Header, Nav } from "@/features/navigation-header/";

interface IPageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: IPageProps) => {
  return (
    <Container maxW="container.xl" mt={4}>
      <Flex mb={8}>
        <Header />
        <Spacer />
        <Nav />
      </Flex>
      {children}
    </Container>
  );
};
