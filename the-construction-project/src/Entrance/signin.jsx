import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import "./signin.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function SignIn() {

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  //   const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);


  const [showPwd, setShowPwd] = useState(false);

  function showPassword() {
    setShowPwd((showPwd) => !showPwd);
  }

  console.log(showPwd);


  useEffect(() => {
    emailRef.current.focus();
  }, []);

  //   useEffect(() => {
  //     setValidMail((validMail) => validMail + EMAIL_REGEX.test(email));
  //   }, [email]);

  const validMail = EMAIL_REGEX.test(email);

  //   useEffect(() => {
  //     setErrMsg("");
  //   }, []);

  const submit = async (event) => {
    event.preventDefault();

    const mailVal = EMAIL_REGEX.test(email.trim());

    if (!mailVal) {
      setErrMsg("Your Email is Invalid");
      return;
    }
  };

  return (
    <div className="body">
      <div className="form">
        <Link to="/" className="craft-logo">
          <img
            src="../images/Craft-logo-icon.png"
            alt="craft-logo"
            className="main-logo"
          />
        </Link>

        <div className="welcome-google-divider">
          <h3 className="welcome-txt">Welcome back!</h3>

          <a href="Google Sign in" className="google-btn">
            <img src="../images/google.png" alt="google-image" />
            Sign in with Google
          </a>

          <div className="hr-login-option">
            <hr />
            <div className="divider-txt">Or continue with</div>
            <hr />
          </div>

          <form action="" id="form" onSubmit={submit}>
            <div className="input">
              <label htmlFor="email"> Email</label>

              <div className="input-icon">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email Address"
                  className={`email ${email.trim() && !validMail ? "wrong" : ""}`}
                  required
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrMsg("");
                  }}
                  onFocus={() => {
                    setMailFocus(true);
                  }}
                  onBlur={() => {
                    setMailFocus(false);
                  }}
                  aria-invalid={email.trim() !== "" && !validMail}
                  aria-describedby="uidnote"
                />

                {/* <p
                  ref={errRef}
                  className={
                    mailFocus && !validMail && email
                      ? "error-message"
                      : "block-message "
                  }
                  aria-live="assertive"
                >
                  {errMsg}
                </p> */}
                

                <p
                  id="uidnote"
                  ref={errRef}
                  className={
                    (mailFocus && email.trim() && !validMail) || errMsg
                      ? "error-message"
                      : "block-message"
                  }
                  aria-live="polite"
                >
                  {errMsg || "Please enter a valid email address."}
                </p>
              </div>
            </div>

            <div className="input">
              <label for="password"> Password</label>

              <div className="input-icon">
                <input
                  type={showPwd ? "text" : "password"}
                  name="password"
                  placeholder="Enter your Password"
                  id="password"
                  required
                />

                <div onClick={showPassword}>
                  {showPwd ? (
                    <i class="hgi hgi-stroke hgi-rounded hgi-eye"></i>
                  ) : (
                    <i className="hgi hgi-stroke hgi-rounded hgi-view-off closed-eye"></i>
                  )}
                </div>
              </div>

              <Link to="/emailauth" className="forget-password">
                Forget Password
              </Link>
            </div>

            <button
              disabled={!validMail ? true : false}
              type="submit"
              className="sign-cta"
            >
              Sign In
            </button>
          </form>

          <p className="signup">
            Are you a new user: <Link to="/signup">Create a new Account</Link>
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
