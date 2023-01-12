// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

// ** API Imports
import { staticPage } from 'src/utils/endpoints/static-page'
import { callApi } from 'src/utils/api-utils'

// ** list staticPage
export const fetchStaticPage = createAsyncThunk('static/fetchStaticPage', async () => {
  const response = await callApi({ uriEndPoint: staticPage.staticList })
    .then(res => {
      return res
    })
    .catch(err => {
      toast.error(err.message ?? 'Unable to get staticPage list')
    })

  return response
})

// ** view staticPage
export const viewStaticPage = createAsyncThunk('static/viewStaticPage', async (u_id, { getState, dispatch }) => {
  return callApi({ uriEndPoint: staticPage.staticView, pathParams: { u_id } })
    .then(res => {
      dispatch(fetchStaticPage(getState().staticPage))

      return res
    })
    .catch(err => {
      toast.error(err.message ?? 'Unable to staticPage')
    })
})

// ** Add staticPage
export const addStaticPage = createAsyncThunk('static/addStaticPage', async (body, { getState, dispatch }) => {
  return callApi({ uriEndPoint: staticPage.staticAdd, body })
    .then(res => {
      dispatch(fetchStaticPage(getState().staticPage))

      toast.success(res.message ?? 'staticPage Add Successfully')

      return res
    })
    .catch(err => {
      toast.error(err.message ?? 'Unable to staticPage')
    })
})

// ** Delete staticPage
export const deleteStaticPage = createAsyncThunk('static/deleteStaticPage', async (u_id, { getState, dispatch }) => {
  return callApi({ uriEndPoint: staticPage.staticDelete, pathParams: { u_id } })
    .then(res => {
      dispatch(fetchStaticPage(getState().staticPage))

      toast.success(res.message ?? 'staticPage Deleted Successfully')

      return res
    })
    .catch(err => {
      toast.error(err.message ?? 'Unable to staticPage')
    })
})

// ** update staticPage
export const updateStaticPage = createAsyncThunk('static/updateStaticPage', async (data, { getState, dispatch }) => {
  const body = data.data

  return callApi({ uriEndPoint: staticPage.staticEdit, pathParams: { u_id: data.u_id }, body })
    .then(res => {
      dispatch(fetchStaticPage(getState().staticPage))
      toast.success(res.message ?? 'staticPage Update Successfully')

      return res
    })
    .catch(err => {
      toast.error(err.message ?? 'Failed to staticPage Update')
    })
})

// ** view staticPage
export const viewSlugPage = createAsyncThunk('static/viewStaticPage', async (slug, { getState, dispatch }) => {
  return callApi({ uriEndPoint: staticPage.staticSlug, pathParams: { slug } })
    .then(res => {
      return res
    })
    .catch(err => {
      toast.error(err.message ?? 'Unable to staticPage')
    })
})

export const staticSlice = createSlice({
  name: 'static',
  initialState: {
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchStaticPage.fulfilled, (state, action) => {
      state.allData = action.payload?.data ?? []
    })
  }
})

export default staticSlice.reducer
