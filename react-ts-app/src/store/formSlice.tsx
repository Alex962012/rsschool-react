import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "component/form/FormCard";
const initialState: CardType[] = [];
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action: PayloadAction<CardType>) => {
      state.push(action.payload);
    },
  },
});
export const { updateForm } = formSlice.actions;
export default formSlice.reducer;
