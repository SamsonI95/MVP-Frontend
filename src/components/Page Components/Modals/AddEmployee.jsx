import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import calendar from "/src/assets/calendar.svg";
import { HiOutlineXMark } from "react-icons/hi2";
import InputField from "@/components/formFields/InputField";
import { useFormik } from "formik";
import { addEmployeesSchema } from "@/Data/formikUtils";
import axios from "axios";
import { toast } from "react-toastify";
import ShowAssets from "./ShowAssets";
import FormButton from "@/components/Buttons/FormButton";
import secureLocalStorage from "react-secure-storage";
import bitcoin from "/svg/Bitcoin Badge.svg";
import polygon from "/svg/Coinnomad logo.svg";
import ShowAssets2 from "./ShowAssets2";

const AddEmployee = ({
  setSchEmployees,
  addEmployees,
  setAddEmployees,
  existData,
  setExistData,
  loadEmployees,
  setLoadEmployees,
  getEmployees,
}) => {
  const [loading, setLoading] = useState(false);
  const [showAssets, setShowAssets] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState({ name: "", value: "" });
  const [walletType, setwalletType] = useState("Select Asset");

  const accessToken = secureLocalStorage.getItem("accessToken");

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      asset: "",
      walletAddress: "",
    },
    validationSchema: addEmployeesSchema,
    onSubmit: (values) => {
      setLoading(true);

      axios
        .post(
          `/api/employee/register`,
          {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            asset: values.asset,
            walletAddress: values.walletAddress,
          },
          config
        )
        .then((res) => {
          toast.success("Employee added successfully");
          setAddEmployees(false);
          setExistData((prev) => !prev);
          // getEmployees();
        })
        .catch((err) => {
          setLoadEmployees(false);
          console.error("Error registering employee:", err);
          toast.error(err.response.message || "An error occurred");
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
    formik.setFieldValue("asset", asset == "Matic" ? "Polygon" : "BTC");
  };

  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowAssets(false);
    }
  };

  useEffect(() => {
    if (showAssets) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAssets]);

  useEffect(() => {
    handleAssetClick(walletType);
  }, [walletType]);

  return (
    <>
      {addEmployees && (
        <div
          onClick={() => setAddEmployees(false)}
          className="w-full h-full fixed top-0  cursor-pointer left-0 right-0 bottom-0 flex justify-center items-center z-40 modalBg"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="z-40 overflow-y-auto absolute cursor-auto bg-white w-[450px] max-h-full flex flex-col justify-start items-start duration-200 top-0 modalContainer right-0"
          >
            <div className="flex justify-end items-center gap-[152px] py-[18px] px-[24px] w-full">
              <HiOutlineXMark
                onClick={() => setAddEmployees(false)}
                className="cursor-pointer text-[1.75rem] text-[#1F2937]"
              />
            </div>
            <div className="w-full flex flex-col items-start gap-1 py-4 px-6">
              <h1 className="text-[#151515] text-[1.75rem] font-bold leading-9 tracking-[-.56px]">
                Add employee
              </h1>
              <p className="text-[1rem] text-[#9C9C9C] font-semibold leading-6">
                Enter employee details
              </p>
            </div>
            <form
              className="w-full flex flex-col items-start gap-8 p-6"
              onSubmit={formik.handleSubmit}
            >
              <InputField
                label="First Name"
                placeholder="Enter First Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="firstName"
                value={formik.values.firstName}
                type="text"
                error={formik.touched.firstName && formik.errors.firstName}
              />
              <InputField
                label="Last Name"
                placeholder="Enter Last Name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="lastName"
                value={formik.values.lastName}
                type="text"
                error={formik.touched.lastName && formik.errors.lastName}
              />
              <InputField
                label="Email Address"
                placeholder="Enter Email Address"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="email"
                value={formik.values.email}
                type="text"
                error={formik.touched.email && formik.errors.email}
              />
            
              <div
                ref={dropdownRef}
                onClick={() => {
                  setShowAssets((prev) => !prev);
                }}
                className="relative flex flex-col items-start gap-2 w-full"
              >
                <label
                  className="relative text-[#151515] text-[.875rem] font-semibold leading-4"
                  htmlFor="Send from"
                >
                  Assets
                </label>
                <div className="outline-none justify-between  border-none cursor-pointer bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg">
                  {walletType == "Select Asset" && (
                    <p className="text-[#838385]">Select Asset</p>
                  )}
                  {walletType == "Matic" && (
                    <div className="flex gap-x-2">
                      <img src={polygon} alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-[#151515] text-lg font-bold uppercase">
                          Matic
                        </h1>
                        <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold">
                          Polygon
                        </p>
                      </div>
                    </div>
                  )}
                  {walletType == "BTC" && (
                    <div className="flex gap-x-2">
                      <img src={bitcoin} alt="" />
                      <div className="flex flex-col">
                        <h1 className="text-[#151515] text-lg font-bold uppercase">
                          Bitcoin
                        </h1>
                        <p className="text-[#9C9C9C] text-[.875rem] leading-4 font-semibold">
                          BTC
                        </p>
                      </div>
                    </div>
                  )}

                  <IoIosArrowDown
                    className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${
                      showAssets
                        ? `rotate-[180deg] duration-200`
                        : `rotate-0 duration-200`
                    }`}
                  />
                </div>
                {showAssets && <ShowAssets2 onAssetClick={setwalletType} />}
              </div>

              <InputField
                label="Wallet Address"
                placeholder="Enter Wallet Address"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="walletAddress"
                value={formik.values.walletAddress}
                type="text"
                error={
                  formik.touched.walletAddress && formik.errors.walletAddress
                }
              />

              <div className="bg-[#EAEDFD] rounded-lg flex items-center self-stretch gap-6 py-6 px-4">
                <div className="flex justify-center items-center gap-4">
                  <div className="flex items-start gap-4">
                    <img
                      className="object-contain w-6 h-6"
                      src={calendar}
                      alt="Calendar"
                    />
                    <div className="flex flex-col items-start gap-1">
                      <h1 className="text-[#000000] text-[1rem] leading-[18px] font-semibold">
                        Schedule
                      </h1>
                      <p className="text-[#9C9C9C] text-[.875rem] font-semibold leading-5">
                        Automate payment and control how you want to pay this
                        employee
                      </p>
                    </div>
                  </div>
                  <IoIosArrowForward
                    onClick={() => {
                      setAddEmployees(false);
                      setSchEmployees(true);
                    }}
                    className="text-[#1F2937] text-[1.8rem] cursor-pointer font-bold"
                  />
                </div>
              </div>
              <div className="pt-4 pb-10 px-6 flex w-full flex-col justify-center items-center gap-[10px]">
                <FormButton
                  btnName="Add"
                  disabled={loading}
                  loading={loading}
                  width={`w-[402px]`}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddEmployee;
