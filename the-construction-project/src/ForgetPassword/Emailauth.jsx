import { Link } from "react-router";
import "./Emailauth.css";
import { useState } from "react";
import supabase from "../supabase-client";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

export function EmailAuth() {
  const [email, setEmail] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const validMail = EMAIL_REGEX.test(email);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = supabase.auth.resetPasswordForEmail(email);

      console.log(response.data);
      console.log(response.error);
    } catch (error) {
      setErrMsg("Could not save your email");
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="the-form">
        <Link to="/signin" className="arrow-back">
          <i className="hgi hgi-stroke hgi-rounded hgi-arrow-left-01"></i>
        </Link>

        {errMsg}

        <div className="verify-text">
          <h3>Forget password</h3>
          <p>
            Enter the email address associated with your account, and we will
            email you the verification code to reset your password.
          </p>
        </div>

        <form id="otpForm" onSubmit={submit}>
          <div className="otp-countdown">
            <div className="otp-inputs">
              <input
                type="email"
                placeholder="Enter your email Address"
                className="my-otp-field"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>
          <button
            disabled={!validMail  ? true : false}
            type="submit"
            className="verify-btn"
          >
            Continue
          </button>
        </form>
      </div>
    </>
  );
}
