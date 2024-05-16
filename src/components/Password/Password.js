import { useState } from "react";
import { PasswordLayout } from "./PasswordLayout";

export const Password = ({ password, setPasswordIsValid }) => {
  const [passwordValue, setPasswordValue] = password;
  const [error, setError] = useState(null);

  const onChange = ({ target }) => {
    setPasswordValue(target.value);
    let newError = null;

    if (!/^[a-zA-Z0-9\s\w_@]+$/.test(target.value)) {
      newError =
        "Неверный пароль. Допустимые символы: латинские буквы, цифры, собачка и нижнее подчёркивание";
    } else if (target.value.length > 20) {
      newError = "Неверный пароль. Должно быть не больше 20 символов";
    }

    setError(newError);
  };

  const onBlur = ({ target }) => {
    let newError = null;

    if (target.value.length < 4) {
      newError = "Неверный пароль. Должно быть не меньше 4 символов";
    } else if (/^[^A-ZА-Я]+$/.test(target.value)) {
      newError =
        "Неверный пароль. Должен включать латинские буквы верхнего и нижнего регистра";
    }

    setError(newError);

    if (!error && passwordValue.length) setPasswordIsValid(true);
  };

  return (
    <PasswordLayout
      onChange={onChange}
      onBlur={onBlur}
      password={passwordValue}
      error={error}
    />
  );
};
