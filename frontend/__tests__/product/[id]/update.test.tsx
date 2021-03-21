import { render } from "test-utils";
import { MockedProvider } from "@apollo/client/testing";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
useRouter.mockImplementation(() => ({
  pathname: "/",
}));

import UpdatePage from "@/pages/product/[id]/update.tsx";

describe("Update product page", () => {
  it("should match the snapshot", () => {
    const product = {
      id: "604f7a030a25a6d84c26dc57",
      name: "Cum assumenda aperiam",
      price: 14358,
      description:
        "Sint voluptatum optio Veniam et id earum. Voluptas quos ducimus et expedita rerum. Sunt et voluptate molestiae quibusdam error tenetur. Tenetur repellat vel nostrum sit voluptates ad ab voluptate. Blanditiis mollitia voluptates in est dolores animi sunt. Quis consequuntur id quisquam qui et alias.\n\nCupiditate non et maiores sed dolores velit. Ea dolores id quisquam dignissimos quod sit amet. Molestias dignissimos eum deserunt repudiandae eum. Porro illo vel distinctio corrupti.\n\nAut possimus maiores quos tenetur adipisci deleniti. Non aut necessitatibus aliquid perspiciatis aliquid sint inventore. Sunt et eligendi eos ab sunt ut.",
      photo: {
        id: "604f79f20a25a6d84c26dc56",
        image: {
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
