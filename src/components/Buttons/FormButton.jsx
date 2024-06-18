import React from "react";
import { ScaleLoader } from "react-spinners";

const FormButton = ({ btnName, loading, value }) => {
  return (
    <button
      type="submit"
      className={
        loading || !value
          ? `bg-[#2F4EED]/30 px-2 py-2 rounded-lg w-full text-white h-[3.5em] gap-[40px]`
          : `bg-[#2F4EED] px-2 py-2 rounded-lg w-full text-white h-[3.5em] gap-[40px]`
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
