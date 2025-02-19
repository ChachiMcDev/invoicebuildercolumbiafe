import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { setupListeners } from "@reduxjs/toolkit/query";
import { getInvoicesApi } from "../api/getInvoices";
import filtersSlice from "../slicereducers/filterSlice";

export default () => {
  const rootReducer = combineReducers({
    [getInvoicesApi.reducerPath]: getInvoicesApi.reducer,
    filters: filtersSlice.reducer,
  });

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat([
        thunk,
        getInvoicesApi.middleware,
      ]),
  });

  setupListeners(store.dispatch);

  return store;
};
