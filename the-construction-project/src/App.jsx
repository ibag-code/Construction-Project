import { Routes, Route } from "react-router";
// import { Website } from "./Website/website";
import { LandingPage } from "./LandingPage /LandingPage";
import { SignUp } from "./Entrance/signup";
import { SignIn } from "./Entrance/signin";
import { SignupAuth } from "./Entrance/Verify/Signupauth";
import { EmailAuth } from "./ForgetPassword/Emailauth";
import { EmailVerify } from "./ForgetPassword/EmailVerify";
import { PasswordReset } from "./ForgetPassword/PasswordReset";
import { Dashboard } from "./Product/Dashbaord";
import { ProjectFeed } from "./Product/ProjectFeed";

import "./App.css";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Website />} /> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signupAuth" element={<SignupAuth />} />
      <Route path="/emailauth" element={<EmailAuth />} />
      <Route path="/emailverify" element={<EmailVerify />} />
      <Route path="/passwordreset" element={<PasswordReset />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* 
      <Route path="projectFeed" element={<ProjectFeed />} /> */}

      <Route path="/projectFeed">
      
        <Route index element={<ProjectFeed />} />

        <Route
          path="projectdetail"
          element={<ProjectDetail />}
        />

        <Route
          path="apply"
          element={<ApplyProject />}
        />

        <Route
          path="applicationconfirmation"
          element={<ApplicationConfirmation />}
        />

        <Route
          path="projectrequirements"
          element={<ProjectRequirements />}
        />

        <Route
          path="applicationpreview"
          element={<ApplicationPreview />}
        />
      </Route>
    </Routes>
  );
}

export default App;
