import React from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header({ isLoggedIn, isBlue }) {
  return (
    <header className={`header ${isBlue ? "header_bg-blue" : ""}`}>
      <Link to={"/"} className="header__logo" />
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}
