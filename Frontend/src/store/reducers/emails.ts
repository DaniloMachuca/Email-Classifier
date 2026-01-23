import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import EmailClass from "../../models/EmailClass";

type EmailsState = {
  list: EmailClass[];
};

const initialState: EmailsState = {
  list: [],
};

const emailsSlice = createSlice({
  name: "emails",
  initialState,
  reducers: {
    addEmail: (state, action: PayloadAction<EmailClass>) => {
      state.list.push(action.payload);
    },
    removeEmail: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addEmail, removeEmail } = emailsSlice.actions;
export default emailsSlice.reducer;
