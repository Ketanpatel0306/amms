import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Router from "next/router";

// ** Api Imports
import { Herniamesh } from "src/utils/endpoints/herniamesh";
import { callApi } from "src/utils/api-utils";

// ** Fetch Target data
export const fetchHerniameshData = createAsyncThunk(
  "herniamesh/fetchHerniameshData",
  async () => {
    const response = callApi({ uriEndPoint: Herniamesh.herniameshList })
      .then((res) => {
        return res;
      })
      .catch((err) =>
        toast.error(err.message ?? "Unable to get Herniamesh list")
      );

    return response;
  }
);

export const viewHerniamesh = createAsyncThunk(
  "herniamesh/viewHerniamesh",
  async (id) => {
    const response = callApi({
      uriEndPoint: Herniamesh.viewHerniameshById,
      pathParams: { herniameshID: id },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        toast.error(err.message ?? "Unable to get Herniamesh detail");
      });

    return response;
  }
);

export const herniameshSlice = createSlice({
  name: "herniamesh",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHerniameshData.fulfilled, (state, action) => {
      state.allData = action.payload.data ?? [];
    });
  },
});

export default herniameshSlice.reducer;
