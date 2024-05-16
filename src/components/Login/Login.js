import { useState } from "react";
import { LoginLayout } from "./LoginLayout";

export const Login = ({ login, setLoginIsValid }) => {
  const [loginValue, setLoginValue] = login;
  const [error, setError] = useState(null);

  const onChange = ({ target }) => {
    setLoginValue(target.value);
    let newError = null;

    if (!/^[\w_@]*$/.test(target.value)) {
      newError =
        "Неверный логин. Допустимые символы: латинские буквы, цифры, собачка и нижнее подчёркивание";
    } else if (target.value.length > 20) {
      newError = "Неверный логин. Должно быть не больше 20 символов";
    }

    setError(newError);
  };

  const onBlur = ({ target }) => {
    if (target.value.length < 3) {
      setError("Неверный логин. Должно быть не меньше 3 символов");
    }

    if (!error && loginValue.length) setLoginIsValid(true);
  };

  return (
    <LoginLayout
      onChange={onChange}
      onBlur={onBlur}
      login={loginValue}
      error={error}
    />
  );
};
