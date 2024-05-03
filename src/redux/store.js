// import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./reducer";

// export default configureStore({
//   reducer: {
//     auth: reducer,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
