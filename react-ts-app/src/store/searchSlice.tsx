import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  string: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateString(state, action) {
      state.string = action.payload;
    },
  },
});

export const { updateString } = searchSlice.actions;
export default searchSlice.reducer;
