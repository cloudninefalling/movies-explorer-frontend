import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";
import useFilter from "../../hooks/useFilter";

export default function Movies({ movies, handleInteraction }) {
  const [query, setQuery] = React.useState({
    value: "",
    isShortsOnly: false,
  });

  const moviesFiltered = useFilter(movies, query);
  return (
    <main className="movies">
      <SearchForm query={query} setQuery={setQuery} />
      <MoviesCardList
        movies={moviesFiltered}
        handleInteraction={handleInteraction}
        isSaved={false}
      />
    </main>
  );
}
