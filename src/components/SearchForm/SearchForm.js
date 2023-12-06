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
    <div className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          type="search"
          placeholder="Фильм"
          name="name"
          autoComplete="off"
          onChange={handleChange}
          value={query.value || ""}
        />
        <button className="search-form__submit-btn" aria-label="искать" />
      </form>
      <FilterCheckbox toggleCheckbox={toggleShortsOnly} />
    </div>
  );
}
