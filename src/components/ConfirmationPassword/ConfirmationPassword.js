import { useState } from "react";
import { ConfirmationPasswordLayout } from "./ConfirmationPasswordLayout";

export const ConfirmationPassword = ({
  confirmationPassword,
  setConfirmationPasswordIsValid,
  password,
}) => {
  const [confirmationPasswordValue, setConfirmationPasswordValue] =
    confirmationPassword;
  const [error, setError] = useState(null);
  const [passwordValue] = password;

  const onChange = ({ target }) => {
    setConfirmationPasswordValue(target.value);

    if (!passwordValue.length) setError("Сначала введите пароль");

    if (passwordValue === target.value) {
      setConfirmationPasswordIsValid(true);
    }
  };

  const onBlur = ({ target }) => {
    if (passwordValue !== target.value) {
      setError("Вы ввели не верный пароль");
    } else {
      setError(null);
    }
  };

  return (
    <ConfirmationPasswordLayout
      confirmationPassword={confirmationPasswordValue}
      error={error}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
