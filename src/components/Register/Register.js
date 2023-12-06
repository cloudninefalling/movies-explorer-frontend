import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import "./Register.css";
import React from "react";
import useForm from "../../hooks/useForm";

export default function Register() {
  const navigate = useNavigate();

  const { values, errors, handleChange, isValid } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <main className="register">
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
      <p className="register__text">
        Уже зарегистрированы?{" "}
        <Link to={"/signin"} className="register__text register__link">
          Войти
        </Link>
      </p>
    </main>
  );
}
