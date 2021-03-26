import { useQuery } from "@apollo/client";
import NextLink from "next/link";
import { formatMoney } from "@/lib/index";
import { AllOrdersQuery, AllOrdersQuery_allOrders } from "@/generated/AllOrdersQuery";
import { ALL_ORDERS_QUERY } from "@/graphql/index";
import { DisplayError, Loading } from "@/components/index";
import {
  Link,
  Center,
  Heading,
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
} from "@chakra-ui/react";

const allItemsinOrder = (order: AllOrdersQuery_allOrders | null) => {
  if (!order) return 0;
  return order.items.reduce((sum, item) => {
    if (!item.quantity) return sum;
    return sum + item.quantity;
  }, 0);
};

export const Orders = () => {
  const { data, error, loading } = useQuery<AllOrdersQuery>(ALL_ORDERS_QUERY);
  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;

  if (data?.allOrders && data?.allOrders.length !== 0) {
    const { allOrders: orders } = data;
    return (
      <Container maxW="container.md">
        <Center>
          <Heading as="h2" size="xl">
            Your Orders
          </Heading>
        </Center>
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Order ID</Th>
              <Th>Charge ID</Th>
              <Th>Number of items</Th>
              <Th>Total Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => {
              return (
                <Tr key={order?.id}>
                  <Td>
                    <NextLink href="/order/[id]" as={`/order/${order?.id}`}>
                      <Link>{order?.id}</Link>
                    </NextLink>
                  </Td>
                  <Td>{order?.charge}</Td>
                  <Td>{allItemsinOrder(order)}</Td>
                  <Td>{formatMoney(order?.total ?? 0)}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Container>
    );
  }
  return (
    <Container maxW="container.md">
      <Center>
        <Heading as="h2" size="xl">
          Your Orders
        </Heading>
      </Center>
      <Center>
        <Text fontSize="xl" mt={8}>
          No orders yet!
        </Text>
      </Center>
    </Container>
  );
};
