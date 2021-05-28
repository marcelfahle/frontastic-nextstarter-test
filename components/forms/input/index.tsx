import React from "react";
import PropTypes from "prop-types";

const Input = ({
  id,
  type,
  name,
  placeholder,
  className,
  checked,
  disabled,
  required,
  hidden,
  onChange,
  value,
  min,
  max,
  step,
  ref,
  autoFocus
}) => {
  return (
    <input
      aria-label={placeholder || name}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      className={className}
      checked={checked}
      disabled={disabled}
      required={required}
      hidden={hidden}
      onChange={onChange}
      value={value}
      min={min}
      max={max}
      step={step}
      ref={ref}
      autoFocus={autoFocus}
    />
  );
};

export default Input;
