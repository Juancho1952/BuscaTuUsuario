import { createSlice } from "@reduxjs/toolkit";

const apiGithub = createSlice({
  name: "gitHub",
  initialState: "",
  reducers: {
    setGitHubGlobal: (state, action) => action.payload,
  },
});

export const { setGitHubGlobal } = apiGithub.actions;

export default apiGithub.reducer;
