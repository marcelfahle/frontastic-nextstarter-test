import React from "react";
import PropTypes from "prop-types";
//import { FormattedMessage, injectIntl, intlShape } from 'react-intl'
import { useForm } from "react-hook-form";

import Button from "../button";
import ButtonWithLoader from "../button/WithLoader";
import ErrorMessage from "../error-message";
import Input from "../input";

export function Register({ onGotoLogin, handleRegister, showLoader }) {
  const { register, handleSubmit, errors, watch } = useForm();
  const validEmail = "validation.email";
  const requiredField = "validation.required";

  const onSubmit = data => {
    // For now salutation and toc are mandatory on the backend,
    // but not according to our design
    handleRegister({
      salutation: "-",
      toc: true,
      ...data
    });
  };

  return (
    <div>
      <div
        className="flex items-center justify-center py-4"
        style={{ background: "#EDF2F7" }}
      >
        <span className="mr-8 text-base text-neutral-600 leading-tight font-bold">
          Already registered?
        </span>
        <Button
          name={"account.login.login"}
          variant="btn-outline btn-outline-black min-w-24 h-10"
          onClick={onGotoLogin}
        >
          Log In
        </Button>
      </div>

      <div className="mx-auto py-5 sm:py-10 w-full md:w-160 bg-background-primary flex flex-column">
        <div className="mx-auto w-96 ">
          <div className="mb-6 text-center text-2xl sm:text-3xl text-neutral-900 leading-none font-bold">
            Welcome on board! Sign up
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm text-neutral-700 leading-tight"
                htmlFor="signup-firstname"
              >
                First name
              </label>
              <Input
                id="login-firstname"
                name="firstName"
                type="text"
                className="mt-2"
                register={register({ required: requiredField })}
              />
              <ErrorMessage errors={errors} name="firstName" />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm text-neutral-700 leading-tight"
                htmlFor="signup-lastname"
              >
                Last name
              </label>
              <Input
                id="login-lastname"
                name="lastName"
                type="text"
                className="mt-2"
                register={register({ required: requiredField })}
              />
              <ErrorMessage errors={errors} name="lastName" />
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm text-neutral-700 leading-tight"
                htmlFor="signup-email"
              >
                Email address
              </label>
              <Input
                id="signup-email"
                name="email"
                type="text"
                className="mt-2"
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
                className="block mb-2 text-sm text-neutral-700 leading-tight"
                htmlFor="login-password"
              >
                Password
              </label>
              <Input
                id="login-password"
                name="password"
                type="password"
                className="mt-2"
                register={register({ required: requiredField })}
              />

              <div className="mt-2 text-xs text-gray-700 leading-tight">
                Must be at least 10 characters
              </div>
              <ErrorMessage errors={errors} name="password" />
            </div>

            <div className="my-5 h-2px bg-neutral-100" />

            <ButtonWithLoader
              name={"account.register.joinCatwalk"}
              showLoader={showLoader}
              className="bg-indigo-600 text-white font-bold w-full p-2.5 rounded-lg"
              type="submit"
            >
              Join Frontastic
            </ButtonWithLoader>

            <div className="mt-5 text-xs text-gray-700 leading-tight">
              By creating your account, you agree to our Terms and Conditions &
              Privacy policy
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
