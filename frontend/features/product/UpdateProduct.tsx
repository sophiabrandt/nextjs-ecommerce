import { useUpdateProductMutation } from "@/lib/graphql/updateProduct.graphql";
import { EditIcon } from "@chakra-ui/icons";
import { IProduct } from "@/lib/index";
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

interface IVariables {
  id: string;
  imageId: string;
  name: string;
  description: string;
  price: number;
  image?: File;
}

export const UpdateProduct = ({ product }: IProduct) => {
  const router = useRouter();
  const { register, handleSubmit, errors, formState } = useForm<IFormData>({
    defaultValues: {
      name: product?.name || "",
      price: String(product?.price) || "",
      description: product?.description || "",
      image: "",
    },
  });
  const [updateProduct, { loading }] = useUpdateProductMutation();

  const onSubmit = async (inputData: IFormData) => {
    let variables: IVariables = {
      id: product?.id,
      imageId: product?.photo?.id as string,
      name: inputData.name,
      description: inputData.description,
      price: parseInt(inputData.price, 10),
    };
    if (inputData.image) {
      variables = {
        ...variables,
        image: inputData.image[0],
      };
    }
    const { data } = await updateProduct({
      variables,
    });
    if (data?.updateProduct) {
      router.push(`/product/${data.updateProduct.id}`);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                  required: false,
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
            <EditIcon mr={2} /> Edit
          </Button>
        </fieldset>
      </form>
    </Container>
  );
};
