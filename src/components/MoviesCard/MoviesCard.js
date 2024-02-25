import React from "react";
import "./MoviesCard.css";

export default function MoviesCard({
  movie,
  savedMovies,
  isSaved,
  handleInteraction,
}) {
  const duration = `${Math.floor(movie.duration / 60)}ч ${
    movie.duration % 60
  }м`;

  const [isLiked, setIsLiked] = React.useState(
    savedMovies.some((savedMovie) => {
      return savedMovie.movieId === movie.movieId;
    })
  );

  const [isImgReady, setIsImgReady] = React.useState(false);

  function handleLike() {
    const updatedLikeState = !isLiked;
    setIsLiked(updatedLikeState);
    handleInteraction(movie, updatedLikeState);
  }

  return (
    <div className="movies-card">
      <a
        className="movies-card__image-container"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movies-card__image"
          style={isImgReady ? {} : { display: "none" }}
          src={movie.image}
          alt={movie.nameRU}
          onLoad={() => setIsImgReady(true)}
        />
      </a>
      <p className="movies-card__name">{movie.nameRU}</p>
      {!isSaved ? (
        <button
          type="button"
          className={`movies-card__btn movies-card__btn_like ${
            isLiked ? "movies-card__btn_active" : ""
          }`}
          aria-label="button"
          onClick={handleLike}
        />
      ) : (
        <button
          type="button"
          className={`movies-card__btn movies-card__btn_remove`}
          aria-label="button"
          onClick={handleLike}
        />
      )}
      <p className="movies-card__duration">{duration}</p>
    </div>
  );
}
