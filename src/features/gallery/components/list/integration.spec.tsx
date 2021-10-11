import List from ".";
import { render, screen } from "../../../../utils/test";

describe("List", () => {
  it("should have loader at start", () => {
    render(<List />);

    expect(screen.getByTestId("List#Loader")).toBeVisible();
  });
});
