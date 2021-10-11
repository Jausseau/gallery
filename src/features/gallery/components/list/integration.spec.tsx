import { render, screen } from "../../../../utils/test";

import List from ".";

describe("List", () => {
  it("should have loader at start", () => {
    render(<List />);

    expect(screen.getByTestId("List#Loader")).toBeVisible();
  });
});
