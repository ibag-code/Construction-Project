import { Link } from "react-router";
import "./PasswordReset.css";

export function PasswordReset() {
  return (
    <>
        <div className="the-form">
          <Link to="/signup" className="arrow-back">
            <i className="hgi hgi-stroke hgi-rounded hgi-arrow-left-01"></i>
          </Link>

          <div className="verify-text">
            <h3>Set Password</h3>
            <p>
              Password requires a minimum of 8 characters and contains a mix of letters, numbers, and symbols.
            </p>
          </div>

          <form id="otpForm">
            <div className="otp-countdown">
            <div className="input">
              <label for="password"> Password</label>

              <div className="input-icon">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  id="password"
                  required
                  className="password"
                />

                <i className="hgi hgi-stroke hgi-rounded hgi-view-off closed-eye"></i>
              </div>
            </div>

            <div className="input">
              <label for="re-enter-password">Re-enter-Password</label>

              <div className="input-icon">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  id="re-enter-password"
                  required
                  className="re-password"
                />
              </div>
            </div>
            </div>
            <Link to='/signin' type="submit" className="verify-btn">
              Continue
            </Link>
          </form>
        </div>
    </>
  );
}
