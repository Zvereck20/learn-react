import { useRef, useState } from "react";
import { RegistrationLayout } from "./RegistrationLayout";

const sendFormData = (formData) => {
  console.log(formData);
};

export const Registration = () => {
  const [blocked, setBlocked] = useState(true);
  // const blocked = useRef(true);
  const submitButtonRef = useRef(null);

  const [login, setLogin] = useState("");
  const [loginIsValid, setLoginIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [confirmationPasswordIsValid, setConfirmationPasswordIsValid] =
    useState(null);

  if (
    loginIsValid &&
    passwordIsValid &&
    confirmationPasswordIsValid &&
    blocked
  ) {
    setBlocked(false);
    // blocked.current = false;
    submitButtonRef.current.focus();
    // console.log(blocked);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    sendFormData({ login, password, confirmationPassword });
  };

  return (
    <>
      <RegistrationLayout
        blocked={blocked}
        submitButtonRef={submitButtonRef}
        onSubmit={onSubmit}
        login={[login, setLogin]}
        setLoginIsValid={setLoginIsValid}
        password={[password, setPassword]}
        setPasswordIsValid={setPasswordIsValid}
        confirmationPassword={[confirmationPassword, setConfirmationPassword]}
        setConfirmationPasswordIsValid={setConfirmationPasswordIsValid}
      />
    </>
  );
};
