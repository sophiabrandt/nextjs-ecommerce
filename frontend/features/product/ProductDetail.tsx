import { formatMoney, IStyledTheme } from "@/lib/index";
import { useProductQuery } from "@/lib/graphql/product.graphql";
import { EditIcon } from "@chakra-ui/icons";
import { DisplayError, Loading } from "@/components/index";
import { Box, Button, Flex, Heading, Image, Link, Spacer, Stack, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import NextLink from "next/link";

const StyledEditButton = styled(Button)<IStyledTheme>`
  background-color: ${(props) => props.theme.colors.brand.primary};
  color: ${(props) => props.theme.colors.text.inverse};
  &:hover {
    background-color: ${(props) => props.theme.colors.brand.tertiary};
  }
`;

export const ProductDetail = ({ id }: { id: string }) => {
  const { data, loading, error } = useProductQuery({ variables: { id } });

  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;

  return (
    <Flex>
      <Image
        borderRadius="lg"
        boxSize="400px"
        objectFit="cover"
        src={data?.Product?.photo?.image?.publicUrlTransformed as string | undefined}
        alt={data?.Product?.photo?.altText as string | undefined}
        fallbackSrc="https://via.placeholder.com/400"
      />
      <Spacer />
      <Box w="400px" overflow="hidden">
        <Stack directon={["column"]} spacing={4}>
          <Heading color="brand.primary">{data?.Product?.name}</Heading>
          <Text mt={4} color="text.primary">
            {data?.Product?.description}
          </Text>
          <Text mt={2} fontSize="lg" fontWeight="semibold" color="text.secondary">
            {formatMoney(data?.Product?.price as number | undefined)}
          </Text>
          <Flex justify="center">
            <StyledEditButton m={2}>
              <NextLink href="/product/[id]/update" as={`/product/${data?.Product?.id}/update`}>
                <Link>
                  <EditIcon mr={2} />
                  Edit
                </Link>
              </NextLink>
            </StyledEditButton>
            <Button m={2} colorScheme="blue">
              Delete
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};
