import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isRegistered: false
}
export const AuthStore = createSlice({
  name: 'auht',
  initialState: initialState,
  reducers: {
    changeRegister: (state) => {
      state.isRegistered = !state.isRegistered
    }
  }
})
export const { changeRegister } = AuthStore.actions