import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import Button from "../button";
import ButtonWithLoader from "../button/WithLoader";
import ErrorMessage from "../error-message";
import Input from "../input";

export function Login({
  intl,
  onGotoRegister,
  onGotoResetPassword,
  handleLogin,
  showLoader
}) {
  const { register, handleSubmit, errors } = useForm();
  const validEmail = "validation.email";
  const requiredField = "validation.required";

  const onSubmit = ({ email, password }) => {
    handleLogin(email, password);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-0 md:mt-8 flex flex-col items-center bg-background-primary w-full md:w-160">
        <div className="px-4 my-8 w-full sm:w-96">
          <div className="mb-8 text-2xl sm:text-3xl text-center font-bold leading-none">
            Log In
          </div>

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

            <div className="mb-5">
              <label
                className="text-sm text-neutral-700 leading-tight"
                htmlFor="login-password"
              >
                Password
              </label>
              <Input
                id="login-password"
                name="password"
                type="password"
                className="form-input mt-2"
                register={register({ required: requiredField })}
              />
              <ErrorMessage errors={errors} name="password" />
            </div>

            <ButtonWithLoader
              name={"submit"}
              showLoader={showLoader}
              type="submit"
              className="bg-indigo-600 text-white font-bold w-full p-2.5 rounded-lg"
            >
              Log In
            </ButtonWithLoader>

            <div
              className="cursor-pointer mt-4 text-sm text-center text-neutral-900 leading-tight"
              onClick={onGotoResetPassword}
            >
              Forgot Password?
            </div>
          </form>
        </div>

        <div className="-mx-4 w-full h-1 bg-neutral-100 md:none" />

        <div className="px-4 my-5 w-full md:w-100 text-center">
          <div className="mb-5 text-lg text-center text-neutral-600 font-bold">
            New to Catwalk?
          </div>

          <Button
            name="account.register.createAccount"
            className="py-2.5 px-6 border border-gray-900 rounded-lg"
            onClick={onGotoRegister}
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
}
