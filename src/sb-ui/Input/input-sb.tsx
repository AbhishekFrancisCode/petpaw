import React from "react";
import { ErrorMessage } from "@hookform/error-message";

const SbInput = (props: any) => {
  const {
    type,
    id,
    name,
    value,
    label,
    placeholder,
    clickHandler,
    register,
    required,
    number,
    min,
    focus,
    errors,
    disabled = false,
    validation
  } = props;
  return (
    <div className="">
      {label ? (
        <label className="block mb-2 opacity-80 text-black text-sm font-normal leading-tight">{`${label}${required ? "*" : ""}`}</label>
      ) : (
        <></>
      )}
      <input
        {...register(name, {
          required: required,
          minLength: min,
          // validation
        })}
        inputprops={{ disableUnderline: true }}
        id={id}
        name={name}
        value={value}
        onChange={clickHandler}
        placeholder={placeholder}
        type={`${name === "email" ? name : "text"}`}
        autoFocus={focus}
        disabled={disabled}
        // autoComplete="off"
        className={`text-black placeholder-opacity-85 min-w-full max-w-[294px] min-h-12 border border-[#C2C2C2] rounded-md focus:border-[#C2C2C2] focus:ring-[#C2C2C2] my-1`}
        //   autoComplete=""
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => (
          <p className="text-sm" style={{ color: "red" }}>
            {message}
          </p>
        )}
      />
      {/* {errors[name] && (
        <p className="text-sm" style={{ color: "red" }}>
          This field is required
        </p>
      )} */}
    </div>
  );
};

export default SbInput;
