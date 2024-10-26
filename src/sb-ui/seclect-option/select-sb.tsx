import React from "react";
import Select from "react-select";

const SbSeclect = (props: any) => {
  const { label, type, id, name, value, placeholder, register, required, focus, option, onChange } =
    props;
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      minHeight: "48px", // Adjust the height of the control (select box)
      height: "48px", // Adjust the height of the control (select box)
      border: "1px solid transprent",
      borderRadius: "6px",
      boxShadow: state.isFocused ? "0 0 0 1px #666666" : "",
      "&:hover": {
        borderColor: "#666666"
      }
    })
  };
  return (
    <div className="flex flex-col ">
      {label ? (
        <label className="block mb-2 text-sm font-medium text-gray-900">{`${label}*`}</label>
      ) : (
        <></>
      )}
      <Select
        required={required}
        {...register(name)}
        options={option}
        isClearable
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        autoFocus={focus}
        styles={customStyles}
        className={`text-black min-w-full  my-1`}
      />
    </div>
  );
};

export default SbSeclect;
