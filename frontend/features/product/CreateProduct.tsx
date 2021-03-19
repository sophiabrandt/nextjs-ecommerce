import { useCreateProductMutation } from "@/lib/graphql/createProduct.graphql";
import { DisplayError } from "@/components/index";
import { ALL_PRODUCTS_QUERY, IAllProducts } from "@/lib/index";
import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Progress,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

interface IFormData {
  name: string;
  price: string;
  description: string;
  image: FileList;
}

export const CreateProduct = () => {
  const router = useRouter();
  const { register, handleSubmit, errors, formState } = useForm<IFormData>();
  const [createProduct, { error, loading }] = useCreateProductMutation();

  const onSubmit = async (inputData: IFormData) => {
    const { data } = await createProduct({
      variables: {
        name: inputData.name,
        price: parseInt(inputData.price, 10),
        description: inputData.description,
        image: inputData.image[0],
      },
      update(cache, { data }) {
        const newProduct = data?.createProduct;
        // eslint-disable-next-line
        const existingProducts = cache.readQuery<IAllProducts>({
          query: ALL_PRODUCTS_QUERY,
        })!.allProducts;

        if (existingProducts && newProduct) {
          cache.writeQuery({
            query: ALL_PRODUCTS_QUERY,
            data: {
              allProducts: [...existingProducts, newProduct],
            },
          });
        }
      },
    });

    if (data?.createProduct) {
      router.push(`/product/${data.createProduct.id}`);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DisplayError error={error} />
        <Progress mb={4} colorScheme="facebook" isIndeterminate={formState.isSubmitting} />
        <fieldset disabled={loading} aria-busy={loading}>
          <FormControl isInvalid={Boolean(errors?.image)}>
            <FormLabel m="0" htmlFor="image">
              Image
              <Input
                aceept="image/*"
                type="file"
                id="image"
                name="image"
                ref={register({
                  validate: (fileList: FileList) => {
                    if (fileList.length === 1) return true;
                    return "Please upload one file";
                  },
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.image && errors.image.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.name)}>
            <FormLabel m="0" htmlFor="name">
              Name
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Product name"
                ref={register({
                  required: "Please enter a product name",
                  minLength: {
                    value: 5,
                    message: "Min length is 5",
                  },
                  maxLength: {
                    value: 255,
                    message: "Max length is 255",
                  },
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.price)}>
            <FormLabel m="0" htmlFor="price">
              Price
              <Input
                type="number"
                id="price"
                name="price"
                placeholder="Price for the product in cents"
                ref={register({
                  required: "Please enter a price (in cents)",
                  max: { value: 1000000, message: "Wooahh, too expensive!" },
                  min: { value: 1, message: "Woooah, is that for free?" },
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors.description)}>
            <FormLabel m="0" htmlFor="description">
              Description
              <Textarea
                id="description"
                name="description"
                placeholder="Describe the product here"
                ref={register({
                  required: "Please enter a description",
                  minLength: {
                    value: 50,
                    message: "Please write a short description, at least 50 characters.",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Description must be maxium 1000 characters, sorry!",
                  },
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
          </FormControl>
          <Button mt={4} colorScheme="whatsapp" isDisabled={loading} type="submit">
            <AddIcon mr={2} />
            Add Product
          </Button>
        </fieldset>
      </form>
    </Container>
  );
};
