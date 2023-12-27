import React from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

export default function Profile({ user, handleEditProfile, logOut }) {
  const [isRedacting, setIsRedacting] = React.useState(false);

  const navigate = useNavigate();
  const { handleChange, values, setValues, errors } = useForm();

  React.useEffect(() => {
    setValues(user);
  }, [user, setValues]);

  const toggleIsRedacting = (desiredState) => {
    setIsRedacting(desiredState);
  };

  const handleLogOut = () => {
    logOut();
    navigate("/signin");
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleEditProfile(values);
    toggleIsRedacting(false);
  }

  return (
    <main className="profile">
      <h2 className="profile__title">{`Привет, ${user.name}!`}</h2>
      <form
        noValidate
        className="profile__form"
        onSubmit={handleSubmit}
        name="profile__form"
        id="profile__form"
      >
        <label htmlFor="form__input_name" className="profile__form-label">
          Имя
        </label>
        {!isRedacting ? (
          <p className="profile__form-input">{user.name}</p>
        ) : (
          <input
            name="name"
            id="profile__form-input_name"
            type="text"
            className={`profile__form-input ${
              errors.name ? "profile__form-input_invalid" : ""
            }`}
            placeholder="Имя"
            value={values["name"] || ""}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        )}
        <p className="profile__form-label profile__form-error-msg">
          {errors.name || ""}
        </p>
        <div className="profile__form-separator" />
        <label htmlFor="form__input_email" className="profile__form-label">
          Email
        </label>
        {!isRedacting ? (
          <p className="profile__form-input">{user.email}</p>
        ) : (
          <input
            name="email"
            id="profile__form-input_email"
            type="email"
            className={`profile__form-input ${
              errors.email ? "profile__form-input_invalid" : ""
            }`}
            placeholder="Email"
            value={values["email"] || ""}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        )}
        <p className="profile__form-label profile__form-error-msg">
          {errors.email || ""}
        </p>
      </form>
      {!isRedacting ? (
        <div className="profile__button-wrapper">
          <button
            type="button"
            className="profile__button profile__button_redact"
            onClick={toggleIsRedacting}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="profile__button profile__button_exit"
            onClick={handleLogOut}
          >
            Выйти из аккаунта
          </button>
        </div>
      ) : (
        <button
          className={`profile__submit-btn ${
            Object.keys(errors).length > 0 ? "profile__submit-btn_inactive" : ""
          }`}
          form="profile__form"
          type="submit"
          onClick={handleSubmit}
        >
          Сохранить
        </button>
      )}
    </main>
  );
}
