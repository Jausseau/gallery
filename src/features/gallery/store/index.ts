import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../app/store";
import { PhotoType } from "../types";

export interface GalleryState {
  list: {
    data: PhotoType[];
    status: "idle" | "loading" | "failed" | "fulfilled";
  };
  photo: {
    data: PhotoType | null;
    status: "idle" | "loading" | "failed" | "fulfilled";
  };
}

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

export const getList = createAsyncThunk("gallery/getList", async () => {
  const response = await axios.get<PhotoType[]>(
    "https://picsum.photos/v2/list"
  );
  return response.data;
});

export const getPhoto = createAsyncThunk(
  "gallery/getPhoto",
  async (search?: string) => {
    if (!search) return null;
    const response = await axios.get<PhotoType>(
      `https://picsum.photos/id/${search}/info`
    );
    return response.data;
  }
);

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    list: (state, action: PayloadAction<PhotoType[]>) => {
      state.list.data = action.payload;
    },
    photo: (state, action: PayloadAction<PhotoType>) => {
      state.photo.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.list.status = "loading";
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.list.status = "fulfilled";
        state.list.data = action.payload;
      })
      .addCase(getPhoto.pending, (state) => {
        state.photo.status = "loading";
      })
      .addCase(getPhoto.fulfilled, (state, action) => {
        state.photo.data = action.payload;
        state.photo.status = action.payload === null ? "idle" : "fulfilled";
      });
  },
});

export const { list, photo } = gallerySlice.actions;

export const selectList = (state: RootState) => state.gallery.list;
export const selectPhoto = (state: RootState) => state.gallery.photo;

export default gallerySlice.reducer;
