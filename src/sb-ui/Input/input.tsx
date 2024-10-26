"use client";

import { ChangeEvent } from "react";

interface dataFormProps {
  id?: string;
  label_class?: string;
  label?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  changeHandler?: (e: any) => void;
}

export default function Input({
  id,
  label_class,
  label,
  type,
  value,
  disabled,
  placeholder,
  changeHandler
}: dataFormProps) {
  const changeHandler1 = (e: ChangeEvent<HTMLInputElement>) => {
    if (changeHandler) changeHandler(e);
  };

  return (
    <label className={`block ${label_class}`}>
      <span className="text-gray-700">{label} </span>
      <input
        id={id}
        type={type ? type : "text"}
        defaultValue={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => changeHandler1(e)}
        className={`form-input mt-1 block w-full border-2 border-[#000000] border-opacity-5 rounded-md focus:border-[#DADADA] ] focus:ring-[#DADADA] `}
      />
    </label>
  );
}
