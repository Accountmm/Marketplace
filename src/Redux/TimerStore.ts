import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  time: '1:0:0:0'
}
export const TimerStore = createSlice({
  name: 'timer',
  initialState: initialState,
  reducers: {
    changeTime: (state, action) => {
      state.time = action.payload
    }
  }
})
export const { changeTime } = TimerStore.actions