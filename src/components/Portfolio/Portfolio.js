import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/cloudninefalling/how-to-learn"
            rel="noreferrer"
            target="_blank"
          >
            Статичный сайт
            <p className="portfolio__arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/cloudninefalling/russian-travel"
          >
            Адаптивный сайт
            <p className="portfolio__arrow">↗</p>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link portfolio__link_no-border"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/cloudninefalling/react-mesto-api-full-gha"
          >
            Одностраничное приложение
            <p className="portfolio__arrow">↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
