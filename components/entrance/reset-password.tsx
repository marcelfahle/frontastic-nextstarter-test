import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import Button from "../button";
import ButtonWithLoader from "../button/WithLoader";
import ErrorMessage from "../error-message";
import Input from "../input";

export function ResetPassword({
  showLoader,
  onRequestPasswordReset,
  onGotoLogin
}) {
  const { register, handleSubmit, errors } = useForm();
  const validEmail = "validation.email";
  const requiredField = "validation.required";

  const onSubmit = ({ email }) => {
    onRequestPasswordReset(email.toLowerCase());
  };

  return (
    <div className="m-8 w-full sm:w-96 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="text-sm text-neutral-700 leading-tight"
            htmlFor="login-email"
          >
            Email address
          </label>
          <Input
            id="login-email"
            name="email"
            type="text"
            className="form-input mt-2"
            register={register({
              required: requiredField,
              pattern: {
                // TODO - please double check if this regex is ok
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i,
                message: validEmail
              }
            })}
          />
          <ErrorMessage errors={errors} name="email" />
        </div>

        <ButtonWithLoader
          name={"reset password"}
          showLoader={showLoader}
          type="submit"
          className="bg-indigo-600 text-white font-bold w-full p-2.5 rounded-lg"
        >
          Change Password
        </ButtonWithLoader>

        <Button
          name={"back to log in"}
          onClick={onGotoLogin}
          className="btn btn-primary w-full h-10 mt-5"
        >
          Back to Log In
        </Button>
      </form>
    </div>
  );
}
