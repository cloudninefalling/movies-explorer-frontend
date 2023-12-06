import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="app__section-title">О проекте</h2>
      <div className="about-project__text-container">
        <p className="about-project__subtitle">
          Дипломный проект включал 5 этапов
        </p>
        <p className="app__text-small">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className="about-project__subtitle">
          На выполнение диплома ушло 5 недель
        </p>
        <p className="app__text-small">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__timeline-container">
        <p className="app__text-small about-project__timeline-item about-project__timeline-item_padded">
          1 неделя
        </p>
        <p className="app__text-small about-project__timeline-item about-project__timeline-item_padded">
          4 недели
        </p>
        <p className="app__text-small about-project__timeline-item">Back-end</p>
        <p className="app__text-small about-project__timeline-item">
          Front-end
        </p>
      </div>
    </section>
  );
}
