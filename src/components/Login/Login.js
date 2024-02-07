import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import "./Login.css";
import React from "react";
import useForm from "../../hooks/useForm";

export default function Login({ handleLogIn }) {
  const navigate = useNavigate();

  const { values, errors, setErrors, handleChange, isValid } = useForm(2);

  const handleSubmit = () => {
    return handleLogIn(values)
      .then(() => navigate("/movies", { replace: true }))
      .catch((err) => {
        if (err.validation) {
          setErrors((prev) => ({ ...prev, misc: "Некорректный Email" }));
          return;
        }
        setErrors((prev) => ({ ...prev, misc: err.message }));
      });
  };

  return (
    <main className="login">
      <section className="login__wrapper">
        <AuthForm
          title={"Рады видеть!"}
          fields={{ email: "Email", password: "Пароль" }}
          buttonText={"Войти"}
          handleSubmit={handleSubmit}
          values={values}
          handleChange={handleChange}
          errors={errors}
          isValid={isValid}
        />
        <div className="login__subtitle-wrapper">
          <p className="login__text">Еще не зарегистрированы?</p>
          <Link to={"/signup"} className="login__text login__link">
            Регистрация
          </Link>
        </div>
      </section>
    </main>
  );
}
