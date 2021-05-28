import React from "react";
import PropTypes from "prop-types";

import Button from ".";
import LoaderButton from "../Loaders/LoaderButton";

const ButtonWithLoader = ({
  name,
  showLoader = false,
  onClick = () => {},
  className = "",
  children,
  ...otherProps
}) => {
  return (
    <>
      {showLoader ? (
        <LoaderButton />
      ) : (
        <Button
          name={name}
          className={` ${className}`}
          onClick={onClick}
          style={{ transition: "all .15s ease" }}
          {...otherProps}
        >
          {children}
        </Button>
      )}
    </>
  );
};

export default ButtonWithLoader;
