import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text footer__addendum">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer__list">
        <p className="footer__text">© 2020</p>
        <p className="footer__text footer__text_margin-auto">
          Яндекс.Практикум
        </p>
        <p className="footer__text">Github</p>
      </div>
    </footer>
  );
}
