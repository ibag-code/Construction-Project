import { Link, useNavigate } from "react-router";
import { useState } from "react";
import "./PasswordReset.css";
import supabase from "../supabase-client";

const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function PasswordReset() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const [isRecoveryMode, setIsRecoveryMode] = useState(false);

  const validPwd = PWD_REGEX.test(password.trim());

  const setValidMatch = password === rePassword;

  const [showPwd, setShowPwd] = useState(false);
  function chgEye() {
    setShowPwd((showPwd) => {
      return !showPwd;
    });
    // setShowPwd((showPwd) => !showPwd);
  }

  // useEffect(() => {
  //   // Listen for the recovery event session from the email link
  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange(async (event, session) => {
  //     if (event === "PASSWORD_RECOVERY") {
  //       setIsRecoveryMode(true);
  //     }
  //   });
  //   return () => subscription.unsubscribe();
  // }, []);

  const navigate = useNavigate();
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    if (!validPwd || !setValidMatch) {
      setMessage("Your Password does not coreelate");
      return;
    }

    try {
      const response = await supabase.auth.updateUser({
        password: password,
      });

    if (response.error) {
      setMessage(`Error: ${response.error.message}`);
      return;
    }
    

    setMessage("Password updated successfully! Redirecting...");

    setTimeout(() => navigate("/signin"), 2000);

      console.log("Reset response:", response);
      console.log("New user:", response.data.user);


      setTimeout(() => {
        setMessage("");
        // setSuccess(false);
      }, 1000);

    } catch (error) {
    console.error("Password Update Failed:", error.message);
    setMessage("Unable to update your password. Please try again.");

  } finally {setLoading(false)}

    // const { error } = await supabase.auth.updateUser({
    //   password: password,
    // });

    // if (error) {
    //   setMessage(`Error: ${error.message}`);
    // } else {
    //   setMessage("Password updated successfully! Redirecting...");
    //   setTimeout(() => navigate("/signin"), 2000);
    // }
    // setLoading(false);
  };

  return (
    <>
      <div className="alert-container">
        <div className={message ? "alert" : "visible"}>
          <i className="hgi hgi-stroke hgi-rounded hgi-checkmark-circle-01"></i>
          {message}
        </div>
      </div>
      <div className="the-form">
        <Link to="/signup" className="arrow-back">
          <i className="hgi hgi-stroke hgi-rounded hgi-arrow-left-01"></i>
        </Link>

        <div className="verify-text">
          <h3>Set Password</h3>
          <p>
            Password requires a minimum of 8 characters and contains a mix of
            letters, numbers, and symbols.
          </p>
        </div>

        <form id="otpForm" onSubmit={handlePasswordUpdate}>
          <div className="otp-countdown">
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
                    <i className="hgi hgi-stroke hgi-rounded hgi-eye"></i>
                  )}
                </div>
              </div>
            </div>

            <div className="input">
              <label htm="re-enter-password">Re-enter-Password</label>

              <div className="input-icon">
                <input
                  type={!showPwd ? "password" : "text"}
                  name="re-password"
                  placeholder="Enter your Password"
                  id="re-enter-password"
                  required
                  className={!setValidMatch && rePassword ? "wrong" : ""}
                  onChange={(e) => {
                    setRePassword(e.target.value);
                    // console.log(e.target.value)
                  }}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="action-btn"
            disabled={!validPwd || !setValidMatch ? true : false}
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </>
  );
}
