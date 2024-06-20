//App
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

//Component(s)
import { useFormik } from "formik";
import { useFormContext } from "./FormContext";
import InputField from "../../../formFields/InputField";
import { verifyEmail } from "../../../../Data/formikUtils";
import FormButton from "../../../Buttons/FormButton";
import axios from "axios";
// import axios from "axios";
//import { HiOutlinePencil } from "react-icons/hi2";

const VerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useFormContext();

  // const location = useLocation();
  // const { email } = location.state || {};
  // const [code, setCode] = useState("");

//  ;
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: verifyEmail,
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post("/api/employerauth/signup/verify-email", {
          email: state.email,
          code: values.code,
        })
        .then(() => {
          dispatch({ type: "SET_CODE", payload: values.code });
          setLoading(false);
          navigate("/sign-up/create-password");
        })
        .catch((error) => {
          console.error("Error verifying code:", error);
          setLoading(false);
        });

      // try {
      //   const response = await axios.post(
      //     "/api/employerauth/signup/verify-email",
      //     {
      //       code: values.code,
      //       email: email,
      //     }
      //   );

      //   console.log("Verification successful", response.data);
      //   // Handle successful verification, e.g., navigate to the next page
      //   navigate("/sign-up/create-password", {
      //     state: { email: values.email },
      //   });
      // } catch (error) {
      //   console.error("Error verifying email:", error);
      //   // Handle error, e.g., show error message
      // } finally {
      //   setLoading(false);
      // }
    },
  });

  const resendCode = () => {
    setLoading(true);
    axios
      .post("/api/employerauth/signup/resend-token", { email: state.email })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error resending code:", error);
        setLoading(false);
      });
  };

  // const handleResendCode = async () => {
  //   setResendLoading(true);
  //   setMessage("");
  //   try {
  //     const response = await axios.post(
  //       "/api/employerauth/signup/resend-token",
  //       {
  //         email: email,
  //       }
  //     );
  //     console.log("Code resent successfully", response.data);
  //     setMessage("Verification code has been resent to your email.");
  //   } catch (error) {
  //     console.error(
  //       "Error resending code:",
  //       error.response?.data || error.message
  //     );
  //     setMessage("Failed to resend verification code. Please try again.");
  //   } finally {
  //     setResendLoading(false);
  //   }
  // };

  return (
    <section className="flex flex-col justify-center items-center w-full h-[80vh] gap-[96px]">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[40px] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-start w-full gap-[12px]">
          <h1 className="text-[#101010] text-[2rem] leading-10 font-bold">
            Verify your email
          </h1>
          <p className="text-[#9C9C9C] text-[1.125rem] leading-7 font-semibold">
            Enter the verifcation code sent to
          </p>
          <h3
            className="text-[1rem] text-[#5229E1] leading-6 font-medium flex items-center gap-x-1"
            to={``}
          >
            {state.email}
            {/* <HiOutlinePencil /> */}
          </h3>
        </div>
        <InputField
          label={`Code`}
          placeholder={`Enter Code`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name={`code`}
          value={formik.values.code}
          type={`text`}
          error={formik.touched.code && formik.errors.code}
          errorText={formik.errors.code}
        />
        <FormButton
          loading={loading}
          btnName={"Verify Email"}
          value={formik.values.code}
        />
        <div className="w-full text-center text-[1rem] leading-6 font-normal flex flex-col sm:flex-row gap-x-3 justify-center items-center">
          <p className="text-[#101010]">Didn’t get your code?</p>
          <Link className="text-[#2F4EED]">
            <button type="button" onClick={resendCode}>
              Send a new code
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default VerifyEmail;
