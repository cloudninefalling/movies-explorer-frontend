import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";
import useFilter from "../../hooks/useFilter";
import Preloader from "../Preloader/Preloader";

export default function SavedMovies({ movies, handleInteraction, isLoading }) {
  const [query, setQuery] = React.useState({
    value: "",
    isShortsOnly: false,
  });

  const moviesFiltered = useFilter(movies, query);
  return (
    <main>
      <section className="saved-movies">
        <SearchForm query={query} setQuery={setQuery} isSaved={true} />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={moviesFiltered}
            savedMovies={moviesFiltered}
            isSaved={true}
            handleInteraction={handleInteraction}
            query={query}
          />
        )}
      </section>
    </main>
  );
}
