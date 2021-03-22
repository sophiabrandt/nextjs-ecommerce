import { CloseIcon } from "@chakra-ui/icons";
import { CartItem } from "./CartItem";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  BreadcrumbLink,
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

            <DrawerFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                <CloseIcon mr={2} />
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </BreadcrumbLink>
  );
};
