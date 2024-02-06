import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useEffect } from "react";

export default function MoviesCardList({
  movies,
  savedMovies,
  isSaved,
  handleInteraction,
}) {
  const maxLength = movies.length;
  const isNothingFound = maxLength === 0;

  const [increment, setIncrement] = React.useState(0);
  const [moviesShown, setMoviesShown] = React.useState(0);

  const windowWidth = useWindowWidth();

  const renderNothingFound = () => {
    return <p className="movies-text">Ничего не найдено</p>;
  };

  const renderServerError = () => {
    return <p className="movies-text">На сервере произошла ошибка.</p>;
  };

  const renderMovies = () => {
    return movies.slice(0, moviesShown).map((movie) => {
      return (
        <li key={movie.movieId}>
          <MoviesCard
            movie={movie}
            savedMovies={savedMovies}
            isSaved={isSaved}
            handleInteraction={handleInteraction}
          />
        </li>
      );
    });
  };

  useEffect(() => {
    const getAmountUsingWidth = () => {
      if (windowWidth < 768) return 5;
      if (windowWidth < 1280) return 8;
      return 12;
    };
    const amount = getAmountUsingWidth();

    if (increment !== amount) setIncrement(amount);
    if (moviesShown < amount) setMoviesShown(amount);
  }, [windowWidth, increment, moviesShown]);

  function handleLoadMore() {
    if (moviesShown + increment < maxLength) {
      setMoviesShown(moviesShown + increment);
    } else {
      setMoviesShown(maxLength);
    }
  }
  return (
    <>
      {isNothingFound ? (
        renderNothingFound()
      ) : movies === -1 ? (
        renderServerError()
      ) : (
        <ul className="movies-card-list">{renderMovies()}</ul>
      )}
      {moviesShown < maxLength && (
        <button
          type="button"
          className="load-more-btn"
          aria-label="button"
          onClick={handleLoadMore}
        >
          Ещё
        </button>
      )}
    </>
  );
}
