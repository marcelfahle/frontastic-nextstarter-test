import React from "react";
import { ErrorMessage as Message } from "@hookform/error-message";

//import './style.scss'

const ErrorMessage = ({ errors, name, as = "div" }) => {
  const slideDown = "slideDown 0.4s";

  return (
    <div style={{ animation: errors[name] ? slideDown : "none" }}>
      {errors[name] && (
        <div style={{ animation: slideDown }}>
          <div className="arrow-up-system-error" />
          <Message
            className="error-message-text-system-error"
            errors={errors}
            name={name}
            as={as}
          />
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;
