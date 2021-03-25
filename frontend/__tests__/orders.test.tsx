import { render, useRouter } from "test-utils";
import { MockedProvider } from "@apollo/client/testing";

import OrdersPage from "@/pages/orders";

describe("Orders page", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <MockedProvider>
        <OrdersPage />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
