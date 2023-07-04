import logo from '../images/app-logo.jpg';

function Header () {
    return (
        <header className="Header">
          <div className="Header-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="Header-search">
            <button type="submit">Search</button>
            <input className="Header-search__input" placeholder="Tìm kiếm tên truyện" type="search"/>
          </div>
          <div className="Header-button">
            <a href="/#">Đăng nhập</a>
            <a href="/#">Đăng ký</a>
          </div>
        </header>
    )
}

export default Header;