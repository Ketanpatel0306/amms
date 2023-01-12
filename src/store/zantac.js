import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Router from "next/router";

// ** Api Imports
import { Zantac } from "src/utils/endpoints/zantac";
import { callApi } from "src/utils/api-utils";

// ** Fetch Target data
export const fetchZantacData = createAsyncThunk(
  "zantac/fetchZantacData",
  async () => {
    const response = callApi({ uriEndPoint: Zantac.zantacList })
      .then((res) => {
        return res;
      })
      .catch((err) => toast.error(err.message ?? "Unable to get zantac list"));

    return response;
  }
);

export const viewZantac = createAsyncThunk("zantac/viewZantac", async (id) => {
  const response = callApi({
    uriEndPoint: Zantac.viewZantacById,
    pathParams: { zantacID: id },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      toast.error(err.message ?? "Unable to get zantac detail");
    });

  return response;
});

export const zantacSlice = createSlice({
  name: "zantac",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchZantacData.fulfilled, (state, action) => {
      state.allData = action.payload.data ?? [];
    });
  },
});

export default zantacSlice.reducer;
