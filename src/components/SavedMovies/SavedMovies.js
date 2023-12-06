import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";
import useFilter from "../../hooks/useFilter";

export default function SavedMovies({ movies, handleInteraction }) {
  const [query, setQuery] = React.useState({
    value: "",
    isShortsOnly: false,
  });

  const moviesFiltered = useFilter(movies, query);
  return (
    <main className="saved-movies">
      <SearchForm query={query} setQuery={setQuery} />
      <MoviesCardList
        movies={moviesFiltered}
        isSaved={true}
        handleInteraction={handleInteraction}
      />
    </main>
  );
}
