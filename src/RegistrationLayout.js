import { Email } from "./components/Email/Email";
import { Password } from "./components/Password/Password";
import { ConfirmationPassword } from "./components/ConfirmationPassword/ConfirmationPassword";
import styles from "./registration.module.css";

export const RegistrationLayout = ({
  blocked,
  submitButtonRef,
  onSubmit,
  email,
  setEmailIsValid,
  password,
  setPasswordIsValid,
  confirmationPassword,
  setConfirmationPasswordIsValid,
}) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Здравствуйте, введите данные для регистарции!
      </h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <Email email={email} setEmailIsValid={setEmailIsValid} />
        <Password password={password} setPasswordIsValid={setPasswordIsValid} />
        <ConfirmationPassword
          confirmationPassword={confirmationPassword}
          setConfirmationPasswordIsValid={setConfirmationPasswordIsValid}
          password={password}
        />
        <button
          type="submit"
          className={styles.button}
          disabled={blocked}
          ref={submitButtonRef}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
