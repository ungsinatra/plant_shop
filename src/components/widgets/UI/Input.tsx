import React from "react";
import { TInput } from "../../../types/inedx";

const Input: React.FC<TInput> = ({
  labelText,
  name,
  onChange,
  placeholder,
  value,
  type,
  className,
}) => {
  return (
    <>
      <div style={{ marginTop: 30 }}>
        <label style={{ display: "block" }} className="input__label" htmlFor={name}>
          {labelText}
        </label>
        <input
          type={type}
          className={className}
          name={name}
          placeholder={placeholder || ""}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </>
  );
};

export default Input;
