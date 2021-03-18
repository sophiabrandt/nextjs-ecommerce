import { render } from "test-utils";
import { MockedProvider } from "@apollo/client/testing";

import SellPage from "@/pages/sell";

describe("Sell page", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <MockedProvider>
        <SellPage />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
