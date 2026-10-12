export function SignUp() {
  return (
    <>
      <div className="main-page">
        <div className="craft-logo">
          <img
            src="../images/Craft-logo-icon.png"
            alt="craft-logo"
            className="main-logo"
          />
          <a href="Craft-website.html"></a>
        </div>

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
                <label for="first-name"> First name</label>
                <input
                  type="text"
                  name="first name"
                  placeholder="Enter your last name"
                  id="first-name"
                  required
                />
              </div>

              <div className="input-fl-name">
                <label for="last-name"> Last name</label>
                <input
                  type="text"
                  name="last name"
                  placeholder="Enter your first name"
                  id="last-name"
                  required
                />
              </div>
            </div>

            <div className="input-fl-name">
              <label for="email">Email Address </label>
              <input
                type="text"
                name="password"
                placeholder="Enter your email Address"
                id="email"
                required
              />
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

            <button type="submit" className="sign-cta">
              {" "}
              Sign Up{" "}
            </button>
          </form>

          <p className="signup">
            Already have an Account: <a href="Craft-signin.html"> Sign in</a>
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
    </>
  );
}
