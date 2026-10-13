import { Routes, Route } from "react-router";
import { Website } from "./Website/website";
import { SignUp } from "./Entrance/signup";
import { SignIn } from "./Entrance/signin";
import { SignupAuth } from "./Entrance/Verify/Signupauth";
import { EmailAuth } from "./ForgetPassword/Emailauth";
import { EmailVerify } from "./ForgetPassword/EmailVerify";
import { PasswordReset } from "./ForgetPassword/PasswordReset"

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Website />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signupAuth" element={<SignupAuth />} />
      <Route path="/emailauth" element={<EmailAuth />} />
      <Route path="/emailverify" element={<EmailVerify />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
    </Routes>
  );
}

export default App;
