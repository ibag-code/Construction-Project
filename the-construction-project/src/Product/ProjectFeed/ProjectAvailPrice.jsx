import SideBar from "../../GeneralComponent/sidebar";
import { Link } from "react-router";
import "./ProjectAvailPrice.css";

export function ProjectAvailabilityPrice() {
  return (
    <div className="dashboard">
      <SideBar />

      <main className="dashboard-main">
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

        <section className="availability-page">
          {/* BACK NAVIGATION */}
          <Link to="/projectFeed/ProjectProposal" className="availability-back">
            <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
            Back to Project Detail
          </Link>

          <section className="application-container">
            {/* PAGE HEADING */}
            <div className="availability-heading">
              <h2>Availability and price</h2>
              <p>
                Be realistic — missed start dates are the top reason artisans
                lose repeat clients.
              </p>
            </div>

            {/* APPLICATION STEPPER */}
            <div className="application-stepper">
              <div className="step completed">
                <span className="step-number">
                  <i className="hgi hgi-stroke hgi-tick-02"></i>
                </span>
                <p>Proposal</p>
              </div>

              <span className="step-line"></span>

              <div className="step active">
                <span className="step-number">2</span>
                <p>Availability &amp; Price</p>
              </div>

              <span className="step-line"></span>

              <div className="step">
                <span className="step-number">3</span>
                <p>Review</p>
              </div>
            </div>

            {/* AVAILABILITY FORM CARD */}
            <div className="availability-card">
              {/* START DATE */}
              <div className="availability-field">
                <label htmlFor="start-date">I can start on</label>

                <div className="input-wrapper">
                  <input
                    type="text"
                    id="start-date"
                    placeholder="DD/MM/YYYY"
                    defaultValue="17/07/2026"
                  />
                  <i className="hgi hgi-stroke hgi-calendar-03"></i>
                </div>
              </div>

              {/* OWN CREW CHECKBOX */}
              <label className="crew-option">
                <input type="checkbox" />
                <span className="custom-checkbox"></span>

                <span className="crew-text">
                  <strong>I'm bringing my own crew</strong>
                  <small>Five-man team, tools included in the quote.</small>
                </span>
              </label>

              {/* PRICE OPTIONS */}
              <div className="price-section">
                <h4>Your Price</h4>

                <div className="price-options">
                  <label className="price-option selected">
                    <input type="radio" name="price-type" defaultChecked />

                    <div className="price-option-top">
                      <i className="hgi hgi-stroke hgi-target-02"></i>
                      <span className="radio-indicator checked"></span>
                    </div>

                    <strong>Quote a Fixed Price</strong>
                    <small>Client sees your figures now</small>
                  </label>

                  <label className="price-option">
                    <input type="radio" name="price-type" />

                    <div className="price-option-top">
                      <i className="hgi hgi-stroke hgi-sale-tag-02"></i>
                      <span className="radio-indicator"></span>
                    </div>

                    <strong>Contact for Quote</strong>
                    <small>Price after a site visit</small>
                  </label>
                </div>
              </div>

              {/* PRICE INPUT */}
              <div className="price-input-section">
                <div className="input-wrapper price-input">
                  <span className="currency-symbol">₦</span>
                  <input
                    type="text"
                    placeholder="Enter your price"
                    defaultValue="2,750,000"
                  />
                </div>

                <small className="budget-hint">
                  Client budget: ₦2.4M – ₦3.1M
                </small>
              </div>
            </div>

            {/* PAGE ACTIONS */}
            <div className="availability-actions">
              <Link
                to="/projectFeed/ProjectProposal"
                className="availability-previous"
              >
                Back
              </Link>

              <button type="button" className="availability-continue">
                Continue
              </button>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
