import { Routes, Route } from "react-router";
// import { Website } from "./Website/website";
import { LandingPage } from "./LandingPage /LandingPage";
import { SignUp } from "./Entrance/signup";
import { SignIn } from "./Entrance/signin";
import { SignupAuth } from "./Entrance/Verify/Signupauth";
import { EmailAuth } from "./ForgetPassword/Emailauth";
import { EmailVerify } from "./ForgetPassword/EmailVerify";
import { PasswordReset } from "./ForgetPassword/PasswordReset";
import { Dashboard } from "../src/Product/Dashboard/Dashbaord";
import { ProjectFeed } from "./Product/ProjectFeed/ProjectFeed";
import { ProjectDetail } from "./Product/ProjectFeed/ProjectDetail";
import { ProjectProposal } from "./Product/ProjectFeed/ProjectProposal";
import { ProjectAvailabilityPrice } from "./Product/ProjectFeed/ProjectAvailPrice";
import { ProjectReview } from "./Product/ProjectFeed/ProjectReview";
import "./App.css";
import { Application } from "./Product/ApplicationFile/Application";
import { AcceptedAppliication } from "./Product/ApplicationFile/AcceptApp";
import { PendingAppliication } from "./Product/ApplicationFile/PendingApp";
import { RejectedAppliication } from "./Product/ApplicationFile/RejectApp";
import { ArchiveAppliication } from "./Product/ApplicationFile/ArchiveApp";
import { Messages } from "./Product/Messages/Message";

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
      <Route path="/projectFeed">
        <Route index element={<ProjectFeed />} />
        <Route path="projectdetail" element={<ProjectDetail />} />

        <Route path="apply" element={<ProjectProposal />} />

        <Route
          path="applicationconfirmation"
          element={<ProjectAvailabilityPrice />}
        />

        <Route path="applicationpreview" element={<ProjectReview />} />
      </Route>
      <Route path="/application">
        <Route index element={<Application />} />
        <Route path="accept" element={<AcceptedAppliication />} />

        <Route path="pending" element={<PendingAppliication />} />

        <Route path="Rejected" element={<RejectedAppliication />} />

        <Route path="archive" element={<ArchiveAppliication />} />
      </Route>
      <Route path="Message" element={<Messages />} />
    </Routes>
  );
}

export default App;
