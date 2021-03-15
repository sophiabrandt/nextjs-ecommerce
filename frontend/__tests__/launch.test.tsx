import { render } from "test-utils";

import LaunchPage from "@/pages/launch";

describe("Launch page", () => {
  it("should match the snapshot", () => {
    const launch = {
      timestamp: 1605401340000,
      mission: "Mission Name",
      site: "Kennedy Space Center",
      rocket: "Falcon 9",
    };
    const { container } = render(<LaunchPage launch={launch} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
