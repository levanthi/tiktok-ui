import { createSlice } from '@reduxjs/toolkit';
import { writeToLocalStorage } from '../supportFunction';

const initialState = JSON.parse(localStorage.getItem('tiktok')) || {
   volume: 0.5,
   isMuted: false,
};
const volumeSlice = createSlice({
   name: 'volume',
   initialState: initialState,
   reducers: {
      volumeChange: (state, action) => {
         state.volume = action.payload;
         writeToLocalStorage('volume', action.payload);
         if (action.payload === 0) {
            state.isMuted = true;
            writeToLocalStorage('isMuted', true);
         } else {
            state.isMuted = false;
            writeToLocalStorage('isMuted', false);
         }
      },
      mutedToggle: (state) => {
         if (state.isMuted && state.volume === 0) {
            state.volume = 0.5;
            writeToLocalStorage('volume', 0.5);
         }

         state.isMuted = !state.isMuted;
         writeToLocalStorage('isMuted', state.isMuted);
      },
   },
});

export default volumeSlice;
