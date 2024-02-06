import React from "react";

export default function useForm(inputCount) {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    validate(name, value);
  };

  const isValid =
    Object.keys(values).length === inputCount &&
    Object.keys(errors).length === 0;

  const validateEmail = (email) => {
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setErrors((prev) => ({
        ...prev,
        email: "Некорректный email",
      }));
      return;
    }
    setErrors((current) => {
      const { email, ...rest } = current;
      return rest;
    });
  };

  const validatePassword = (password) => {
    if (!password) {
      setErrors((prev) => ({
        ...prev,
        password: "Пароль обязателен для заполнения",
      }));
      return;
    }
    setErrors((current) => {
      const { password, ...rest } = current;
      return rest;
    });
  };

  const validateName = (name) => {
    if (name.length < 2) {
      setErrors((prev) => ({
        ...prev,
        name: "Имя слишком короткое",
      }));
      return;
    }
    if (name.length > 30) {
      setErrors((prev) => ({
        ...prev,
        name: "Имя слишком длинное",
      }));
      return;
    }
    setErrors((current) => {
      const { name, ...rest } = current;
      return rest;
    });
  };

  const validate = (name, value) => {
    switch (name) {
      case "name":
        validateName(value);
        break;
      case "email":
        validateEmail(value);
        break;
      case "password":
        validatePassword(value);
        break;
      default:
        break;
    }
    delete errors.misc;
  };

  return {
    values,
    setValues,
    handleChange,
    errors,
    setErrors,
    validate,
    isValid,
  };
}
