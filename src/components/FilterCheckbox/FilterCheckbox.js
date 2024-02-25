import "./FilterCheckbox.css";

export default function FilterCheckbox({ toggleCheckbox, isChecked }) {
  function handleChange(e) {
    toggleCheckbox(e.target.checked);
  }

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        name="isShortsOnly"
        id="toggle-switch__checkbox"
        className="toggle-switch__checkbox"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="toggle-switch__checkbox" className="toggle-switch__label">
        Короткометражки
      </label>
    </div>
  );
}
