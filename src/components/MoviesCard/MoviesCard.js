import React from "react";
import "./MoviesCard.css";

export default function MoviesCard({ movie, isSaved, handleInteraction }) {
  const duration = `${Math.floor(movie.duration / 60)}ч ${
    movie.duration % 60
  }м`;

  const [isLiked, setIsLiked] = React.useState(movie.isLiked);

  function handleClick() {
    setIsLiked(!isLiked);
    movie.isLiked = !movie.isLiked;
    handleInteraction(movie);
  }

  return (
    <div className="movies-card">
      <img className="movies-card__image" src={movie.image} alt={movie.name} />
      <p className="movies-card__name">{movie.name}</p>
      {!isSaved ? (
        <button
          className={`movies-card__btn movies-card__btn_like ${
            isLiked ? "movies-card__btn_active" : ""
          }`}
          aria-label="button"
          onClick={handleClick}
        />
      ) : (
        <button
          className={`movies-card__btn movies-card__btn_remove`}
          aria-label="button"
          onClick={handleClick}
        />
      )}
      <p className="movies-card__duration">{duration}</p>
    </div>
  );
}
