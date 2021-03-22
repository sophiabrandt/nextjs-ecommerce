import { SignOut, useUser } from "@/features/authentication";
import { Cart } from "@/features/cart";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Flex,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

export function Nav() {
  const user = useUser();

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
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbLink as={NextLink} href="/product/sell">
              <Link _hover={{ color: "brand.tertiary" }}>Sell</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href="/orders">
              <Link _hover={{ color: "brand.tertiary" }}>Orders</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <SignOut />
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Cart />
          </BreadcrumbItem>
        </Breadcrumb>
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
