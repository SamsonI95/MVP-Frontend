//App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Authentication Page(s)
import SignIn from "./components/Pages/Authentication Pages/SignIn";
import VerifyEmail from "./components/Pages/Authentication Pages/SignUp/VerifyEmail";
import StepOne from "./components/Pages/Authentication Pages/SignUp/StepOne";
import CreatePassword from "./components/Pages/Authentication Pages/SignUp/CreatePassword";
import Identification from "./components/Pages/Authentication Pages/SignUp/Identification";
import Organization from "./components/Pages/Authentication Pages/SignUp/Organization";
import ForgotPassword from "./components/Pages/Authentication Pages/forgotPassword";
import NewPassword from "./components/Pages/Authentication Pages/NewPassword";
import VerifyResetPassword from "./components/Pages/Authentication Pages/VerifyResetPassword";
import SuccessVerificationCheck from "./components/Pages/Authentication Pages/SuccessVerificationCheck";

//Page(s)
import Landing from "./components/Pages/Landing";
import Layout from "./components/Pages/Layout";

//Page Component
import { FormProvider } from "./components/Pages/Authentication Pages/SignUp/FormContext";
// import Header from "./components/Page Components/Header";
// import Footer from "./components/Page Components/Footer";
// import HideHeaderFooter from "./components/Page Components/HideHeaderFooter";

//Stytle
import "./App.css";

// Dashboard
import Dashboard from "./components/Pages/AdminDashboard/Dashboard/Dashboard";
import Employees from "./components/Pages/AdminDashboard/Employees/Employees";
import AdminLayout from "./components/Pages/AdminDashboard/AdminLayout";

// Protected Routing
import RequireAuth from "./components/RequireAuth";


// import { ToastContainer } from "react-toastify";
import NotFound from "./components/Pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import Settings from "./components/Pages/AdminDashboard/Settings/Settings";
import { Toaster } from "./components/ui/toaster";
import { ToastContainer } from "react-toastify";
import UpdateDeleteEmployeeModal from "./components/Page Components/Modals/UpdateDeleteEmployeeModal";

function App() {
  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Toaster />
      <FormProvider>
        <Router>
          {/* <HideHeaderFooter HeaderComponent={Header} FooterComponent={Footer}> */}
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Landing />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/password-verification-check"
                element={<VerifyResetPassword />}
              />
              <Route path="/new-password" element={<NewPassword />} />
              <Route
                path="/success-verification"
                element={<SuccessVerificationCheck />}
              />
              <Route path="/sign-up">
                <Route path="step-1" element={<StepOne />} />
                <Route path="verify-email" element={<VerifyEmail />} />
                <Route path="create-password" element={<CreatePassword />} />
                <Route path="identification" element={<Identification />} />
                <Route path="organization" element={<Organization />} />
              </Route>
            </Route>

            {/* Dashboard */}
            <Route element={<RequireAuth />}>
              <Route path="/" element={<AdminLayout />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="employees" element={<Employees />}>
                  <Route path=":id" element={<UpdateDeleteEmployeeModal/>}></Route>
                </Route>
                <Route path="settings" element={<Settings/>}></Route>
              </Route>
            </Route>

            {/* 404 Page */}
            <Route path="*" element={<NotFound/>}></Route>

          </Routes>
          {/* </HideHeaderFooter> */}
        </Router>
      </FormProvider>
    </>
  );
}

export default App;
