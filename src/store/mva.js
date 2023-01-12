import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Router from "next/router";

// ** Api Imports
import { MVA } from "src/utils/endpoints/mva";
import { callApi } from "src/utils/api-utils";

// ** Fetch Target data
export const fetchMVAData = createAsyncThunk("mva/fetchMVAData", async () => {
  const response = callApi({ uriEndPoint: MVA.mvaList })
    .then((res) => {
      return res;
    })
    .catch((err) => toast.error(err.message ?? "Unable to get MVA list"));

  return response;
});

export const viewMVA = createAsyncThunk("mva/viewMVA", async (id) => {
  const response = callApi({
    uriEndPoint: MVA.viewMVAById,
    pathParams: { mvaID: id },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      toast.error(err.message ?? "Unable to get MVA detail");
    });

  return response;
});

export const mvaSlice = createSlice({
  name: "mva",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMVAData.fulfilled, (state, action) => {
      state.allData = action.payload.data ?? [];
    });
  },
});

export default mvaSlice.reducer;
