import { Flex, Spacer, Container } from "@chakra-ui/react";
import { Header, Nav } from "@/features/navigation-header/";

interface Props {
  children: React.ReactNode;
}

export const Page = ({ children }: Props) => {
  return (
    <Container maxW="container.xl" mt={2}>
      <Flex mb={4}>
        <Header />
        <Spacer />
        <Nav />
      </Flex>
      {children}
    </Container>
  );
};
