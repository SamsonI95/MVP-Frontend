//App
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

//Component(s)
import InputField from "../../../formFields/InputField";
import { useFormik } from "formik";
import { useFormContext } from "./FormContext";
import FormButton from "../../../Buttons/FormButton";
import { OrgEmail } from "../../../../Data/formikUtils";

const StepOne = () => {
  const navigate = useNavigate();
  const { dispatch } = useFormContext();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: OrgEmail,
    onSubmit: (values) => {
      setLoading(true);
      axios
        .post("/api/employerauth/signup/email", { email: values.email })
        .then(() => {
          dispatch({ type: "SET_EMAIL", payload: values.email });
          setLoading(false);
          navigate("/sign-up/verify-email");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setLoading(false);
        });

      // const config = {
      //   method: "post",
      //   maxBodyLength: Infinity,
      //   url: "",
      //   headers: {},
      //   data: {
      //     email: values.email,
      //   },
      // };

      // console.log("Request config:", config);

      // try {
      //   const response = await axios(config);
      //   console.log("Response received:", response);

      //   if (response.status === 200 || response.status === 201) {
      //     console.log(
      //       "Email sent successfully, navigating to verification page..."
      //     );
      //     navigate("/sign-up/verify-email", { state: { email: values.email } });
      //   } else {
      //     console.error("Unexpected response status:", response.status);
      //   }
      // } catch (error) {
      //   console.error("Error during request:", error);
      // } finally {
      //   setLoading(false);
      // }
    },
  });
  return (
    <section className="flex justify-center items-center gap-[96px] w-full h-[90vh]">
      <div className="flex flex-col justify-start items-start w-[21.875em] h-[19.75em] gap-[40px]">
        <h1 className="text-[2.25rem] font-bold leading-[44px] tracking-[-0.72px]">
          Sign Up
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-[21.875em] h-[10.5em] flex flex-col justify-between items-center gap-6"
        >
          <InputField
            label={`Email`}
            placeholder={`Email Address`}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name={`email`}
            value={formik.values.email} // Use formik's email value
            type={`text`}
            error={formik.touched.email && formik.errors.email}
            errorText={formik.errors.email}
          />

          <FormButton
            btnName={"Sign Up with email"}
            loading={loading}
            value={formik.values.email}
          />
        </form>
        <div className="w-full text-center text-[1rem] leading-6 font-normal flex flex-col sm:flex-row gap-x-3 justify-center items-center">
          <p className="text-[#101010]">Already have an account?</p>
          <Link className="text-[#2F4EED]" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StepOne;
