import React from "react";
import { ScaleLoader } from "react-spinners";

const DeleteButton = ({
  btnName,
  loading,
  value,
  width,
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      // bg-[#ED2F2F]
      
      className={
        loading || !value
          ? ` ${
              disabled ? `bg-[#ED2F2F]/30` : "bg-[#ED2F2F]"
            } px-2 py-2 rounded-lg text-white h-[3.5em] gap-[40px] ${
              width ? width : `w-full`
            }`
          : `bg-[#ED2F2F] px-2 py-2 rounded-lg text-white h-[3.5em] gap-[40px] ${
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

export default DeleteButton;
