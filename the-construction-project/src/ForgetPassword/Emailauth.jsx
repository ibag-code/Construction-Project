import { Link } from "react-router";
import "./Emailauth.css";
import { useState } from "react";
import supabase from "../supabase-client";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

export function EmailAuth() {
  const [email, setEmail] = useState("");

  const [errMsg, setErrMsg] = useState("");

  const [message, setMessage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const validMail = EMAIL_REGEX.test(email);
  // console.log(validMail);

  const submit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setMessage("");

    console.log(isLoading);

    try {
      const response = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:5173/passwordreset",
      });

      console.log(response.data);
      console.log(response.error);

      setSuccess(true);

      if (response.error) {
        setErrMsg(`Error: ${response.error.message}`);
      }
      if (!response.error) {
        setMessage("Password reset link sent! Check your email inbox.");
      }

      console.log(isLoading);

      setTimeout(() => {
        setIsLoading(false);
        setMessage("");
        setSuccess(false);
      }, 4000);
    } catch (error) {
      setErrMsg("Could not save your email");
      console.log(error.message);
    }
  };

  //   const submit = async (e) => {
  //   e.preventDefault();

  //   setIsLoading(true);
  //   setMessage("");
  //   setErrMsg("");

  //   try {
  //     const response =
  //       await supabase.auth.resetPasswordForEmail(email, {
  //         redirectTo: "http://localhost:5173/passwordreset",
  //       });

  //     if (response.error) {
  //       setErrMsg(`Error: ${response.error.message}`);
  //       return;
  //     }

  //     setMessage("Password reset link sent! Check your email inbox.");
  //     setSuccess(true);

  //     setTimeout(() => {
  //       setMessage("");
  //       setSuccess(false);
  //     }, 4000);

  //   } catch (error) {
  //     setErrMsg("Could not send your password reset link.");
  //     console.log(error.message);

  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <>
      <div className="alert-container">
        <div className={success ? "alert" : "visible"}>
          <i class="hgi hgi-stroke hgi-rounded hgi-checkmark-circle-01"></i>
          {message}
        </div>
      </div>
      <div className="the-form">
        <Link to="/signin" className="arrow-back">
          <i className="hgi hgi-stroke hgi-rounded hgi-arrow-left-01"></i>
        </Link>

        <div className="verify-text">
          <h3>Forget password</h3>
          <p>
            Enter the email address associated with your account, and we will
            email you the verification code to reset your password.
          </p>
        </div>

        <form id="otpForm" onSubmit={submit}>
          <div className="otp-countdown">
            <div className="input-icon">
              <input
                type="email"
                placeholder="Enter your email Address"
                className={`email ${email.trim() && !validMail ? "wrong" : ""}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>
          <button disabled={!validMail} type="submit" className="action-btn ">
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </>
  );
}
