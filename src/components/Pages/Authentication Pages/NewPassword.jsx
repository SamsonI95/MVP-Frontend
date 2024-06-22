import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import PasswordField from "../../formFields/PasswordField";
import { createPassword } from "../../../Data/formikUtils";
import axios from "axios";

const NewPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
        toast.success('New Password Saved!')
      }, 1000);
    },
  });
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen gap-[]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[40px] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-start w-full gap-[16px]">
          <div className="flex flex-col justify-center items-start w-full gap-[12px] mb-[40px]">
            <h1 className="text-[#101010] text-[2rem] leading-10 font-bold">
              Reset your password
            </h1>
            <p className="text-[#9C9C9C] text-[1.125rem] leading-7 font-semibold">
              Almost done. Enter your new password and you’re good to go
            </p>
          </div>
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
          <button
            type="submit"
            className={`${
              loading || !formik.values.code
                ? "bg-[#2F4EED]/30"
                : "bg-[#2F4EED]"
            } px-2 py-2 rounded-lg w-full text-white h-[3.5em] flex justify-center items-center mt-[40px]`}
            disabled={loading || !formik.values.code}
          >
            {loading ? <ScaleLoader /> : "Reset Password"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default NewPassword;
