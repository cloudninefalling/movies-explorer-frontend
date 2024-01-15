export default function useFilter(moviesArray, { value, isShortsOnly }) {
  if (!value) {
    return !isShortsOnly
      ? moviesArray
      : moviesArray.filter((movie) => {
          return movie.duration < 40;
        });
  }
  return moviesArray.filter((movie) => {
    return (
      movie.name.toLowerCase().includes(value.toLowerCase()) &&
      (!isShortsOnly || movie.duration < 40)
    );
  });
}
