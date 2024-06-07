import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { fieldsSchema } from "./schemes/fields-scheme";
import styles from "./styles.module.css";

const sendFormData = (formData) => {
  console.log(formData);
};

export const App = () => {
  const submitButtonRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(fieldsSchema),
  });

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const confirmPasswordError = errors.confirmPassword?.message;

  useEffect(() => {
    if (isValid) {
      submitButtonRef.current.focus();
    }
  }, [isValid]);

  return (
    <div className={styles.app}>
      <form onSubmit={handleSubmit(sendFormData)} className={styles.form}>
        <fieldset>
          <label htmlFor="email">Введите Email</label>
          {emailError && <div className={styles.error}>{emailError}</div>}
          <input name="email" type="text" {...register("email")} />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Введите пароль</label>
          {passwordError && <div className={styles.error}>{passwordError}</div>}
          <input name="password" type="password" {...register("password")} />
        </fieldset>

        <fieldset>
          <label htmlFor="confirmPassword">Введите пароль повторно</label>
          {confirmPasswordError && (
            <div className={styles.error}>{confirmPasswordError}</div>
          )}
          <input
            name="confirmPassword"
            type="password"
            {...register("confirmPassword")}
          />
        </fieldset>
        <button
          type="submit"
          className={styles.button}
          ref={submitButtonRef}
          disabled={Object.keys(errors).length ? true : false}
        >
          Отправить
        </button>
      </form>
    </div>
  );
};
