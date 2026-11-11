import SideBar from "../../GeneralComponent/sidebar";
import { Link } from "react-router";
import "./ProjectProposal.css";

export function ProjectProposal() {
  return (
    <div className="dashboard">
      <SideBar />
      <main className="main-prop">
        <header className="header">
          <div className="header-text">
            <h5>Projects matched to your trade</h5>
            <p>
              Live interior finisher and related work within 50 km of Lagos.
            </p>
          </div>

          <div className="main-header-icons">
            <div className="header-icons">
              <i class="hgi hgi-stroke hgi-rounded hgi-search-01"></i>{" "}
            </div>
            <div className="header-icons">
              <i class="hgi hgi-stroke hgi-rounded hgi-notification-01"></i>{" "}
            </div>
            <div className="header-icons">
              <img src="../images/USER.png" alt="user-icon" />
            </div>
          </div>
        </header>
        <div className="detail-heading">
          <Link to="/projectFeed/ProjectDetail" className="proposal-back">
            <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
            <span>Back to Project Detail</span>
          </Link>

          {/* PAGE HEADING */}
          <section className="application-container">
            <div className="proposal-heading">
              <h2>Why you're right for this job</h2>

              <p>
                Clients read the first three lines. Lead with relevant delivered
                work, not a greeting.
              </p>
            </div>

            {/* PROGRESS STEPPER */}
            <div className="proposal-stepper">
              <div className="step active">
                <span className="step-number">1</span>
                <p>Proposal</p>
              </div>

              <div className="step-line"></div>

              <div className="step">
                <span className="step-number">2</span>
                <p>Availability</p>
              </div>

              <div className="step-line"></div>

              <div className="step">
                <span className="step-number">3</span>
                <p>Review</p>
              </div>
            </div>

            {/* PROPOSAL INPUT */}
            <section className="proposal-card">
              <textarea
                className="proposal-textarea"
                placeholder="I completed a similar mason package on a three-unit terrace in Ikoyi earlier this year — 640m² of block work delivered two weeks ahead of programme..."
              ></textarea>

              <p className="proposal-counter">
                0 characters · 300+ recommended
              </p>
            </section>

            {/* PAGE ACTIONS */}
            <div className="proposal-actions">
              <button className="proposal-back-btn" type="button">
                Back
              </button>

              <button className="proposal-continue-btn" type="button">
                Continue
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
