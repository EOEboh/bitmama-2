// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from '../features/userSlice';


// export default configureStore({
//     reducer: {
//         user: userReducer,
//     },
// })


// Now to make the page persist after reload or even exiting browser

import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
  } from 'redux-persist';

// also useful for multiple reducers
  const rootReducer = combineReducers({
      user: userReducer
  })

  // persist config object
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
  })


  export let persistor = persistStore(store);
  export default store;