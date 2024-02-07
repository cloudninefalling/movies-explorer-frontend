import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useEffect } from "react";
import { MOVIES_AMOUNT_BY_WIDTH } from "../../utils/constants";

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
      if (windowWidth < 768) return MOVIES_AMOUNT_BY_WIDTH.small;
      if (windowWidth < 1280) return MOVIES_AMOUNT_BY_WIDTH.medium;
      return MOVIES_AMOUNT_BY_WIDTH.large;
    };
    const { initial, additional } = getAmountUsingWidth();

    if (increment !== additional) setIncrement(additional);
    if (moviesShown < initial) setMoviesShown(initial);
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
      {!isSaved && isNothingFound ? (
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
