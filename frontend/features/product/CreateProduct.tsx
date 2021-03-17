import { useForm } from "react-hook-form";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
  Progress,
  Container,
} from "@chakra-ui/react";
import { useCreateProductMutation } from "@/lib/graphql/createProduct.graphql";
import { useRouter } from "next/router";

interface FormData {
  name: string;
  price: string;
  description: string;
  image: FileList;
}

export const CreateProduct = () => {
  const router = useRouter();
  const { register, handleSubmit, errors, formState } = useForm<FormData>();
  const [createProduct, { loading }] = useCreateProductMutation();

  const onSubmit = async (inputData: FormData) => {
    console.log(inputData.image[0]);
    const { data } = await createProduct({
      variables: {
        name: inputData.name,
        price: parseInt(inputData.price, 10),
        description: inputData.description,
        image: inputData.image[0],
      },
    });

    if (data?.createProduct) {
      router.push(`/product/${data.createProduct.id}`);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Progress mb={4} colorScheme="facebook" isIndeterminate={formState.isSubmitting} />
        <fieldset disabled={loading} aria-busy={loading}>
          <FormControl isInvalid={errors.image as boolean | undefined}>
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
          <FormControl isInvalid={errors.name as boolean | undefined}>
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
          <FormControl isInvalid={errors.price as boolean | undefined}>
            <FormLabel m="0" htmlFor="price">
              Price
              <Input
                type="number"
                id="price"
                name="price"
                placeholder="Price for the product"
                ref={register({
                  required: "Please enter a price",
                  max: { value: 1000000, message: "Wooahh, too expensive!" },
                  min: { value: 1, message: "Woooah, is that for free?" },
                })}
              />
            </FormLabel>
            <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.description as boolean | undefined}>
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
            + Add Product
          </Button>
        </fieldset>
      </form>
    </Container>
  );
};
