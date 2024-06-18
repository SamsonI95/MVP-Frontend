//App
import React, { useEffect, useState } from "react";

//Component(s)
import { useFormik } from "formik";
import { useFormContext } from "./FormContext";
import InputField from "../../../formFields/InputField";
import ProgressBar from "../../../Page Components/ProgressBar";
import axios from "axios";
import FormButton from "../../../Buttons/FormButton";

const Organization = () => {
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useFormContext();

  // useEffect(() => {
  //   axios.get();
  // });

  const formik = useFormik({
    initialValues: {
      organization: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      dispatch({ type: "SET_ORGANIZATION", payload: values.organization });
      const payload = {
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
        organization: values.organization,
      };
      axios
        .post("/api/employerauth/signup/employer-detail", payload)
        .then(() => {
          setLoading(false);
          navigate("/sign-in");
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          setLoading(false);
        });

      // setTimeout(() => {
      //   setLoading(false);
      // }, 1000);
    },
  });
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
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
