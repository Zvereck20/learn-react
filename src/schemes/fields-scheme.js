import * as yup from "yup";
import { EMAIL_REGEXP, PASSWORD_REGEXP } from "../constant/regexp";

export const fieldsSchema = yup.object().shape({
  email: yup
    .string()
    .matches(EMAIL_REGEXP, "Неверный Email")
    .max(20, "Неверный Email. Должно быть не больше 20 символов"),
  password: yup
    .string()
    .matches(
      PASSWORD_REGEXP,
      "Неверный пароль. Должен содержать число, спецсимвол, латинскую букву в нижнем и врехнем регистре"
    )
    .min(6, "Неверный пароль. Должно быть не меньше 6 символов")
    .max(20, "Неверный пароль. Должно быть не больше 20 символов"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Пароль не совпадает с введенным ранее!"
    ),
});
