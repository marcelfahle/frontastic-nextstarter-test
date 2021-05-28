import { useState } from "react";
import { useContext } from "frontastic";
import { useRouter } from "next/router";

import { Login } from "../../components/entrance/login";
import { Register } from "../../components/entrance/register";
import { ResetPassword } from "../../components/entrance/reset-password";

const FORM_TYPE = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  FORGOTTEN_PASSWORD: "FORGOTTEN_PASSWORD"
};

export const Entrance = ({ data }) => {
  const { context, isLoading, isError } = useContext();
  const router = useRouter();
  const [showLoader, setShowLoader] = useState(false);
  const [form, setForm] = useState(FORM_TYPE.REGISTER);
  const showEasy = "showEasy 0.4s";

  console.log("data entrance", data, context, router);

  const handleRegister = async e => {
    const details = {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    };
    try {
      const fetchRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/account/register`,
        details
      );
      const data = await fetchRes.json();
      return data;
    } catch (e) {
      return e;
    }
  };

  const handleLogin = async e => {
    console.log("login");
    const details = {
      method: "POST",
      body: JSON.stringify(e),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    };
    try {
      const fetchRes = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/account/login`,
        details
      );
      const data = await fetchRes.json();
      return data;
    } catch (e) {
      return e;
    }
  };

  if (isError) return <p>Failed to load context!</p>;
  if (isLoading || !context) return null;

  // if the user is logged in, no need to show entrance. send to profile
  // if (context.session.loggedIn && router.asPath !== "/account/profile") {
  //   router.push("/account/profile");
  // }

  return (
    <>
      {form === FORM_TYPE.LOGIN && (
        <div style={{ animation: showEasy }}>
          <Login
            showLoader={showLoader}
            onGotoRegister={() => {
              setForm(FORM_TYPE.REGISTER);
            }}
            onGotoResetPassword={() => {
              setForm(FORM_TYPE.FORGOTTEN_PASSWORD);
            }}
            handleLogin={(email, password) => {
              setShowLoader(true);
              handleLogin(email, password);
            }}
          />
        </div>
      )}
      {form === FORM_TYPE.REGISTER && (
        <div style={{ animation: showEasy }}>
          <Register
            showLoader={showLoader}
            onGotoLogin={() => {
              setForm(FORM_TYPE.LOGIN);
            }}
            handleRegister={handleRegister}
          />
        </div>
      )}
      {form === FORM_TYPE.FORGOTTEN_PASSWORD && (
        <div style={{ animation: showEasy }}>
          <ResetPassword
            showLoader={showLoader}
            onGotoLogin={() => {
              setForm(FORM_TYPE.LOGIN);
            }}
            handleRequestPasswordReset={email => {
              setShowLoader(true);
              handleRequestPasswordReset(email);
            }}
          />
        </div>
      )}
    </>
  );
};
