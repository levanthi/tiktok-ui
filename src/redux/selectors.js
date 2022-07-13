export const volumeSelector = (state) => {
   return state.volume.volume;
};

export const isMutedSelector = (state) => {
   return state.volume.isMuted;
};

export const userSelector = (state) => {
   return state.user;
};
