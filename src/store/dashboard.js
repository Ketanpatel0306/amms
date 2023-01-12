import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// ** Api Imports
import { dashboard } from "src/utils/endpoints/dashboard";
import { callApi } from "src/utils/api-utils";

// ** Fetch Target data
export const fetchDashboard = createAsyncThunk(
  "dashboard/fetchDashboard",
  async () => {
    const response = callApi({ uriEndPoint: dashboard.dashboardList })
      .then((res) => {
        return res;
      })
      .catch((err) =>
        toast.error(err.message ?? "Unable to get dashboard list")
      );

    return response;
  }
);
export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    allData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDashboard.fulfilled, (state, action) => {
      state.allData = action.payload.data ?? [];
    });
  },
});
export default dashboardSlice.reducer;
