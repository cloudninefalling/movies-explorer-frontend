import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="not-found">
      <section className="not-found__wrapper">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button
          type="button"
          aria-label="back"
          className="not-found__link"
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
      </section>
    </main>
  );
}

export default PageNotFound;
