import { useQuery } from "@apollo/client";
import { formatMoney } from "@/lib/index";
import { OrderQuery, OrderQueryVariables } from "@/generated/OrderQuery";
import { ORDER_QUERY } from "@/graphql/index";
import { DisplayError, Loading } from "@/components/index";
import {
  Image,
  Center,
  Heading,
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

interface IOrderProps {
  id: string;
}

export const Order = ({ id }: IOrderProps) => {
  const { data, error, loading } = useQuery<OrderQuery, OrderQueryVariables>(ORDER_QUERY, {
    variables: { id },
  });
  if (loading) return <Loading />;
  if (error) return <DisplayError error={error} />;

  if (data?.order) {
    const { order } = data;
    return (
      <Container maxW="container.md">
        <Center>
          <Heading as="h2" size="xl">
            Your Order
          </Heading>
        </Center>
        <Center>
          <Heading as="h4" size="md" mb={8}>
            #{id}
          </Heading>
        </Center>
        <Table variant="striped" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Item Name</Th>
              <Th>Quantity</Th>
              <Th>Price</Th>
              <Th>Sub Total</Th>
            </Tr>
          </Thead>
          <Tbody>
            {order.items.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>
                    <Image
                      src={item.photo?.image?.publicUrlTransformed ?? ""}
                      alt={item.photo?.altText ?? ""}
                      fallbackSrc="https://via.placeholder.com/50"
                      width="50px"
                      height="50px"
                      objectFit="cover"
                    />
                  </Td>
                  <Td>{item.name}</Td>
                  <Td>{item.quantity}</Td>
                  <Td>{formatMoney(item?.price ?? 0)}</Td>
                  <Td>{formatMoney((item?.price ?? 0) * (item?.quantity ?? 0))}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th></Th>
              <Th>{order.items.length} Item(s)</Th>
              <Th>
                {order.items.reduce((sum, item) => {
                  if (!item.quantity) return sum;
                  return item?.quantity + sum;
                }, 0)}{" "}
                Item(s) Total
              </Th>
              <Th></Th>
              <Th>{formatMoney(order.total ?? 0)} total</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Container>
    );
  }
  return null;
};
