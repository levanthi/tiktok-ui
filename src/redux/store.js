import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './rootReducer';
import volumeSlice from './volumeSlice';
export const store = configureStore({
   reducer: {
      volume: volumeSlice.reducer,
   },
});
