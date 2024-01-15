import "./NavTab.css";

export default function NavTab() {
  return (
    <nav aria-label="page navigation" className="nav-tab">
      <a className="nav-tab__link" href="#about-project">
        О проекте
      </a>
      <a className="nav-tab__link" href="#techs">
        Технологии
      </a>
      <a className="nav-tab__link" href="#about-me">
        Студент
      </a>
    </nav>
  );
}
