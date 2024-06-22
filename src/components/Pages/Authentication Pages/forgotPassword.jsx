import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Component(s)
import { ScaleLoader } from "react-spinners"; // loading animantion component used for buttons
import InputField from "../../formFields/InputField";
import axios from "axios";

//Image(s)
import LeftButton from "../../../../public/svg/LeftButton.svg";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
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
    <section className="flex flex-col justify-center items-center w-full h-screen gap-[96px]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[40px] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-start w-full gap-[12px]">
          <h1 className="text-[#101010] text-[2rem] leading-10 font-bold">
            Reset your paswword
          </h1>
          <p className="text-[#9C9C9C] text-[1.125rem] leading-7 font-semibold">
            Enter your email address,and we&apos;ll send you a link to get back into
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
        <button
          type="submit"
          className={`${
            loading || !formik.values.code ? "bg-[#2F4EED]/30" : "bg-[#2F4EED]"
          } px-2 py-2 rounded-lg w-full text-white h-[3.5em] flex justify-center items-center gap-[40px]`}
          disabled={loading || !formik.values.email}
        >
          {loading ? <ScaleLoader /> : "Send Link"}
        </button>
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
