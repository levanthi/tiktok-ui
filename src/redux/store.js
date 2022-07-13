import { configureStore } from '@reduxjs/toolkit';

import volumeSlice from './volumeSlice';
import userSlice from './userSlice';

export const store = configureStore({
   reducer: {
      volume: volumeSlice.reducer,
      user: userSlice.reducer,
   },
});
