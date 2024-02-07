import "./SearchForm.css";
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({ setQuery, handleSearch, isSaved }) {
  const getQueryValue = () => {
    const query = localStorage.getItem("query");
    return query ? JSON.parse(query).value : "";
  };

  const [isShortsOnly, setIsShortsOnly] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(
    !isSaved ? getQueryValue() : ""
  );

  const toggleShortsOnly = (isChecked) => {
    setIsShortsOnly(isChecked);
    setQuery((prev) => ({
      ...prev,
      isShortsOnly: isChecked,
    }));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    isSaved ?? setQuery({ value: inputValue, isShortsOnly });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setQuery({ value: inputValue, isShortsOnly });
    if (!isSaved)
      localStorage.setItem(
        "query",
        JSON.stringify({ value: inputValue, isShortsOnly })
      );
    if (!localStorage.getItem("movies")) handleSearch();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__searchbar">
        <input
          className="search-form__input"
          type="search"
          placeholder="Фильм"
          name="name"
          autoComplete="off"
          onChange={handleChange}
          value={inputValue}
        />
        <button
          type="submit"
          className="search-form__submit-btn"
          aria-label="искать"
        />
      </div>
      <FilterCheckbox toggleCheckbox={toggleShortsOnly} />
    </form>
  );
}
