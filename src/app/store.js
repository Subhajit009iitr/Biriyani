import { configureStore } from '@reduxjs/toolkit';
import coverReducer from '../slices/coverSlice';
import bodyReducer from '../slices/bodySlice';
import marketBodyReducer from '../slices/marketBodySlice';

export const store = configureStore({
  reducer: {
    cover: coverReducer,
    body: bodyReducer,
    marketplace: marketBodyReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});
