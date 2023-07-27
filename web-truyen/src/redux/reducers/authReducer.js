import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser } from '../actions/authAction'

const initialState = {
  loading: false,
  error: null,
  success: false,
  dataUser: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDataUser: (state, action) => {
      state.dataUser = action.payload
    },
    cleanState: (state) => {
      state.loading = false
      state.error = null
      state.success = false
    }
  },
  extraReducers: {
    // -----Register----//
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // ----Login----//
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.dataUser = payload
      state.success = true
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})
export const { setDataUser, cleanState } = authSlice.actions
export default authSlice.reducer
