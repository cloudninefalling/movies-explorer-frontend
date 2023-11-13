import "./AboutMe.css";

const myAge = Math.floor(
  Math.abs(new Date() - new Date("2001/07/24 19:00:00")) / 31556952000
).toString();

const ageSuffix = () => {
  const lastAgeDigit = myAge.slice(-1);
  if (lastAgeDigit === 1) return "год";
  if (lastAgeDigit < 5) return "года";
  return "лет";
};

export default function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="app__section-title">Студент</h2>
      <div className="about-me__grid">
        <p className="about-me__name">Дмитрий</p>
        <p className="about-me__bio">
          Фронтенд-разработчик, {myAge} {ageSuffix()}
        </p>
        <p className="app__text-small about-me__description">
          Родился и живу в Санкт-Петербурге, учился в СПбПУ им. Петра Великого
          по направлению "Информатика и вычислительная техника". В свободное
          время люблю слушать и писать музыку, также увлекаюсь чтением книг.
          Начал кодить в 2018 году на Java, в 2022 решил углубиться в
          Веб-разработку.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/cloudninefalling"
          className="about-me__link"
        >
          Github
        </a>
        <div className="about-me__image" />
      </div>
    </section>
  );
}
