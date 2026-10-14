import { Link } from "react-router";
import "./Emailauth.css";

export function EmailAuth() {
  return (
    <>
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

        <form id="otpForm">
          <div className="otp-countdown">
            <div className="otp-inputs">
              <input type="email" placeholder="Enter your email Address" 
              className="my-otp-field"
              />
            </div>

          </div>
          <Link to="/emailverify" type="submit" className="verify-btn">
            Continue
          </Link>
        </form>
      </div>
    </>
  );
}
