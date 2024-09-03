import { configureStore } from '@reduxjs/toolkit';
import coverReducer from '../slices/coverSlice';

export const store = configureStore({
    reducer: {
      cover: coverReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  });