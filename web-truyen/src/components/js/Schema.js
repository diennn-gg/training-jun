import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required!"),
  name: Yup.string()
    .min(3, "Your name needs to be between 3 and 15 characters long")
    .max(15, "Your name needs to be between 3 and 15 characters long")
    .required("This field is required!"),
  password: Yup.string()
    .min(8, "Your password needs at least 8 characters")
    .required("This field is required!"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Password's not match")
    .required("This field is required!")
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required!"),
  password: Yup.string()
    .min(8, "Your password needs at least 8 characters")
    .required("This field is required!"),
});
