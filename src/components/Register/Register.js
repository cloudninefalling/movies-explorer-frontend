import { Link, useNavigate } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import "./Register.css";
import React from "react";
import useForm from "../../hooks/useForm";

export default function Register() {
  const navigate = useNavigate();

  const { values, errors, handleChange, isValid } = useForm(3);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
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
          <Link to={"/signup"} className="register__text register__link">
            Войти
          </Link>
        </div>
      </section>
    </main>
  );
}
