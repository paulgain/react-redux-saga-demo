import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {
    getUsers: (state) => {
      state.isLoading = true
    },
    getUsersSuccess: (state, action) => {
      state.list = action.payload
      state.isLoading = false
    },
    getUsersFailure: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
  }
})

export const { getUsers, getUsersSuccess, getUsersFailure} = userSlice.actions

export default userSlice.reducer
