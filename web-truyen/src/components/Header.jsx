import logo from "../images/app-logo.jpg";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
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
      <div className="header-button">
        <Link to="/" className="header-button__link">Đăng nhập</Link>
        <Link to="/" className="header-button__link">Đăng ký</Link>
      </div>
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
          <li>
            <Link to="/" className="menu__item">Đăng nhập</Link>
          </li>
          <li>
            <Link to="/" className="menu__item">Đăng ký</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
