
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {

  darkMode: boolean;
}

const initialState: CounterState = {
  darkMode: false,
};

const userSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = userSlice.actions;

export default userSlice.reducer;

