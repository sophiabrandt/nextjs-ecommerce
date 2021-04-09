import { render, useRouter } from "test-utils";
import { MockedProvider } from "@apollo/client/testing";

import DetailPage from "@/pages/product/[id]/index";

describe("Product detail page", () => {
  it("should match the snapshot", () => {
    const product = {
      id: "604f7a030a25a6d84c26dc57",
      title: "Cum assumenda aperiam",
    };
    const { container } = render(
      <MockedProvider>
        <DetailPage id={product.id} title={product.title} />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
