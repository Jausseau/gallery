import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import reducer, { GalleryState, getList, getPhoto, list, photo } from ".";
import { PhotoType } from "../types";

const initialState: GalleryState = {
  list: {
    data: [],
    status: "idle",
  },
  photo: {
    data: null,
    status: "idle",
  },
};
const photoList: PhotoType[] = [
  {
    author: "Me",
    download_url: "some-download-url",
    height: 100,
    id: "0",
    url: "some-url",
    width: 100,
  },
];

jest.mock("axios");
describe("Gallery store", () => {
  it("should have initial state", () => {
    expect(reducer(initialState, { type: "" })).toEqual(initialState);
  });

  it("should modify list", () => {
    expect(reducer(initialState, list(photoList))).toEqual({
      ...initialState,
      list: {
        data: photoList,
        status: "idle",
      },
    });
  });

  it("should modify photo", () => {
    expect(reducer(initialState, photo(photoList[0]))).toEqual({
      ...initialState,
      photo: {
        data: photoList[0],
        status: "idle",
      },
    });
  });

  it("should get list", async () => {
    const postSpy = jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce({ data: photoList });
    const store = configureStore({
      reducer: function (state = "", action) {
        switch (action.type) {
          case "gallery/getList/fulfilled":
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(getList());
    expect(postSpy).toBeCalledWith("https://picsum.photos/v2/list");
    const state = store.getState();
    expect(state).toEqual(photoList);
  });

  it("should get photo", async () => {
    const postSpy = jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce({ data: photoList[0] });
    const store = configureStore({
      reducer: function (state = "", action) {
        switch (action.type) {
          case "gallery/getPhoto/fulfilled":
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(getPhoto(photoList[0].id));
    expect(postSpy).toBeCalledWith(
      `https://picsum.photos/id/${photoList[0].id}/info`
    );
    const state = store.getState();
    expect(state).toEqual(photoList[0]);
  });

  it("shouldn't get a photo", async () => {
    const store = configureStore({
      reducer: function (state = "", action) {
        switch (action.type) {
          case "gallery/getPhoto/fulfilled":
            return action.payload;
          default:
            return state;
        }
      },
    });
    await store.dispatch(getPhoto());
    const state = store.getState();
    expect(state).toEqual(null);
  });
});
