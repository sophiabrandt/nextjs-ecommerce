import { IStyledTheme } from "@/lib/index";
import { useMutation } from "@apollo/client";
import {
  DeleteProductMutation,
  DeleteProductMutationVariables,
} from "@/generated/DeleteProductMutation";
import { DELETE_PRODUCT_MUTATION } from "@/graphql/index";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

interface IProductDeleteProps {
  id: string;
}

const StyledDeleteButton = styled(Button)<IStyledTheme>`
  background-color: ${(props) => props.theme.colors.ui.error};
  color: ${(props) => props.theme.colors.text.inverse};
  &:hover {
    background-color: ${(props) => props.theme.colors.ui.error_secondary};
  }
`;

export const DeleteProduct = ({ id }: IProductDeleteProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [deleteProduct] = useMutation<DeleteProductMutation, DeleteProductMutationVariables>(
    DELETE_PRODUCT_MUTATION
  );

  if (id)
    return (
      <>
        <StyledDeleteButton m={2} onClick={() => setIsOpen(true)}>
          <Flex alignItems="center">
            <DeleteIcon mr={2} />
            Delete
          </Flex>
        </StyledDeleteButton>
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Product
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can&apos;t undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={async () => {
                    try {
                      await deleteProduct({
                        variables: {
                          id,
                        },
                        update(cache) {
                          cache.evict({
                            fieldName: "allProducts",
                          });
                        },
                      });
                      onClose;
                      router.push("/");
                    } catch (err) {
                      console.error(err);
                      onClose;
                    }
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
  return null;
};
