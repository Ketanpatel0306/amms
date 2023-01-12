import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Router from "next/router";

// ** Api Imports
import { Talcum } from "src/utils/endpoints/talcum";
import { callApi } from "src/utils/api-utils";

// ** Fetch Target data
export const fetchTalcumData = createAsyncThunk(
  "talcum/fetchTalcumData",
  async () => {
    const response = callApi({ uriEndPoint: Talcum.talcumList })
      .then((res) => {
        return res;
      })
      .catch((err) => toast.error(err.message ?? "Unable to get Talcum list"));

    return response;
  }
);

export const viewTalcum = createAsyncThunk("talcum/viewTalcum", async (id) => {
  const response = callApi({
    uriEndPoint: Talcum.viewTalcumById,
    pathParams: { talcumID: id },
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      toast.error(err.message ?? "Unable to get Talcum detail");
    });

  return response;
});

export const talcumSlice = createSlice({
  name: "talcum",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTalcumData.fulfilled, (state, action) => {
      state.allData = action.payload.data ?? [];
    });
  },
});

export default talcumSlice.reducer;
