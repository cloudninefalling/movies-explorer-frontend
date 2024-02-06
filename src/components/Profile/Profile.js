import React, { useContext } from "react";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Profile({ handleEditProfile, handleSignOut }) {
  const [isRedacting, setIsRedacting] = React.useState(false);

  const navigate = useNavigate();
  const { handleChange, values, setValues, errors, setErrors } = useForm();
  const currentUser = useContext(CurrentUserContext);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, setValues]);

  const toggleIsRedacting = (desiredState) => {
    setIsRedacting(desiredState);
  };

  const handleLogOut = () => {
    handleSignOut().then(navigate("/signin")).catch(console.log);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleEditProfile(values).catch((err) => {
      setErrors((prev) => ({ ...prev, email: err }));
    });
    toggleIsRedacting(false);
  }

  return (
    <main className="profile">
      <section className="profile__wrapper">
        <h1 className="profile__title">
          {currentUser.name ? `Привет, ${currentUser.name}!` : ""}
        </h1>
        <form
          noValidate
          className="profile__form"
          onSubmit={handleSubmit}
          name="profile__form"
          id="profile__form"
        >
          <label
            htmlFor={isRedacting ? "form__input_name" : undefined}
            className="profile__form-label"
          >
            Имя
          </label>
          {!isRedacting ? (
            <p className="profile__form-input">{currentUser.name}</p>
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
          <label
            htmlFor={isRedacting ? "form__input_email" : undefined}
            className="profile__form-label"
          >
            Email
          </label>
          {!isRedacting ? (
            <p className="profile__form-input">{currentUser.email}</p>
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
              Object.keys(errors).length > 0 ||
              (values.name === currentUser.name &&
                values.email === currentUser.email)
                ? "profile__submit-btn_inactive"
                : ""
            }`}
            form="profile__form"
            type="submit"
            onClick={handleSubmit}
          >
            Сохранить
          </button>
        )}
      </section>
    </main>
  );
}
