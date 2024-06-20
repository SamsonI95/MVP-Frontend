import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import { signIn } from "../../../Data/formikUtils";
import InputField from "../../formFields/InputField";
import PasswordField from "../../formFields/PasswordField";
import FormButton from "../../Buttons/FormButton";
import secureLocalStorage from "react-secure-storage";
import { Bounce, toast } from "react-toastify";
// SignIn.jsx
const SignIn = () => {
  const { setAuth } = useAuth();
  const location = useLocation();
  // console.log('Location', location)
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/dashboard";
  // console.log('Redirecting to', from);
  

  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [email, setEmail] = useState(null);
  // const [pwd, setPwd] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signIn,
    onSubmit: async (values) => {
      setLoading(true);
      setError(null);
      const data = {
        email: values.email,
        password: values.password,
      };
    
      try {
        const response = await axios.post("/api/employerauth/login", data, {
          'Content-Type': 'application/json'
        });
        console.log('Sign-in Response', response?.data)
        const accessToken = response?.data?.data?.accessToken;
        const user = response?.data?.data?.firstName;
        console.log('Login response', response);
        setAuth({ user, accessToken });
        secureLocalStorage.setItem('token', JSON.stringify(accessToken));
        secureLocalStorage.setItem('user', JSON.stringify(user));
        setLoading(false);
        navigate(from, { replace: true });
        toast.success(response.data.message);
      } catch (error) {
        console.error("Error signing in:", error);
        setLoading(false);
          toast.error(error.response.data.message, {
            transition: Bounce
          })
        // setError("Failed to sign in. Please check your credentials and try again.");
      }
    },
  });

  return (
    <section className="w-full flex justify-center items-center">
      <form
        className="flex flex-col justify-start items-start w-[21.875em] h-[27.75em] gap-[40px]"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-[#101010] text-[2rem] leading-10 font-bold">
          Sign in
        </h1>
        <InputField
          label={`Email`}
          placeholder={`Email Address`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={`email`}
          value={formik.values.email}
          type={`text`}
          error={formik.touched.email && formik.errors.email}
          errorText={formik.errors.email}
        />
        <PasswordField
          label={`Password`}
          placeholder={`Enter Password`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={`password`}
          value={formik.values.password}
          type={isClicked ? `text` : `password`}
          error={formik.touched.password && formik.errors.password}
          errorText={formik.errors.password}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
        <Link
          to="/forgot-password"
          className="text-[1rem] leading-6 font-medium text-[#2F4EED]"
        >
          Forgot Password?
        </Link>
        <FormButton
          loading={loading}
          btnName={"Submit"}
          value={formik.values.email}
        />
        <div className="w-full text-center text-[1rem] leading-6 font-normal flex flex-col sm:flex-row gap-x-3 justify-center items-center">
          <p className="text-[#101010]">Don’t have an account?</p>
          <Link className="text-[#2F4EED]" to={`/sign-up/step-1`}>
            Sign Up
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
