//App
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormContext } from "./SignUp/FormContext";

//Component(s)
import { useFormik } from "formik";
import InputField from "../../formFields/InputField";
import { verifyResetEmail } from "../../../Data/formikUtils";
import FormButton from "../../Buttons/FormButton";
import axios from "axios";

//Image(s)
import MailBox from "../../../../public/svg/MailBox.svg";

const VerifyResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useFormContext();

  const formik = useFormik({
    initialValues: {
      token: "",
    },
    validationSchema: verifyResetEmail,
    onSubmit: (values) => {
      setLoading(true);
      console.log("Form submitted with values:", values);
      dispatch({ type: "SET_TOKEN", payload: values.token });
      setLoading(false);
      navigate("/new-password");
    },
  });

  return (
    <section className="flex flex-col justify-center items-center w-full h-[80vh] gap-[96px]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[40px] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-center w-full gap-[12px]">
          <img
            src={MailBox}
            alt="mailbox-icon"
            width={100}
            height={100}
            className="mb-[40px]"
          />
          <h1 className="text-[#101010] text-[2rem] leading-10 font-bold mb-[16px]">
            Password Resest
          </h1>
          <p className="text-[#9C9C9C] text-[1.125rem] font-semibold sm:w-[335px] md:w-[350px]">
            Enter the token sent to{" "}
            <span
              className="text-[1rem] text-[#5229E1] leading-6 font-medium flex items-center gap-x-1"
              to={``}
            >
              {state.email}
            </span>
            Just follow the instructions to reset your password if you did’t get
            the token, please contact
            <Link>
              <span className="font-bold text-[#151515]">
                {" "}
                support@coinomad.com
              </span>
            </Link>
          </p>
        </div>
        <InputField
          label={`Token`}
          placeholder={`Enter Token`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={`token`}
          value={formik.values.token}
          type={`text`}
          error={formik.touched.token && formik.errors.token}
          errorText={formik.errors.token}
        />
        <FormButton
          loading={loading}
          btnName={"Verify Email"}
          value={formik.values.token}
        />
        {/* <div className="w-full text-center text-[1rem] leading-6 font-normal flex flex-col sm:flex-row gap-x-3 justify-center items-center">
          <p className="text-[#101010]">Didn’t get your code?</p>
          <Link className="text-[#2F4EED]">
            <button type="button" onClick={resendCode}>
              Send a new code
            </button>
          </Link>
        </div> */}
      </form>
    </section>
  );
};

export default VerifyResetPassword;
