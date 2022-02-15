import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeType } from "../../typings/Theme";
import { THEME_DEFAULT } from "../../constants/theme";

export interface ThemeState {
  theme: ThemeType;
}

const initialState: ThemeState = {
  theme: THEME_DEFAULT,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
    },
  },
});

export default themeSlice.reducer;
