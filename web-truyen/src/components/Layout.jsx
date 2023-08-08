import Header from './Header'
import { Outlet } from 'react-router-dom'
import ScrollButton from "./js/ScrollButton";
import Toast from "./js/Toast";
import Footer from './Footer'
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setDataUser } from '../redux/reducers/authReducer';
import { axiosPublic } from "./js/AxiosPublic";
import { showToastError } from "./js/Toast";
import { getToken } from "./js/Cookies";

function Layout() {
  const token = getToken();
  const dispatch = useDispatch();

  useEffect(() => {
    if(token) {
      ( async () => {
        try {
          const { data } = await axiosPublic.get('/auth/me');
          dispatch(setDataUser(data));
        } catch (error) {
          showToastError(`[Get User]:${error.message}`, 'get_me_id');
        }
      })();
    }
  },[token, dispatch])

  return (
    <div className="app">
      <Header/>
      <div className="main">
        <Outlet/>
        <ScrollButton />
      </div>
      <Toast/>
      <Footer/>
    </div>
  );
}

export default Layout;
