import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Router from "next/router";

// ** Api Imports
import { CampLejune } from "src/utils/endpoints/camp-lejune";
import { callApi } from "src/utils/api-utils";

// ** Fetch Target data
export const fetchCampLejuneData = createAsyncThunk(
  "campLejune/fetchCampLejuneData",
  async () => {
    const response = callApi({ uriEndPoint: CampLejune.campLejuneList })
      .then((res) => {
        return res;
      })
      .catch((err) =>
        toast.error(err.message ?? "Unable to get CampLejune list")
      );

    return response;
  }
);

export const viewCampLejune = createAsyncThunk(
  "campLejune/viewCampLejune",
  async (id) => {
    const response = callApi({
      uriEndPoint: CampLejune.viewCampLejuneById,
      pathParams: { campLejuneID: id },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        toast.error(err.message ?? "Unable to get campLejune detail");
      });

    return response;
  }
);

export const campLejuneSlice = createSlice({
  name: "campLejune",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCampLejuneData.fulfilled, (state, action) => {
      state.allData = action.payload.data ?? [];
    });
  },
});

export default campLejuneSlice.reducer;
