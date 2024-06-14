import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  first_name: '',
  last_name: '',
  email: '',
  date_joined: '',
  username: '',
}
export const AccountStore = createSlice({
  name: 'account',
  initialState: initialState,
  reducers: {
    changeAccount: (state, action) => {
      state.username = action.payload.username
      state.first_name = action.payload.first_name
      state.last_name = action.payload.last_name
      state.date_joined = action.payload.date_joined
      state.email = action.payload.email
    }
  }
})
export const { changeAccount } = AccountStore.actions