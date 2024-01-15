import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import "./Login.css";
import React from "react";
import useForm from "../../hooks/useForm";

export default function Login({ handlelogIn }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handlelogIn(values);
    navigate("/movies");
  };

  const { values, errors, handleChange, isValid } = useForm(2);

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
