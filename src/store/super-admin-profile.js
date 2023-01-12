import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

// ** API Imports
import { superAdminProfile } from 'src/utils/endpoints/super-admin-profile'
import { callApi } from 'src/utils/api-utils'

// ** Admin update
export const updateAdmin = createAsyncThunk('admin/updateAdmin', async data => {
  return callApi({
    uriEndPoint: superAdminProfile.updateAdmin,
    pathParams: { adminID: data.u_id },
    body: data.formData
  })
    .then(res => {
      toast.success(res.message ?? ' Profile updated Successfully')

      return res
    })
    .catch(err => {
      toast.error(err.message ?? 'Unable to update Profile')
    })
})

// **  Admin view
export const viewAdmin = createAsyncThunk('admin/viewAdmin', async id => {
  const response = callApi({ uriEndPoint: superAdminProfile.viewAdminById, pathParams: { adminID: id } })
    .then(res => {
      return res
    })
    .catch(err => {
      toast.error(err.message ?? 'Unable to get profile detail')
    })

  return response
})

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    return builder.addCase(viewAdmin.fulfilled, (state, action) => {
      state.allData = action.payload?.data ?? []
    })
  }
})

export default adminSlice.reducer
