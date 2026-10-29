import { Link, useLocation } from "react-router";
import { useState, useRef, useEffect } from "react";
import supabase from "../supabase-client";
import "./signin.css";

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function SignIn() {
  const location = useLocation();

  const [signupMessage, setSignupMessage] = useState(
    location.state?.signupMessage ?? "",
  );
  useEffect(() => {
    if (!signupMessage) return;

    const timer = setTimeout(() => {
      setSignupMessage("");
    }, 4000);

    return () => clearTimeout(timer);
  }, [signupMessage]);

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [mailFocus, setMailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  // const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [succMsg, setSuccMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [showPwd, setShowPwd] = useState(false);

  function showPassword() {
    setShowPwd((showPwd) => !showPwd);
  }

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  // let password = 'Crafting7@'
  const validMail = EMAIL_REGEX.test(email);
  // console.log(validMail);
  const validPwd = PWD_REGEX.test(pwd);
  // console.log(validPwd)

  const submit = async (e) => {
    e.preventDefault();

    const mailVal = EMAIL_REGEX.test(email.trim());
    const pwdVal = PWD_REGEX.test(pwd.trim());

    if (!mailVal && !pwdVal) {
      setErrMsg("Your Email is Invalid");
      return;
    }

    try {
      const response = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: pwd.trim(),
      });

      if (response.error) {
        console.error(response.error);
        return;
      }

      console.log("Inserted row:", response.data);
      setSuccess(true);
      console.log(response.data);
      console.log(response);
      console.log(response.status);

      setSuccMsg("Login Successfully");

      setTimeout(() => {
        setSuccMsg("");
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("Insert failed:", error.message);
      setErrMsg("Could not save your email");
    }
  };
  return (
    <>
      <div className="main-container ">
        
        <div className="alert-container">
          <div className={signupMessage ? "alert" : "visible"}>
            <i class="hgi hgi-stroke hgi-rounded hgi-checkmark-circle-01"></i>
            {succMsg}
            {signupMessage}
          </div>
        </div>

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
                    value={email}
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
                <label htmlFor="password"> Password</label>

                <div className="input-icon">
                  <input
                    type={showPwd ? "text" : "password"}
                    name="password"
                    placeholder="Enter your Password"
                    id="password"
                    value={pwd}
                    className={!validPwd && pwd ? "wrong" : ""}
                    // onFocus={() => {
                    //   setPwdFocus(true);
                    // }}
                    // onBlur={() => {
                    //   setPwdFocus(false);
                    // }}
                    aria-invalid={pwd.trim() !== "" && !validPwd}
                    onChange={(e) => {
                      setPwd(e.target.value);
                      // console.log(`PwD: ${e.target.value}`);
                    }}
                    required
                  />

                  <div onClick={showPassword}>
                    {showPwd ? (
                      <i className="hgi hgi-stroke hgi-rounded hgi-eye"></i>
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
                disabled={!validPwd || !validMail ? true : false}
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
    </>
  );
}
