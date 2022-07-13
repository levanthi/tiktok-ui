import { createSlice } from '@reduxjs/toolkit';
import { writeToLocalStorage } from '../supportFunction';

const initialState = null;

const userSlice = createSlice({
   name: 'login',
   initialState: initialState,
   reducers: {
      login: (state, action) => {
         state = action.payload;
         return state;
      },
      logout: (state) => {
         writeToLocalStorage('autoLogin', false);
         state = null;
         return state;
      },
   },
});

export default userSlice;
