import { render } from "test-utils";

const useRouter = jest.spyOn(require("next/router"), "useRouter");
useRouter.mockImplementation(() => ({
  pathname: "/",
}));

import DetailPage from "@/pages/product/[id]/index.tsx";

describe("Product detail page", () => {
  it("should match the snapshot", () => {
    const product = {
      id: "604f7a030a25a6d84c26dc57",
      title: "Cum assumenda aperiam",
    };
    const { container } = render(<DetailPage product={product} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
