import React from "react";
import "./textarea.css";

export const Textarea = ({ placeholder, value, onChange, className = "" }) => {
  return (
    <textarea
      className={`custom-textarea ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};
