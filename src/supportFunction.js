export const writeToLocalStorage = (key, value) => {
   const data = JSON.parse(localStorage.getItem('tiktok')) || {};
   console.log(data);
   data[key] = value;
   localStorage.setItem('tiktok', JSON.stringify(data));
};
