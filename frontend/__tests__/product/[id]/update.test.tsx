import { render, useRouter } from "test-utils";
import { MockedProvider } from "@apollo/client/testing";
import { ProductQuery_Product } from "@/generated/ProductQuery";

import UpdatePage from "@/pages/product/[id]/update";

describe("Update product page", () => {
  it("should match the snapshot", () => {
    const product: ProductQuery_Product = {
      __typename: "Product",
      status: "AVAILABLE",
      id: "604f7a030a25a6d84c26dc57",
      name: "Cum assumenda aperiam",
      price: 14358,
      description:
        "Sint voluptatum optio Veniam et id earum. Voluptas quos ducimus et expedita rerum. Sunt et voluptate molestiae quibusdam error tenetur. Tenetur repellat vel nostrum sit voluptates ad ab voluptate. Blanditiis mollitia voluptates in est dolores animi sunt. Quis consequuntur id quisquam qui et alias.\n\nCupiditate non et maiores sed dolores velit. Ea dolores id quisquam dignissimos quod sit amet. Molestias dignissimos eum deserunt repudiandae eum. Porro illo vel distinctio corrupti.\n\nAut possimus maiores quos tenetur adipisci deleniti. Non aut necessitatibus aliquid perspiciatis aliquid sint inventore. Sunt et eligendi eos ab sunt ut.",
      photo: {
        __typename: "ProductImage",
        altText: null,
        id: "604f79f20a25a6d84c26dc56",
        image: {
          __typename: "CloudinaryImage_File",
          publicUrlTransformed:
            "https://res.cloudinary.com/cyclonedisco/image/upload/v1615821502/nextjs-ecommerce/604f79f10a25a6d84c26dc55.jpg",
        },
      },
    };
    const { container } = render(
      <MockedProvider>
        <UpdatePage product={product} />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
