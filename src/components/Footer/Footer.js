import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text footer__addendum footer__text_grey">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__list">
        <p className="footer__text footer__last">© 2020</p>
        <a
          href="https://practicum.yandex.ru/"
          rel="noreferrer"
          target="_blank"
          className="footer__text footer__link footer__text_margin-auto"
        >
          Яндекс.Практикум
        </a>
        <a
          href="https://github.com/cloudninefalling"
          rel="noreferrer"
          target="_blank"
          className="footer__text footer__link"
        >
          Github
        </a>
      </div>
    </footer>
  );
}
