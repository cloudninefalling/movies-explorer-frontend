import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import useWindowWidth from "../../hooks/useWindowWidth";
import { useEffect } from "react";

export default function MoviesCardList({ movies, isSaved, handleInteraction }) {
  const maxLength = movies.length;
  const [increment, setIncrement] = React.useState(0);
  const [moviesShown, setMoviesShown] = React.useState(0);

  const windowWidth = useWindowWidth();

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
      <ul className="movies-card-list">
        {movies.slice(0, moviesShown).map((movie) => {
          return (
            <li key={movie.name}>
              <MoviesCard
                movie={movie}
                isSaved={isSaved}
                handleInteraction={handleInteraction}
              />
            </li>
          );
        })}
      </ul>
      {moviesShown < maxLength && (
        <button
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
