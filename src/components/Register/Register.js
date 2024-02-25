import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import "./Register.css";
import React from "react";
import useForm from "../../hooks/useForm";
import MainApi from "../../utils/MainApi";

const { signUp } = MainApi();

export default function Register({ handleLogIn }) {
  const navigate = useNavigate();

  const { values, errors, setErrors, handleChange, isValid } = useForm(3);
  const handleSubmit = () => {
    return signUp(values)
      .then(() =>
        handleLogIn(values).then(() => navigate("/movies", { replace: true }))
      )
      .catch((err) => {
        if (err.validation) {
          setErrors((prev) => ({ ...prev, misc: "Некорректный Email" }));
          return;
        }
        setErrors((prev) => ({ ...prev, misc: err.message }));
      });
  };

  return (
    <main className="register">
      <section className="register__wrapper">
        <AuthForm
          title={"Добро пожаловать!"}
          fields={{ name: "Имя", email: "Email", password: "Пароль" }}
          buttonText={"Зарегистрироваться"}
          values={values}
          handleChange={handleChange}
          errors={errors}
          isValid={isValid}
          handleSubmit={handleSubmit}
        />
        <div className="register__subtitle-wrapper">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link to={"/signin"} className="register__text register__link">
            Войти
          </Link>
        </div>
      </section>
    </main>
  );
}
