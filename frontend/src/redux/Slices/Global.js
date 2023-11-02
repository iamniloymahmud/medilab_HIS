import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark",
  user: undefined,
  token: undefined,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state, action) => {
      if (state.mode == "dark") {
        state.mode = "light";
      } else {
        state.mode = "dark";
      }
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export default globalSlice;
export const { setMode, setToken, setUser } = globalSlice.actions;
