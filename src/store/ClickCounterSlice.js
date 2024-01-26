import { createSlice } from "@reduxjs/toolkit";

export const clickCounterSlice = createSlice({
  name: "clickCounter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, decrement, reset } = clickCounterSlice.actions;

export const selectCount = (state) => state.clickCounter.count;

export default clickCounterSlice.reducer;
