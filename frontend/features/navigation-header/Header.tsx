import { Heading } from "@chakra-ui/react";

export function Header() {
  return (
    <>
      <Heading
        bg="brand.primary"
        color="text.inverse"
        textTransform="uppercase"
        transform="skew(-7deg)"
        p={2}
        maxW="20%"
        as="h1"
      >
        Shoppy
      </Heading>
    </>
  );
}
