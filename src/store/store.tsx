import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "@/slices/Cartslice";
import wishlistReducer from "@/slices/Wishlistslice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export { store, persistor };
