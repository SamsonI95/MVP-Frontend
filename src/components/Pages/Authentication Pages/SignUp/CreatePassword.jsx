import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import PasswordField from "../../../formFields/PasswordField";
import { createPassword } from "../../../../Data/formikUtils";
import ProgressBar from "../../../Page Components/ProgressBar";
import axios from "axios";
import FormButton from "../../../Buttons/FormButton";

const CreatePassword = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: createPassword,
    onSubmit: (values) => {
      setLoading(true);
      // Simulate a delay for form submission
      setTimeout(() => {
        setLoading(false);
        navigate("/sign-up/identification");
      }, 1000);
    },
  });
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <ProgressBar currentStep={2} totalSteps={4} />
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[40px] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-start w-full gap-[16px]">
          <h1 className="text-[#101010] text-[2rem] leading-10 font-bold mb-[40px]">
            Create Password
          </h1>
          <PasswordField
            label="Password"
            placeholder="Enter your password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="password"
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            errorText={formik.errors.password}
          />
          <PasswordField
            label="Confirm Password"
            placeholder="Confirm your password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="confirmPassword"
            value={formik.values.confirmPassword}
            error={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            errorText={formik.errors.confirmPassword}
          />
          <FormButton btnName={"Next"} value={formik.values.password} loading={loading} />
        </div>
      </form>
    </section>
  );
};
export default CreatePassword;
