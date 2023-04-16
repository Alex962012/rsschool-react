import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allProduct, searchProduct } from "../api";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (string: string) => {
    if (string === "") {
      return allProduct();
    } else {
      return searchProduct(string);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    search: "",
    error: "",
    isLoading: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, () => {});
  },
});

export default productsSlice.reducer;
