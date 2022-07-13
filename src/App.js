import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import userSlice from './redux/userSlice';
import { publicRoutes } from './routes';
import { DefaultLayout } from './Layout';
function App() {
   const dispatch = useDispatch();
   useEffect(() => {
      axios
         .get('https://localhost:3001/auth/login/success', {
            params: {
               autoLogin: JSON.parse(localStorage.getItem('tiktok'))?.autoLogin,
            },
         })
         .then((res) => {
            const user = res.data.user;
            if (user) {
               dispatch(
                  userSlice.actions.login({
                     name: user.displayName,
                     id: user.id,
                     thumbnail: user.photos[0].value,
                     gender: user.gender,
                     birth: user.birth,
                  }),
               );
            }
         });
   }, []);
   return (
      <Router>
         <Routes>
            {publicRoutes.map((route, index) => {
               let Page = route.component;
               let Layout = DefaultLayout;
               if (route.layout === null) {
                  Layout = Fragment;
               } else if (route.layout) {
                  Layout = route.layout;
               }
               return (
                  <Route
                     key={index}
                     path={route.path}
                     element={
                        <Layout>
                           <Page />
                        </Layout>
                     }
                  />
               );
            })}
         </Routes>
      </Router>
   );
}

export default App;
