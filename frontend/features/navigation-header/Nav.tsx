import { Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import NextLink from "next/link";

export function Nav() {
  return (
    <Flex align="center" fontSize="xl" color="text.primary">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href="#">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={NextLink} href="/sell">
            Sell
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={NextLink} href="/orders">
            Orders
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
}
