import { createSlice } from "@reduxjs/toolkit";

const hasError = createSlice({
  name: "hasError",
  initialState: false,
  reducers: {
    setHasError: (state, action) => action.payload,
  },
});

export const { setHasError } = hasError.actions;

export default hasError.reducer;