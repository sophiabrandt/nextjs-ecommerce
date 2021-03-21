import { render, useRouter } from "test-utils";
import { MockedProvider } from "@apollo/client/testing";

import ProductsPage from "@/pages/index";

describe("Index page", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <MockedProvider>
        <ProductsPage />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
