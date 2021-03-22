import { render, useRouter } from "test-utils";
import { MockedProvider } from "@apollo/client/testing";

import SignInPage from "@/pages/signin";

describe("Signin page", () => {
  it("should match the snapshot", () => {
    const { container } = render(
      <MockedProvider>
        <SignInPage />
      </MockedProvider>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
