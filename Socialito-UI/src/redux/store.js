import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";



export const store = configureStore({
  reducer: {
      user:userReducer
  }
});

export let persistor = persistStore(store);