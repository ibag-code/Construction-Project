import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import "./signin.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function SignIn() {
  // const email = "asimiyuabdulahi2gmail.com";
  // const password = "Ojumirayo$2001";

  // if (!EMAIL_REGEX.test(email)) {
  //   alert("Your email Address is not correct");
  //   return;
  // }

  // if (!PWD_REGEX.test(password)) {
  //   alert("Your Password is not correct");
  //   return;
  // }
  // alert("Your inputs meet the requirements!");

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidMail(result);
    // console.log(validMail);
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [email]);

  const submit = async (event) => {
    event.preventDefault();
     
    
  }

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
                  name="password"
                  id="email"
                  placeholder="Enter your email Address"
                  className={`email ${email && !validMail ? "wrong" : ""}`}
                  required
                  ref={emailRef}
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
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

                <p
                  ref={errRef}
                  className={
                    mailFocus && !validMail && email
                      ? "error-message"
                      : "block-message "
                  }
                  //   className={errMsg ? "errMsg" : "Offscreen"}
                  aria-live="assertive"
                >
                  Kindly go through ur mail cus it is wrong
                  {errMsg}
                </p>
              </div>
            </div>

            <div className="input">
              <label for="password"> Password</label>

              <div className="input-icon">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  id="password"
                  required
                />

                <i className="hgi hgi-stroke hgi-rounded hgi-view-off closed-eye"></i>
              </div>

              <Link to="/emailauth" className="forget-password">
                {" "}
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
