import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import React from "react";
import useFilter from "../../hooks/useFilter";
import Preloader from "../Preloader/Preloader";

export default function Movies({
  movies,
  savedMovies,
  handleInteraction,
  handleSearch,
  isFetching,
}) {
  const [query, setQuery] = React.useState(
    JSON.parse(localStorage.getItem("query")) || {
      value: "",
      isShortsOnly: false,
    }
  );

  const moviesFiltered = useFilter(movies, query, false);

  const renderMain = () => {
    if (isFetching) return <Preloader />;
    if (!query.value) {
      return <p className="movies__text">Нужно ввести ключевое слово</p>;
    }
    return (
      <MoviesCardList
        movies={moviesFiltered}
        savedMovies={savedMovies}
        handleInteraction={handleInteraction}
        query={query}
      />
    );
  };

  return (
    <main>
      <section className="movies">
        <SearchForm
          query={query}
          setQuery={setQuery}
          handleSearch={handleSearch}
          isSaved={false}
        />
        {renderMain()}
      </section>
    </main>
  );
}
