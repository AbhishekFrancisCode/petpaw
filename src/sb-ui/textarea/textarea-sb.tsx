import React, { useState } from "react";

const SbTextarea = (props: any) => {
  const [strlen, setstrlen] = useState(0);
  const onChangehandler = (e: any) => {
    if (props.clickHandler) props.clickHandler(e.target.value);
    setstrlen(e.target.value.length);
  };
  const {
    type,
    id,
    name,
    value,
    placeholder,
    clickHandler,
    register,
    required,
    max,
    min,
    focus,
    rows
  } = props;
  return (
    <div className="flex flex-col ">
      <textarea
        required={required}
        {...register(name, {
          minLength: min
        })}
        rows={rows}
        maxLength={max}
        inputprops={{ disableUnderline: true }}
        id={id}
        name={name}
        value={value}
        onChange={(e) => {
          onChangehandler(e);
        }}
        placeholder={placeholder}
        type={type ? type : "text"}
        autoFocus={focus}
        className={`text-xs text-black min-w-full min-h-32 border border-[#C2C2C2] rounded-xl focus:border-[#C2C2C2] focus:ring-[#C2C2C2] my-1`}
      />
      <p className="text-blac w-full text-end">{`${strlen} / 300`}</p>
    </div>
  );
};

export default SbTextarea;
