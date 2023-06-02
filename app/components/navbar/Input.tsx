"use client";
import React from "react";

interface inputProps {
  label: string;
  placeHolder: string;
  name: string;
}

const Input = ({ label, placeHolder, name }: inputProps) => {
  return (
    <div className="mb-[20px] box-border flex flex-col">
      <label
        htmlFor={label}
        className="text-[11px] uppercase opacity-50 font-normal tracking-[1px] mb-[0.5rem] box-border inline-block"
      >
        {label}
      </label>
      <input
        type="text"
        className={`bg-[#3f3f3f] text-[#ddd] text-[13px] rounded-[3px] border-none py-[0.75rem] px-[1.25rem] h-auto outline-none`}
        placeholder={placeHolder}
        name={name}
        required
      />
    </div>
  );
};

export default Input;
