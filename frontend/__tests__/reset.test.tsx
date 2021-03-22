import { render, useRouter } from "test-utils";
import { MockedProvider } from "@apollo/client/testing";

import ResetPage from "@/pages/reset";

describe("Reset page", () => {
  it("should match the snapshot without token", () => {
    const { container } = render(
      <MockedProvider>
        <ResetPage />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should match the snapshot with token", () => {
    const token = "PuM6g9wpr9LSIawCllwH";
    const { container } = render(
      <MockedProvider>
        <ResetPage token={token} />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
