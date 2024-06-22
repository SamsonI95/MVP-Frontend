//App
import React, { useEffect, useState } from "react";

//Component(s)
import { useFormik } from "formik";
import { useFormContext } from "./FormContext";
import InputField from "../../../formFields/InputField";
import ProgressBar from "../../../Page Components/ProgressBar";
import axios from "axios";
import FormButton from "../../../Buttons/FormButton";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const Organization = () => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   axios.get();
  // });

  const formik = useFormik({
    initialValues: {
      organization: "",
    },
    onSubmit: (values, { setSubmitting, setErrors }) => {
      setLoading(true);
      dispatch({ type: "SET_ORGANIZATION", payload: values.organization });
      const payload = {
        email: state.email,
        firstName: state.firstName,
        lastName: state.lastName,
        organizationName: values.organization,
        password: state.password,
      };
      console.log(payload);
      axios
        .post("/api/employerauth/signup/employer-details", payload)
        .then((response) => {
          setLoading(false);
          console.log("Signup successful:", response.data);
          navigate("/sign-in");
          toast.success(response.data.message)
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setLoading(false);
          toast.error(error.response.data.message, {
            transition: Bounce
          })
          // if (error.response) {
          //   // Server responded with a non-2xx status code
          //   setErrors({
          //     organization: "Failed to submit form. Please try again later.",
          //   });
          // } else if (error.request) {
          //   // The request was made but no response was received
          //   setErrors({
          //     organization:
          //       "Network error. Please check your internet connection.",
          //   });
          // } else {
          //   // Something else happened while setting up the request
          //   setErrors({ organization: "An unexpected error occurred." });
          // }
          setSubmitting(false);
        });

      // setTimeout(() => {
      //   setLoading(false);
      // }, 1000);
    },
  });
  return (
    <section className="flex flex-col justify-center items-center w-full">
      <div className="translate-y-[4rem]">
        <ProgressBar currentStep={4} totalSteps={4} />
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-start gap-[40px] w-[21.875em] h-[24.25em]"
      >
        <div className="flex flex-col justify-center items-start w-full gap-[12px]">
          <h1 className="text-[#101010] text-[2rem] leading-10 font-bold">
            Organization Details
          </h1>
        </div>
        <InputField
          label="Organization Name"
          placeholder="Organization"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name="organization"
          value={formik.values.organization}
          type="text"
          //   error={formik.touched.firstName && formik.errors.firstName}
          //   errorText={formik.errors.firstName}
        />
        <FormButton
          btnName={"Complete"}
          value={formik.values.organization}
          loading={loading}
        />
      </form>
    </section>
  );
};

export default Organization;
