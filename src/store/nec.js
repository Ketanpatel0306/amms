import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Router from "next/router";

// ** Api Imports
import { NEC } from "src/utils/endpoints/nec";
import { callApi } from "src/utils/api-utils";

// ** Fetch Target data
export const fetchNECData = createAsyncThunk("nec/fetchNECData", async () => {
  const response = callApi({ uriEndPoint: NEC.necList })
    .then((res) => {
      return res;
    })
    .catch((err) => toast.error(err.message ?? "Unable to get NEC list"));

  return response;
});

export const viewNEC = createAsyncThunk("nec/viewNEC", async (id) => {
  const response = callApi({
    uriEndPoint: NEC.viewNECById,
    pathParams: { necID: id },
  })
    .then((res) => {
     
      return res.data;
    })
    .catch((err) => {
      toast.error(err.message ?? "Unable to get NEC detail");
    });

  return response;
});

export const necSlice = createSlice({
  name: "nec",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNECData.fulfilled, (state, action) => {
      state.allData = action.payload.data ?? [];
    });
  },
});

export default necSlice.reducer;
