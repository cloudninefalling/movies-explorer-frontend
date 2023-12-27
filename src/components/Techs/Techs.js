import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs" id="techs">
      <h2 className="section-title">Технологии</h2>
      <p className="techs__subtitle">7 технологий</p>
      <p className="text-small techs__text-center">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__list-item">HTML</li>
        <li className="techs__list-item">CSS</li>
        <li className="techs__list-item">JS</li>
        <li className="techs__list-item">React</li>
        <li className="techs__list-item">Git</li>
        <li className="techs__list-item">Express.js</li>
        <li className="techs__list-item">mongoDB</li>
      </ul>
    </section>
  );
}
