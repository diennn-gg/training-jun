import logo from "../images/app-logo.jpg";
import { Link } from 'react-router-dom'
import avatar from "../images/avatar.jpg";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { removeToken, removeRefreshToken } from "./js/Cookies";
import { useDispatch } from 'react-redux';
import { logout} from '../redux/reducers/authReducer';

function Header() {
  const [ active, setActive ] = useState(false);
  const { dataUser } = useSelector((state) => state.auth);
  const [ visible, setVisible ] = useState(false);
  const dispatch = useDispatch();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  });

  const handleLogOut = () => {
    removeToken();
    removeRefreshToken();
    dispatch(logout())
  }
  
  return (
    <header className={`header${visible ? ' header-sticky' : ''}`}>
      <div className="header-logo">
        <Link className="header-logo__link" to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header-search input-primary">
        <button className="input-primary__button btn-search" type="submit">Search</button>
        <input
          className="header-search__input input-primary__box"
          placeholder="Tìm kiếm tên truyện"
          type="search"
        />
      </div>
      {
        dataUser ? (
          <div className="header-user d-flex flex-direction-row" onClick={() => setActive(!active)}>
            <div className="header-user__avatar">
              <img className="header-user__avatar-img" src={avatar} alt="avatar user"/>
            </div>
            <div className="header-user__name d-flex align-item-center text-sm-medium">
                { dataUser?.name ?? 'Name user' }
                <svg className="header-user__name-svg bi bi-chevron-down" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" >
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"></path>
                </svg>
            </div>
            <div className={`header-user__dropdown ${active ? "active" : ""}`}>
              <ul className="header-user__dropdown-list">
                <li className="header-user__dropdown-list-item text-sm-medium">Profile</li>
                <li className="header-user__dropdown-list-item text-sm-medium">Setting</li>
                <li onClick={handleLogOut} className="header-user__dropdown-list-item user-logout d-flex align-item-center text-sm-medium">
                  Log Out
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="user-logout-svg bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v2a.5.5 0 001 0v-2A1.5 1.5 0 009.5 2h-8A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h8a1.5 1.5 0 001.5-1.5v-2a.5.5 0 00-1 0v2z" ></path>
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 000-.708l-3-3a.5.5 0 00-.708.708L14.293 7.5H5.5a.5.5 0 000 1h8.793l-2.147 2.146a.5.5 0 00.708.708l3-3z" ></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="header-button">
            <Link to="/login" className="header-button__link">Đăng nhập</Link>
            <Link to="/register" className="header-button__link">Đăng ký</Link>
          </div>
        )
      }
      <div className="hamburger-menu">
        <input id="menu__toggle" className="hamburger-menu__toggle" type="checkbox" />
        <label className="hamburger-menu__btn" htmlFor="menu__toggle"><span></span></label>
        <label className="overlay" htmlFor="menu__toggle"></label>

        <ul className="hamburger-menu__box">
          <li className="input-primary">
            <button className="input-primary__button btn-search" type="submit">Search</button>
            <input
              className="input-primary__box"
              placeholder="Tìm kiếm tên truyện"
              type="search"
            />
          </li>
          {
            dataUser ? (
              <>
                <li className="header-user__name d-flex align-item-center text-sm-medium">
                  <div className="header-user__avatar">
                    <img className="header-user__avatar-img" src={avatar} alt="avatar user"/>
                  </div>
                  &nbsp;{ dataUser?.name ?? 'Name user' }
                </li>
                <li onClick={handleLogOut} className="header-user__dropdown-list-item user-logout d-flex align-item-center text-sm-medium">
                  Log Out
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="user-logout-svg bi bi-box-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10 12.5a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h8a.5.5 0 01.5.5v2a.5.5 0 001 0v-2A1.5 1.5 0 009.5 2h-8A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h8a1.5 1.5 0 001.5-1.5v-2a.5.5 0 00-1 0v2z" ></path>
                    <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 000-.708l-3-3a.5.5 0 00-.708.708L14.293 7.5H5.5a.5.5 0 000 1h8.793l-2.147 2.146a.5.5 0 00.708.708l3-3z" ></path>
                  </svg>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="menu__item">Đăng nhập</Link>
                </li>
                <li>
                  <Link to="/register" className="menu__item">Đăng ký</Link>
                </li>
              </>
            )
          }
        </ul>
      </div>
    </header>
  );
}

export default Header;
