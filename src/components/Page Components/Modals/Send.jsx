import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ShowAssets from "./ShowAssets";
import { useFormik } from "formik";
import axios from "axios";
import { sendBitcoin, sendBitcoinAnyone, signIn } from "@/Data/formikUtils";
import { toast } from "react-toastify";
import InputField from "@/components/formFields/InputField";
import FormButton from "@/components/Buttons/FormButton";
import bitcoin from "/svg/Bitcoin Badge.svg";
import polygon from "/svg/Coinnomad logo.svg";
import secureLocalStorage from "react-secure-storage";
import ShowAssets2 from "./ShowAssets2";

const Send = ({
  sendAssets,
  setSendAssets,
  setSendReceiveModal,
  setReloadPage,
}) => {
  const [walletType, setwalletType] = useState("Select Asset");
  const [priceValue, setPriceValue] = useState({
    dollarAmount: "",
    value: "",
    name: "",
  });
  const user = secureLocalStorage.getItem("user");
  const [formValid, setFormValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setSendAssets(false);
    }
  };

  useEffect(() => {
    setFormValid(formik.isValid);
    if (sendAssets) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sendAssets]);

  const config = {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  const formik = useFormik({
    initialValues: {
      walletAddress: "",
      amount: "",
    },
    validationSchema: sendBitcoinAnyone,
    onSubmit: async (values) => {
      setLoading(true);

      try {
        const response = await axios.post(
          walletType == "Matic"
            ? "/api/wallet/send-to-anyone/polygon/"
            : walletType == "BTC"
            ? "/api/wallet/send-to-anyone/bitcoin/"
            : "",
          {
            receiverWalletAddress: values.walletAddress,
            amount: Number(values.amount),
          },
          config
        );

        console.log(response.data);
        if (response.data.success) {
          toast.success(response.data.message);
        }
      } catch (error) {
        console.error("Error signing in:", error);
        toast.error("Insufficient Balance"|| "Something went wrong");
      } finally {
        setLoading(false);
        setReloadPage((prev) => !prev);
        setSendReceiveModal(null);
      }
    },
  });

  return (
    <form
      className="w-full h-full flex flex-col justify-between items-center"
      onSubmit={formik.handleSubmit}
    >
      <div className="px-6 py-8 gap-6 inline-flex flex-col items-start justify-between w-full">
        <div
          ref={dropdownRef}
          onClick={() => setSendAssets((prev) => !prev)}
          className="relative flex flex-col items-start gap-2 w-full cursor-pointer"
        >
          <label
            className="relative text-[#151515] text-[.875rem] font-semibold leading-4"
            htmlFor="Send from"
          >
            Send from
          </label>
          <div className="outline-none justify-between border-none bg-[#F7F7F7] h-[56px] px-4 gap-2 w-full self-stretch flex items-center text-base placeholder:text-[#838385] font-normal leading-6 text-[#000000] rounded-lg">
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
            <div className="flex justify-between items-center gap-x-4">
              <p className="flex flex-col">
                <p className="font-semibold">
                  {priceValue.dollarAmount && "$"}
                  {priceValue.dollarAmount}
                </p>
                <p className="font-semibold text-[12px] ">
                  {priceValue.value}
                  <span className=" ml-1 ">{priceValue.name}</span>
                </p>
              </p>

              <IoIosArrowDown
                className={`text-[1.125rem] text-[#151515] font-bold cursor-pointer ${
                  sendAssets
                    ? `rotate-[180deg] duration-200`
                    : `rotate-0 duration-200`
                }`}
              />
            </div>
          </div>
          {sendAssets && (
            <ShowAssets
              onAssetClick={setwalletType}
              setPriceValue={setPriceValue}
            />
          )}
        </div>

        <InputField
          placeholder={`Enter address`}
          label={`Send to`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name="walletAddress"
          value={formik.values.walletAddress}
          type="text"
          error={formik.touched.walletAddress && formik.errors.walletAddress}
        />
        <InputField
          placeholder={`amount`}
          label={`Amount`}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          name="amount"
          value={formik.values.amount}
          type="text"
          error={formik.touched.amount && formik.errors.amount}
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-[10px] pt-4 pb-8 px-6 w-full">
        <FormButton
          btnName="Send"
          // disabled={formValid || loading}
          loading={loading}
          width={`w-[402px]`}
        />
      </div>
    </form>
  );
};

export default Send;
