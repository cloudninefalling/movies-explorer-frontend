import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

export default function Header({ isLoggedIn, isBlue }) {
  return (
    <header className={`header ${isBlue ? "header_bg-blue" : ""}`}>
      <div className="header__logo" />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}
