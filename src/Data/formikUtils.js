import axios from "axios";
import * as Yup from "yup";

axios.defaults.baseURL = `https://mvp-backend-bzvi.onrender.com/v1`;

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{8,}$/;

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const codeRegex = /^[0-9]*$/

export const signIn = Yup.object({
  email: Yup.string().email("Invalid Email Address").required("required"),
  password: Yup.string()
    .min(6, "Password must contain at least 6 characters!")
    .max(12, "Your password must not exceed 12 characters!")
    .required("required"),
});

// export const signUp = Yup.object({
//   firstName: Yup.string().required("required"),
//   lastName: Yup.string().required("required"),
//   orgName: Yup.string().required("required"),
//   email: Yup.string()
//     .email("Enter Your E-mail Address")
//     .matches(emailRegExp, "Invalid E-mail Address")
//     .required("required"),
//   password: Yup.string()
//     .max(8, "Password must not exceed 8 characters!")
//     .matches(passwordRegExp, "Invalid Password Input")
//     .required("required"),
//   password: Yup.string()
//     .oneOf([Yup.ref("password")], "Password must match!")
//     .required("required"),
// });

export const OrgEmail = Yup.object({
  email: Yup.string()
    .email("Enter Your E-mail Address")
    .matches(emailRegExp, "Invalid E-mail Address")
    .required("required"),
});

export const verifyEmail = Yup.object({
  code: Yup.string().required("required"),
});

export const createPassword = Yup.object({
  password: Yup.string()
    .min(6, "Password must contain at least 6 characters!")
    .max(12, "Your password must not exceed 12 characters!")
    .required("required"),
  password: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match!")
    .required("required"),
});

export const validateName = Yup.object({
  firstName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(50, "Must be 50 characters or less")
    .required("Required"),
});
