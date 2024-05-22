import { useEffect, useRef, useState } from "react";
import { RegistrationLayout } from "./RegistrationLayout";

const sendFormData = (formData) => {
  console.log(formData);
};

export const Registration = () => {
  const submitButtonRef = useRef(null);
  const [blocked, setBlocked] = useState(true);

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [confirmationPasswordIsValid, setConfirmationPasswordIsValid] =
    useState(null);

  useEffect(() => {
    if (emailIsValid && passwordIsValid && confirmationPasswordIsValid) {
      setBlocked(false);
    }
  }, [emailIsValid, passwordIsValid, confirmationPasswordIsValid]);

  useEffect(() => {
    if (!blocked && submitButtonRef.current) {
      submitButtonRef.current.focus();
    }
  }, [blocked]);

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
        email={[email, setEmail]}
        setEmailIsValid={setEmailIsValid}
        password={[password, setPassword]}
        setPasswordIsValid={setPasswordIsValid}
        confirmationPassword={[confirmationPassword, setConfirmationPassword]}
        setConfirmationPasswordIsValid={setConfirmationPasswordIsValid}
      />
    </>
  );
};
