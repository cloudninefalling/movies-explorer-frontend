import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ isLoggedIn }) {
  return (
    <header className="header">
      <div className="header__logo" />
      <nav aria-label="menu" className="header__nav">
        {isLoggedIn ? (
          <>
            <Link to="/" className="header__nav-link">
              Фильмы
            </Link>
            <Link to="/" className="header__nav-link">
              Сохраненные фильмы
            </Link>
            <Link to="/" className="header__nav-link header__nav-link_right">
              Аккаунт
              <div className="header__nav-link-image" />
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className="header__nav-link header__nav-link_right">
              Регистрация
            </Link>
            <Link to="/" className="header__nav-link header__nav-link_accent">
              Войти
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
