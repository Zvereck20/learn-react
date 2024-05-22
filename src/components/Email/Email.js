import { useState } from "react";
import { EmailLayout } from "./EmailLayout";

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const Email = ({ email, setEmailIsValid }) => {
  const [emailValue, setEmailValue] = email;
  const [error, setError] = useState(null);

  const onChange = ({ target }) => {
    setEmailValue(target.value);
    let newError = null;

    if (!/^[\w_@.-]*$/.test(target.value)) {
      newError =
        "Неверный Email. Допустимые символы: латинские буквы, цифры, точка, собачка, тире и нижнее подчёркивание";
    } else if (target.value.length > 20) {
      newError = "Неверный Email. Должно быть не больше 20 символов";
    }

    setError(newError);
  };

  const onBlur = ({ target }) => {
    let newError = null;

    if (target.value.length < 6) {
      newError = "Неверный Email. Должно быть не меньше 6 символов";
    } else if (!EMAIL_REGEXP.test(target.value)) {
      newError = "Неверный Email. Не верный формат електронной почты";
    }

    setError(newError);

    if (!error && emailValue.length) setEmailIsValid(true);
  };

  return (
    <EmailLayout
      onChange={onChange}
      onBlur={onBlur}
      email={emailValue}
      error={error}
    />
  );
};
