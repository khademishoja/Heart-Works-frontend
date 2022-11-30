import { configureStore } from "@reduxjs/toolkit";

import appStateReducer from "./appState/slice";
import userReducer from "./user/slice";
import artWorkReducer from "./artworks/slice";

export default configureStore({
  reducer: {
    appState: appStateReducer,
    user: userReducer,
    artWork: artWorkReducer,
  },
});
