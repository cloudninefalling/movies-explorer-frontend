import "./AuthForm.css";
import React from "react";
import logo from "../../images/logo.svg";

export default function AuthForm({
  title,
  fields,
  buttonText,
  handleSubmit,
  values,
  errors,
  handleChange,
  isValid,
}) {
  const inputComps = Object.keys(fields).map((field) => {
    return (
      <div key={field} className="auth__input-wrapper">
        <label className="auth__label" htmlFor={field}>
          {fields[field]}
        </label>
        <input
          placeholder={fields[field]}
          name={field}
          type={field === "password" ? "password" : "text"}
          className={`auth__input ${errors[field] ? "auth__input_red" : ""}`}
          id={field}
          value={values[field] || ""}
          onChange={handleChange}
          autoComplete="off"
          required
        />

        <p className="auth__label auth__error-msg">{errors[field] || ""}</p>
      </div>
    );
  });

  return (
    <form
      className="auth__form"
      name="auth__form"
      id="auth__form"
      onSubmit={handleSubmit}
    >
      <img src={logo} alt="movies-explorer" className="auth__logo" />
      <h2 className="auth__title">{title}</h2>
      {inputComps}
      <button
        className={`auth__submit-btn ${
          !isValid ? "auth__submit-btn_inactive" : ""
        }`}
        htmlFor="auth__form"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
}
