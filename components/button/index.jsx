import React from "react";

const Button = ({
  type = "button",
  name,
  className = "",
  disabled = false,
  children,
  onClick = () => {}
}) => {
  return (
    <button
      type={type}
      aria-label={name}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
