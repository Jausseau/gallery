import { render, screen } from "../../../../utils/test";
import { PhotoType } from "../../types";

import Photo from ".";

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
    render(<Photo photo={photo} />);

    expect(screen.getByTestId("Photo#OpenUrl")).toBeVisible();
    expect(screen.getByTestId("Photo#Img")).toBeVisible();
    expect(screen.getByTestId("Photo#Author")).toBeVisible();
    expect(screen.getByTestId("Photo#Author")).toHaveTextContent(photo.author);
  });
});
