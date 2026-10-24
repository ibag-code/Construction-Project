import { Link } from "react-router";
import "./signup.css";
import { useState } from "react";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [mail, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");


  const validMail = EMAIL_REGEX.test(mail.trim());
  // console.log(validMail)
  const validPwd = PWD_REGEX.test(password.trim());
  // console.log(validPwd);

  const setValidMatch = password === rePassword;
  // console.log(setValidMatch)



  const [showPwd, setShowPwd] = useState(false);
  function chgEye() {
    setShowPwd((showPwd) => {
      return !showPwd;
    });
    // setShowPwd((showPwd) => !showPwd);
  }

  return (
    <div className="body">
      <div className="main-page">
        <Link to="/" className="craft-logo">
          <img
            src="../images/Craft-logo-icon.png"
            alt="craft-logo"
            className="main-logo"
          />
        </Link>

        <div className="welcome-google-divider">
          <h3 className="welcome-txt">Get Started Now!</h3>

          <a href="Google Sign in" className="google-btn">
            <img src="../images/google.png" alt="google-image" />
            Sign Up with Google
          </a>

          <div className="hr-login-option">
            <hr />
            <div className="divider-txt">Or continue with</div>
            <hr />
          </div>

          <form id="sign-up-form">
            <div className="input-fl">
              <div className="input-fl-name">
                <label htmlFor="first-name"> First name</label>
                <input
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  type="text"
                  name="first name"
                  placeholder="Enter your last name"
                  id="first-name"
                  required
                />
              </div>

              <div className="input-fl-name">
                <label htmlFor="last-name"> Last name</label>
                <input
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  type="text"
                  name="last name"
                  placeholder="Enter your first name"
                  id="last-name"
                  required
                />
              </div>
            </div>

            <div className="input-fl-name">
              <label htmlFor="email">Email Address </label>
              <input
                type="email"
                name="email"
                id="email"
                value={mail}
                placeholder="Enter your email Address"
                className={mail.trim() && !validMail ? "wrong" : ""}
                required
                autoComplete="off"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="input">
              <label htmlFor="password"> Password</label>

              <div className="input-icon">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={!showPwd ? "password" : "text"}
                  name="password"
                  placeholder="Enter your Password"
                  id="password"
                  required
                  className={!validPwd && password.trim() ? "wrong" : ""}
                />

                <div onClick={chgEye}>
                  {!showPwd ? (
                    <i className="hgi hgi-stroke hgi-rounded hgi-view-off closed-eye"></i>
                  ) : (
                    <i class="hgi hgi-stroke hgi-rounded hgi-eye"></i>
                  )}
                </div>
              </div>
            </div>

            <div className="input">
              <label for="re-enter-password">Re-enter-Password</label>

              <div className="input-icon">
                <input
                  type={!showPwd ? "password" : "text"}
                  name="re-password"
                  placeholder="Enter your Password"
                  id="re-enter-password"
                  required
                  className={!setValidMatch && rePassword ? "wrong" : ""}
                  onChange={(e) => {setRePassword(e.target.value)
                    // console.log(e.target.value)
                  }}
                  
                />
              </div>
            </div>

            <button type="submit" className="sign-cta">
              Sign Up
            </button>
          </form>

          <p className="signup">
            Already have an Account:
            <Link to="/signin"> Sign in</Link>
          </p>
        </div>
      </div>

      <div className="authentication-image">
        <img
          src="../images/authentication-image.png"
          alt=""
          className="authentication-main-image"
        />
      </div>
    </div>
  );
}
