import { render } from "@testing-library/react";
import Photo from ".";
import { PhotoType } from "../../types";

const photo: PhotoType = {
  author: "Me",
  download_url: "some-download-url",
  height: 100,
  id: "0",
  url: "some-url",
  width: 100,
};

describe("Photo", () => {
  it("should have the open button, the img and the author", () => {
    const { getByTestId } = render(<Photo photo={photo} />);

    expect(getByTestId("Photo#OpenUrl")).toBeVisible();
    expect(getByTestId("Photo#Img")).toBeVisible();
    expect(getByTestId("Photo#Author")).toBeVisible();
    expect(getByTestId("Photo#Author")).toHaveTextContent(photo.author);
  });
});
