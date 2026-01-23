import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
  query?: string;
  category: "Produtivo" | "Improdutivo" | "all";
};

const initialState: FilterState = {
  query: "",
  category: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setFilter: (state, action: PayloadAction<FilterState>) => {
      state.category = action.payload.category;
    },
  },
});

export const { setQuery, setFilter } = filterSlice.actions;
export default filterSlice.reducer;
