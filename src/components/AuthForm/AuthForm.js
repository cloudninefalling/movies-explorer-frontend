import "./AuthForm.css";
import React from "react";
import { Link } from "react-router-dom";

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
  const renderInputs = Object.keys(fields).map((field) => {
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
      </div>
    );
  });

  const fieldOrder = (field) => {
    switch (field) {
      case "name":
        return 1;
      case "email":
        return 2;
      case "password":
        return 3;
      default:
        return -1;
    }
  };

  const renderErrors = Object.keys(errors).map((field) => {
    return (
      <li
        key={field}
        className="auth__label auth__error-msg"
        style={{ order: fieldOrder(field) }}
      >
        {errors[field]}
      </li>
    );
  });

  return (
    <form
      className="auth"
      name="auth__form"
      id="auth__form"
      onSubmit={handleSubmit}
    >
      <Link to={"/"} className="auth__logo" />
      <h1 className="auth__title">{title}</h1>
      {renderInputs}
      <ul className="auth__error-list">{renderErrors}</ul>
      <button
        className={`auth__submit-btn ${
          !isValid ? "auth__submit-btn_inactive" : ""
        }`}
        form="auth__form"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
}
