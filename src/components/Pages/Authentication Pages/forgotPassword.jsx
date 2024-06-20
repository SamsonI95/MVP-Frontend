import { useFormik } from "formik";
import { useFormContext } from "./SignUp/FormContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Component(s)
import InputField from "../../formFields/InputField";
import axios from "axios";
import { emailPasswordReset } from "../../../Data/formikUtils";

//Image(s)
import LeftButton from "../../../../public/svg/LeftButton.svg";
import FormButton from "../../Buttons/FormButton";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useFormContext();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: emailPasswordReset,
    onSubmit: async (values) => {
      setLoading(true);
      const data = { email: values.email };
      axios
        .patch("/api/employerauth/forgot", data)
        .then(() => {
          dispatch({ type: "SET_EMAIL", payload: values.email });
          setLoading(false);
          navigate("/password-verification-check");
        })
        .catch((error) => {
          console.error("Error resetting password:", error);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  return (
    <section className="flex flex-col justify-center items-center w-full h-[80vh] gap-[96px]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[40px] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-start w-full gap-[12px]">
          <h1 className="text-[#101010] text-[2rem] leading-10 font-bold">
            Reset your paswword
          </h1>
          <p className="text-[#9C9C9C] text-[1.125rem] leading-7 font-semibold">
            Enter your email address,and we'll send you a link to get back into
            your account.
          </p>
        </div>
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
        <FormButton
          loading={loading}
          btnName={"Send Code"}
          value={formik.values.email}
        />
        <div className="w-full text-center text-[1rem] leading-6 font-normal flex flex-col sm:flex-row gap-x-3 justify-center items-center">
          <Link className="text-[#2F4EED]" to="/sign-in">
            <button>
              <img src={LeftButton} alt="left-arrow" />
            </button>
          </Link>
          {/* <p className="text-[#101010]">Didn’t get your code?</p> */}
          {/* <Link className="text-[#2F4EED]" to="/sign-in">
            Send a new code
          </Link> */}
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
