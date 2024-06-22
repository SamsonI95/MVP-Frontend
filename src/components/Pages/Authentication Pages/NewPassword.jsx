import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Component(s)
import PasswordField from "../../formFields/PasswordField";
import { createPassword } from "../../../Data/formikUtils";
import axios from "axios";
import FormButton from "../../Buttons/FormButton";
import { useFormContext } from "./SignUp/FormContext";

const NewPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useFormContext();
  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: createPassword,
    onSubmit: async (values) => {
      setLoading(true);
      console.log("Form values:", values); // Log the form values
      console.log("Token:", state.token); // Log the token

      try {
        const response = await axios.patch("/api/employerauth/reset", {
          token: state.token, // Pass the token
          newPassword: values.newPassword,
          confirmPassword: values.confirmPassword,
        });

        console.log("Response from server:", response.data); // Log the response from the server
        setLoading(false);
        navigate("/success-verification");
      } catch (error) {
        console.error("Error resetting password:", error);
        setLoading(false);
        navigate("/sign-up/identification");
        toast.success(error.response.data.message)
      }, 1000);
      }
    },
    // onSubmit: (values) => {
    //   setLoading(true);
    //   console.log('Token:', state.token);
    //   console.log('Password:', values.password);
    //   console.log('Confirm Password:', values.confirmPassword);
    //   axios
    //     .patch("/api/employerauth/reset", {
    //       token: state.token,
    //       password: values.newPassword,
    //       confirmPassword: values.confirmPassword,
    //     })
    //     .then(() => {
    //       setLoading(false);
    //       dispatch({ type: "SET_PASSWORD", payload: values.newPassword });
    //       dispatch({
    //         type: "SET_CONFIRM_PASSWORD",
    //         payload: values.confirmPassword,
    //       });
    //       navigate("/success-verification");
    //     })
    //     .catch((error) => {
    //       console.error("Error resetting password:", error);
    //       setLoading(false);
    //     });
    // },
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
            label="New Password"
            placeholder="Enter your new password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="newPassword"
            value={formik.values.newPassword}
            error={formik.touched.newPassword && formik.errors.newPassword}
            errorText={formik.errors.newPassword}
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
          <FormButton
            btnName={"Next"}
            value={formik.values.password}
            loading={loading}
          />
        </div>
      </form>
    </section>
  );
};
export default NewPassword;
