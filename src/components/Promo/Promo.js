import "./Promo.css";
import NavTab from "../NavTab/NavTab";

export default function Promo() {
  return (
    <section id="promo">
      <div className="promo">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>

      <NavTab />
    </section>
  );
}
