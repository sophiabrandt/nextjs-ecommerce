import { PaginationQuery } from "@/generated/PaginationQuery";
import { PAGINATION_QUERY } from "@/graphql/index";
import { IStyledTheme } from "@/lib/index";
import { useQuery } from "@apollo/client";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Center, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Head from "next/head";
import NextLink from "next/link";
import { DisplayError } from "./index";

interface IPaginationProps {
  page: number;
}

const perPage = parseInt(process.env.NEXT_PUBLIC_PER_PAGE || "6");

const PaginationStyles = styled(Box)<IStyledTheme>`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  border: 1px solid ${(props) => props.theme.colors.brand.secondary};
  border-radius: 10px;
  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid ${(props) => props.theme.colors.brand.secondary};
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled="true"] {
    color: ${(props) => props.theme.colors.text.disabled};
    pointer-events: none;
  }
`;

export const Pagination = ({ page }: IPaginationProps) => {
  const { data, error, loading } = useQuery<PaginationQuery>(PAGINATION_QUERY);
  if (loading) return null;
  if (error) return <DisplayError error={error} />;
  if (data?._allProductsMeta) {
    const { count } = data._allProductsMeta ?? 0;
    // eslint-disable-next-line
    const pageCount = Math.ceil(count! / perPage);

    return (
      <Center>
        <PaginationStyles>
          <Head>
            <title>
              Shoppy - Page {page} of {pageCount}
            </title>
          </Head>
          <NextLink href={`/products/${page - 1}`}>
            <Link aria-disabled={page <= 1}>
              <ChevronLeftIcon mr={1} />
              Prev
            </Link>
          </NextLink>
          <p>
            Page {page} of {pageCount}
          </p>
          <p>{count} Items Total</p>
          <NextLink href={`/products/${page + 1}`}>
            <Link aria-disabled={page >= pageCount}>
              Next
              <ChevronRightIcon ml={1} />
            </Link>
          </NextLink>
        </PaginationStyles>
      </Center>
    );
  }
  return null;
};
