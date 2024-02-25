import { SHORT_MOVIE_MAX_DURATION } from "../utils/constants";

export default function useFilter(moviesArray, { value, isShortsOnly }) {
  if (moviesArray === -1) return -1;

  const movies = moviesArray.filter((movie) => {
    return (
      (movie.nameRU.toLowerCase().includes(value.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(value.toLowerCase())) &&
      (!isShortsOnly || movie.duration < SHORT_MOVIE_MAX_DURATION)
    );
  });

  return movies;
}
