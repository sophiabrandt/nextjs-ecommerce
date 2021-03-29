/* import { SignOut, useUser } from "@/features/authentication"; */
import { SignOut } from "@/features/authentication";
import { Cart } from "@/features/cart";
import {
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  SimpleGrid,
  Flex,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useQuery } from "@apollo/client";
import { CurrentUserQuery } from "@/generated/CurrentUserQuery";
import { CURRENT_USER_QUERY } from "@/graphql/index";

export function Nav() {
  /* const user = useUser(); */
  const { data } = useQuery<CurrentUserQuery>(CURRENT_USER_QUERY);
  const user = data?.authenticatedItem;
  console.log(`user`, user);

  return (
    <Flex align="center" alignItems="center" fontSize="xl" color="text.primary">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href="/">
            <Link _hover={{ color: "brand.tertiary" }}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {!!user && (
        <Breadcrumb mr={8}>
          <BreadcrumbItem>
            <BreadcrumbSeparator />
            <Cart />
          </BreadcrumbItem>
        </Breadcrumb>
      )}
      {!!user && (
        <SimpleGrid minChildWidth="100px" spacing="3px">
          <NextLink href="/product/sell">
            <Link _hover={{ color: "brand.tertiary" }}>Sell</Link>
          </NextLink>
          <Divider />
          <NextLink href="/orders">
            <Link _hover={{ color: "brand.tertiary" }}>Orders</Link>
          </NextLink>
          <Divider />
          <SignOut />
          <Divider />
        </SimpleGrid>
      )}
      {!user && (
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink as={NextLink} href="/signin">
              <Link _hover={{ color: "brand.tertiary" }}>Sign In</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      )}
    </Flex>
  );
}
