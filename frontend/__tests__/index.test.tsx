import { render } from "test-utils";

import IndexPage from "@/pages/index";

describe("Index page", () => {
  it("should match the snapshot", () => {
    const allProducts = [
      {
        id: "604f7e230a25a6d84c26dc85",
        name: "A ut architecto",
        price: 8246,
        description:
          "Animi repellendus perferendis Quia ipsum magnam ipsum id quos. Dolores ipsam architecto autem libero. Debitis itaque tempore laudantium.\n" +
          "\n" +
          "Officia libero tempore aut voluptatem quia eos occaecati. In earum quasi sunt voluptatem sunt ut. Voluptas consequatur ullam dicta qui voluptatibus enim.\n" +
          "\n" +
          "Et ut porro amet consequatur molestiae blanditiis cupiditate est. Sequi est ut ut laboriosam consequatur. Maxime sunt consequatur voluptatem blanditiis eum inventore accusamus nostrum. Occaecati distinctio quis doloribus. Dolores omnis consequatur est nisi a ipsum et.",
        photo: {
          id: "604f7e250a25a6d84c26dc87",
          image: {
            publicUrlTransformed:
              "https://res.cloudinary.com/cyclonedisco/image/upload/v1615822577/nextjs-ecommerce/604f7e240a25a6d84c26dc86.jpg",
          },
        },
      },
      {
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
      },
    ];
    const { container } = render(<IndexPage allProducts={allProducts} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
