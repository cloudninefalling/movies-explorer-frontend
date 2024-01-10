import "./SearchForm.css";
import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm({ query, setQuery }) {
  const [isShortsOnly, setIsShortsOnly] = React.useState(false);

  const toggleShortsOnly = (isChecked) => {
    setIsShortsOnly(isChecked);
    setQuery((prev) => ({
      ...prev,
      isShortsOnly: isChecked,
    }));
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery({ value: value || "", isShortsOnly });
  };

  function handleSubmit(e) {
    e.preventDefault();
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
          value={query.value || ""}
        />
        <button
          type="button"
          className="search-form__submit-btn"
          aria-label="искать"
        />
      </div>
      <FilterCheckbox toggleCheckbox={toggleShortsOnly} />
    </form>
  );
}
