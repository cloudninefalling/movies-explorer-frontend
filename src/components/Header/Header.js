import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo" />
      <nav className="header__nav">
        <Link to="/" className="header__nav-link">
          Фильмы
        </Link>
      </nav>
    </header>
  );
}
