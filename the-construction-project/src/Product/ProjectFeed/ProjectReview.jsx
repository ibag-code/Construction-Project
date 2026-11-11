import SideBar from "../../GeneralComponent/sidebar";
import { Link } from "react-router";
import "./ProjectReview.css";

export function ProjectReview() {
  return (
    <div className="dashboard">
      <SideBar />

      <main className="review-main">
        {/* TOP HEADER */}
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

        <section className="review-page">
          {/* BACK NAVIGATION */}
          <Link to="/projectFeed/availability" className="review-back">
            <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
            Back to Project Detail
          </Link>
          <section className="application-container">
            {/* PAGE HEADING */}
            <div className="review-heading">
              <h2>Review your application</h2>
              <p>Check everything before submitting to the client.</p>
            </div>

            {/* APPLICATION STEPPER */}
            <div className="review-stepper">
              <div className="review-step completed">
                <span className="review-step-number">
                  <i className="hgi hgi-stroke hgi-file-02"></i>
                </span>
                <span>Proposal</span>
              </div>

              <span className="review-step-line"></span>

              <div className="review-step completed">
                <span className="review-step-number">
                  <i className="hgi hgi-stroke hgi-stopwatch"></i>
                </span>
                <span>Availability &amp; Price</span>
              </div>

              <span className="review-step-line"></span>

              <div className="review-step active">
                <span className="review-step-number">3</span>
                <span>Review</span>
              </div>
            </div>

            {/* APPLICATION REVIEW CARD */}
            <div className="review-card">
              {/* ARTISAN PROFILE */}
              <div className="review-profile">
                <img src="/images/USER.png" alt="Salisu Abubakar" />

                <div className="review-profile-info">
                  <h3>Salisu Abubakar</h3>
                  <p>Bricklayer · Ikorodu</p>
                </div>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="review-project-info">
                <div className="review-info-block">
                  <span className="review-label">Applying for</span>
                  <h4>4-Bedroom Duplex — Block Work &amp; Plastering</h4>
                </div>

                <div className="review-info-block">
                  <span className="review-label">Your proposal</span>
                  <p className="review-proposal-text">
                    Dear client, I am writing to express my strong interest in
                    your electrical wiring project. With 8+ years in residential
                    installations across Lagos, I have handled over 30 similar
                    projects...
                  </p>
                </div>
              </div>

              {/* APPLICATION SUMMARY */}
              <div className="review-summary">
                <div className="review-summary-row">
                  <span>Client</span>
                  <strong>Kofoworola Ibrahim</strong>
                </div>

                <div className="review-summary-row">
                  <span>Your price</span>
                  <strong>₦2,750,000</strong>
                </div>

                <div className="review-summary-row">
                  <span>Start date</span>
                  <strong>5 August 2026</strong>
                </div>

                <div className="review-summary-row last-row">
                  <span>Crew</span>
                  <strong>Own Crew of 5</strong>
                </div>
              </div>
            </div>

            {/* BOTTOM ACTIONS */}
            <div className="review-actions">
              <Link to="/projectFeed/availability" className="review-previous">
                Back
              </Link>

              <button className="review-submit">Submit Application</button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
