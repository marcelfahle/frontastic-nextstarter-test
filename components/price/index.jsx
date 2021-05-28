import React from "react";

const Price = ({
  value,
  className = "",
  variant = "",
  currency: variantCurrency
}) => {
  return <span className={`${variant} ${className}`}>value</span>;
};

export default Price;
