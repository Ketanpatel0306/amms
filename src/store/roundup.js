import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Router from "next/router";

// ** Api Imports
import { Roundup } from "src/utils/endpoints/roundup";
import { callApi } from "src/utils/api-utils";

// ** Fetch Target data
export const fetchRoundupData = createAsyncThunk(
  "roundup/fetchRoundupData",
  async () => {
    const response = callApi({ uriEndPoint: Roundup.roundupList })
      .then((res) => {
        return res;
      })
      .catch((err) => toast.error(err.message ?? "Unable to get Roundup list"));

    return response;
  }
);

export const viewRoundup = createAsyncThunk(
  "roundup/viewRoundup",
  async (id) => {
    const response = callApi({
      uriEndPoint: Roundup.viewRoundupById,
      pathParams: { roundupID: id },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        toast.error(err.message ?? "Unable to get Roundup detail");
      });

    return response;
  }
);

export const roundupSlice = createSlice({
  name: "roundup",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoundupData.fulfilled, (state, action) => {
      state.allData = action.payload.data ?? [];
    });
  },
});

export default roundupSlice.reducer;
