import React from "react";

const IconButton = ({
  icon,
  name,
  onClick = () => {},
  children,
  variant = "text-2xl"
}) => {
  return (
    <button aria-label={name} onClick={onClick} className={variant}>
      {icon && icon}
      {children && <p>{children}</p>}
    </button>
  );
};

export default IconButton;
