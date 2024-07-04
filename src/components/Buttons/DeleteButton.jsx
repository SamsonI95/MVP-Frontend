import React from "react";
import { ScaleLoader } from "react-spinners";

const DeleteButton = ({ btnName, loading, value, width }) => {
  return (
    <button
      type="submit"
      className={
        loading || !value
          ? `bg-[#ED2F2F]/30 px-2 py-2 rounded-lg ${width ? width : `w-full`} text-white h-[3.5em] gap-[40px]`
          : `bg-[#ED2F2F] px-2 py-2 rounded-lg ${width ? width : `w-full`} text-white h-[3.5em] gap-[40px]`
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
