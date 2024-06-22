// FormContext.js
import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  email: "",
  code: "",
  token: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  organization: "",
};

// Reducer function to update state
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_CODE":
      return { ...state, code: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };  
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_ORGANIZATION":
      return { ...state, organization: action.payload };
    default:
      return state;
  }
};

// Create context
const FormContext = createContext();

// Custom hook to use the form context
export const useFormContext = () => useContext(FormContext);

// Context provider component
export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
