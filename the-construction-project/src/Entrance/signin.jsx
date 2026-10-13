import { Link } from "react-router";
import "./signin.css";

export function SignIn() {
  return (
    <div className="body">
      <div class="form">
        <Link to="/" className="craft-logo">
          <img
            src="../images/Craft-logo-icon.png"
            alt="craft-logo"
            className="main-logo"
          />
        </Link>

        <div class="welcome-google-divider">
          <h3 class="welcome-txt">Welcome back!</h3>

          <a href="Google Sign in" class="google-btn">
            <img src="../images/google.png" alt="google-image" />
            Sign in with Google
          </a>

          <div class="hr-login-option">
            <hr />
            <div class="divider-txt">Or continue with</div>
            <hr />
          </div>

          <form action="" id="form">
            <div class="input">
              <label for="email"> Email</label>

              <div class="input-icon">
                <input
                  type="email"
                  name="password"
                  id="email"
                  placeholder="Enter your email Address"
                  required
                  class="email"
                />
              </div>
            </div>

            <div class="input">
              <label for="password"> Password</label>

              <div class="input-icon">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your Password"
                  id="password"
                  required
                />

                <i class="hgi hgi-stroke hgi-rounded hgi-view-off closed-eye"></i>
              </div>

              <Link to='/emailauth' class="forget-password">
                {" "}
                Forget Password
              </Link>
            </div>

            <button type="submit" class="sign-cta">
              {" "}
              Sign In{" "}
            </button>
          </form>

          <p class="signup">
            Are you a new user: <Link to="/signup">Create a new Account</Link>
          </p>
        </div>
      </div>

      <div class="authentication-image">
        <img
          src="../images/authentication-image.png"
          alt=""
          class="authentication-main-image"
        />
      </div>
    </div>
  );
}
