import logo from "../images/app-logo.jpg";

function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Header-search search">
        <button className="search__button" type="submit">Search</button>
        <input
          className="Header-search__input search__input"
          placeholder="Tìm kiếm tên truyện"
          type="search"
        />
      </div>
      <div className="Header-button">
        <a href="/#" className="Header-button__link">Đăng nhập</a>
        <a href="/#" className="Header-button__link">Đăng ký</a>
      </div>
      <div className="hamburger-menu">
        <input id="menu__toggle" className="hamburger-menu__toggle" type="checkbox" />
        <label className="hamburger-menu__btn" htmlFor="menu__toggle"><span></span></label>
        <label className="overlay" htmlFor="menu__toggle"></label>

        <ul className="hamburger-menu__box">
          <li className="search">
            <button className="search__button" type="submit">Search</button>
            <input
              className="search__input"
              placeholder="Tìm kiếm tên truyện"
              type="search"
            />
          </li>
          <li>
            <a href="/#" className="menu__item">Đăng nhập</a>
          </li>
          <li>
            <a href="/#" className="menu__item">Đăng ký</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
