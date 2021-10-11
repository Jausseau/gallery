import userEvent from "@testing-library/user-event";
import axios from "axios";
import Search from ".";
import { fireEvent, render, screen } from "../../../../utils/test";
import { PhotoType } from "../../types";

jest.mock("axios");

const photo: PhotoType = {
  author: "Me",
  download_url: "some-download-url",
  height: 100,
  id: "237",
  url: "some-url",
  width: 100,
};
describe("Search", () => {
  it("should have label, input, button and reset", () => {
    render(<Search />);

    expect(screen.getByTestId("Search#Label")).toBeVisible();
    expect(screen.getByTestId("Search#Button")).toBeVisible();
    expect(screen.getByTestId("Search#Input")).toBeVisible();
    expect(screen.getByTestId("Search#Reset")).toBeVisible();
    expect(screen.getByTestId("Search#Reset")).toBeDisabled();
  });

  it("should change input value", () => {
    render(<Search />);
    const input = screen.getByTestId("Search#Input");

    userEvent.type(input, "237");

    expect(input).toHaveValue("237");
  });

  it("should change input value", async () => {
    render(<Search />);
    const input = screen.getByTestId("Search#Input");

    userEvent.type(input, "237");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

    const postSpy = jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce({ data: photo });
    expect(postSpy).toBeCalledWith(`https://picsum.photos/id/${photo.id}/info`);
  });
});
