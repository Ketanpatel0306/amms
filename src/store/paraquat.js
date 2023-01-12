import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import Router from "next/router";

// ** Api Imports
import { Paraquat } from "src/utils/endpoints/paraquat";
import { callApi } from "src/utils/api-utils";

// ** Fetch Target data
export const fetchParaquatData = createAsyncThunk(
  "paraquat/fetchParaquatData",
  async () => {
    const response = callApi({ uriEndPoint: Paraquat.paraquatList })
      .then((res) => {
        return res;
      })
      .catch((err) =>
        toast.error(err.message ?? "Unable to get Paraquat list")
      );

    return response;
  }
);

export const viewParaquat = createAsyncThunk(
  "paraquat/viewParaquat",
  async (id) => {
    const response = callApi({
      uriEndPoint: Paraquat.viewParaquatById,
      pathParams: { paraquatID: id },
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        toast.error(err.message ?? "Unable to get Paraquat detail");
      });

    return response;
  }
);

export const paraquatSlice = createSlice({
  name: "paraquat",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchParaquatData.fulfilled, (state, action) => {
      state.allData = action.payload.data ?? [];
    });
  },
});

export default paraquatSlice.reducer;
