import './Signupauth.css'

export function SignupAuth() {
  return (

      <body>
        <div className="the-form">
          <div className="arrow-back">
            <i className="hgi hgi-stroke hgi-rounded hgi-arrow-left-01"></i>
          </div>

          <div className="verify-text">
            <h3>Verify your email</h3>
            <p>
              The verification code has been sent to your email craft@gmail.com
            </p>
          </div>

          <form id="otpForm">
            <div className="otp-countdown">
              <div className="otp-inputs">
                <input
                  type="text"
                  className="otp-field"
                  inputmode="numeric"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-field"
                  inputmode="numeric"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-field"
                  inputmode="numeric"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-field"
                  inputmode="numeric"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-field"
                  inputmode="numeric"
                  maxlength="1"
                  required
                />
                <input
                  type="text"
                  className="otp-field"
                  inputmode="numeric"
                  maxlength="1"
                  required
                />
              </div>
              <p className="count-down">
                Not yet received yet? <span>Resend Verification code </span>
              </p>
            </div>
            <button type="submit" className="verify-btn">
              Continue
            </button>
          </form>
        </div>
      </body>

  );
}
