import { configureStore } from '@reduxjs/toolkit';
import coverReducer from '../slices/coverSlice';
import bodyReducer from '../slices/bodySlice';

export const store = configureStore({
  reducer: {
    cover: coverReducer,
    body: bodyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
