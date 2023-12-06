import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useState } from "react";
export default function Navigation({ isLoggedIn }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <div
          aria-label="open menu"
          className="header__nav header__nav_collapsible"
        >
          <input
            type="checkbox"
            name="header-menu-button"
            id="header__menu-checkbox"
            className="header__menu-checkbox"
            aria-label="Меню навигации"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label
            htmlFor="header__menu-checkbox"
            className="header__menu-button"
          />
          <div className="wrapper"></div>
          <nav className="header__nav-list">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                `header__nav-link ${isActive ? "header__nav-link_active" : ""}`
              }
              onClick={() => setIsChecked(false)}
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive, isPending }) =>
                `header__nav-link ${isActive ? "header__nav-link_active" : ""}`
              }
              onClick={() => setIsChecked(false)}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved"
              className={({ isActive, isPending }) =>
                `header__nav-link ${isActive ? "header__nav-link_active" : ""}`
              }
              onClick={() => setIsChecked(false)}
            >
              Сохраненные фильмы
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive, isPending }) =>
                `header__nav-link header__nav-link_separator ${
                  isActive ? "header__nav-link_active" : ""
                }`
              }
              onClick={() => setIsChecked(false)}
            >
              Аккаунт
              <div className="header__nav-link-image">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.4301 7.96781C8.79193 7.40572 9.75035 6.06478 9.75035 4.5C9.75035 2.42893 8.07141 0.75 6.00035 0.75C3.92928 0.75 2.25035 2.42893 2.25035 4.5C2.25035 6.06473 3.20869 7.40563 4.57045 7.96775C3.1758 8.19993 1.89287 8.76594 0.808594 9.58058L2.19015 11.4194C3.25143 10.6221 4.56898 10.15 6.0001 10.15C7.43122 10.15 8.74877 10.6221 9.81006 11.4194L11.1916 9.58058C10.1074 8.76601 8.82462 8.20003 7.4301 7.96781Z"
                    fill="white"
                  />
                </svg>
              </div>
            </NavLink>
          </nav>
        </div>
      ) : (
        <nav aria-label="menu" className="header__nav">
          <NavLink
            to="/signup"
            className="header__nav-link header__nav-link_right header__nav-link_shrinkable"
          >
            Регистрация
          </NavLink>
          <NavLink
            to="/signin"
            className="header__nav-link header__nav-link_accent header__nav-link_shrinkable"
          >
            Войти
          </NavLink>
        </nav>
      )}
    </>
  );
}
