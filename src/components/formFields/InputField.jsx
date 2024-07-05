const InputField = ({
  label,
  placeholder,
  name,
  onChange,
  type,
  value,
  error,
  errorText,
  className,
  min,
  max,
  onBlur,
  disabled
}) => {
    return (
      <div className="flex flex-col justify-start items-start w-full">
        <div className="text-[#101010] text-[.88rem] leading-4 font-semibold mb-2 flex items-center gap-x-2">
          {label}{" "}
          {error ? (
            <span className="text-red-500">*</span>
          ) : (
            <span className="text-[#838385]">*</span>
          )}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          className={`${
            error ? "border-red-500" : "border-0"
          } px-4 py-4 rounded-lg w-full bg-[#F7F7F7] border-0 outline-none text-[1rem] leading-6 font-normal placeholder:text-[#838385] text-[#000000] relative`}
          min={min}
          max={max}
          name={name}
          value={value}
          disabled={disabled}
        >
        </input>
        {error && (
          <p className="text-red-500 text-[.88rem] leading-4 mt-2 font-light">
            {errorText}
          </p>
        )}
      </div>
    );
};

export default InputField;