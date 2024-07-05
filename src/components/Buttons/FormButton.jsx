import React from "react";
import { ScaleLoader } from "react-spinners";

const FormButton = ({ btnName, loading, value, width, disabled }) => {
  return (
    <button
      type="submit"
      className={
        loading || !value
          ? ` ${
              disabled ? `bg-[#2F4EED]/30` : "bg-[#2F4EED]"
            } px-2 py-2 rounded-lg text-white h-[3.5em] gap-[40px] ${
              width ? width : `w-full`
            }`
          : `bg-[#2F4EED] px-2 py-2 rounded-lg text-white h-[3.5em] gap-[40px] ${
              width ? width : `w-full`
            }`
      }
    >
      {loading ? (
        <ScaleLoader
          color="#fff"
          height={15}
          className="translate-y-[3px]"
          disabled={loading || !value}
          type="submit"
        />
      ) : (
        btnName
      )}
    </button>
  );
};

export default FormButton;
