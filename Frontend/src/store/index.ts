import { configureStore } from "@reduxjs/toolkit";
import filterreducer from "./reducers/filter";
import emailreducer from "./reducers/emails";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState") as string)
  : {};

const store = configureStore({
  reducer: {
    filter: filterreducer,
    emails: emailreducer,
  },
  preloadedState: {
    filter: persistedState.filter,
    emails: persistedState.emails,
  },
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
export type RootReducer = ReturnType<typeof store.getState>;

export default store;
