import { render } from "test-utils";
import { MockedProvider } from "@apollo/client/testing";

import IndexPage from "@/pages/index";

describe("Index page", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <MockedProvider>
        <IndexPage />
      </MockedProvider>
    );
    const { container } = render(<IndexPage allProducts={allProducts} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
