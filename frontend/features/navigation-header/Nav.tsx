import { Link, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import NextLink from "next/link";

export function Nav() {
  return (
    <Flex align="center" fontSize="xl" color="text.primary">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href="/">
            <Link _hover={{ color: "brand.tertiary" }}>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href="/product/sell">
            <Link _hover={{ color: "brand.tertiary" }}>Sell</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={NextLink} href="/orders">
            <Link _hover={{ color: "brand.tertiary" }}>Orders</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}
