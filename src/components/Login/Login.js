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

  const { values, errors, handleChange, isValid } = useForm();

  return (
    <main className="login">
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
      <p className="login__text">
        Еще не зарегистрированы?{" "}
        <Link to={"/signup"} className="login__text login__link">
          Регистрация
        </Link>
      </p>
    </main>
  );
}
