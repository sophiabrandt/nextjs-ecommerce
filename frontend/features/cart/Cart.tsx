import { CloseIcon } from "@chakra-ui/icons";
import { calcCart, formatMoney } from "@/lib/index";
import { CartItem } from "./CartItem";
import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  BreadcrumbLink,
  Text,
  Button,
  List,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useUser } from "@/features/authentication";

export const Cart = () => {
  const me = useUser();
  const cartRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (!me) return null;

  return (
    <BreadcrumbLink ref={cartRef} onClick={onOpen} _hover={{ color: "brand.tertiary" }}>
      Cart
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={cartRef}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Cart</DrawerHeader>

            <DrawerBody>
              <List>
                {me.cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </List>
            </DrawerBody>

            <Flex as="footer" m={4} justify="space-between" align="center">
              <Text fontSize="xl">{formatMoney(calcCart(me.cart))}</Text>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                <CloseIcon mr={2} />
                Close
              </Button>
            </Flex>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </BreadcrumbLink>
  );
};
