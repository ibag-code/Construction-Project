import SideBar from "../../GeneralComponent/sidebar";

import { Link } from "react-router";

import "./ProjectDetail.css";

export function ProjectDetail() {
  return (
    <div className="dashboard">
      <SideBar />
      <main>
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
          <Link to="/projectFeed" className="back-to-feed">
            <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
            <span>Back to Feed</span>
          </Link>

          <div className="detail-heading-row">
            <div className="detail-heading-text">
              <h1>4-Bedroom Duplex — Block Work & Plastering</h1>
              <p>
                Full block work and internal plastering for a two-unit duplex at
                foundation completion stage.
              </p>
            </div>

            <div className="main-header-icons">
              <div className="header-icons">
                <i className="hgi hgi-stroke hgi-bookmark-02"></i>
              </div>
              <div className="header-icons">
                <i className="hgi hgi-stroke hgi-favourite"></i>
              </div>
            </div>
          </div>
        </div>

        {/* TWO-COLUMN CONTENT */}
        <div className="main-content">
          {/* LEFT COLUMN */}
          <div className="project-detail-main">
            <div className="gallery-description">
              {/* PROJECT GALLERY */}
              <div className="project-gallery">
                <div className="gallery-main-image">
                  <img
                    src="/images/Duplex.png"
                    alt="Four-bedroom duplex under construction"
                  />
                </div>

                <div className="gallery-thumbnails">
                  <img src="/images/Duplex.png" alt="Building exterior" />
                  <img src="/images/tile.png" alt="Construction detail" />
                  <img src="/images/cafe.png" alt="Building work" />
                  <img src="/images/plumber.png" alt="Construction materials" />
                </div>
              </div>
              {/* PROJECT INFORMATION */}
              <div className="project-description-card">
                <div className="description-section">
                  <h2>About this project</h2>

                  <p>
                    We have completed the foundation and DPC level for a
                    two-unit duplex and are ready for superstructure block work.
                    The site is fenced, secured and has water and power
                    available.
                  </p>

                  <p>
                    You will be working alongside our site engineer who runs
                    weekly quality checks. Materials are supplied by the client;
                    you quote labour only.
                  </p>
                </div>

                <div className="description-section">
                  <h2>Scope of work</h2>

                  <ul>
                    <li>Block laying to roof level — approx. 640m²</li>
                    <li>Internal and external plastering</li>
                    <li>Lintel casting support with the concrete crew</li>
                    <li>Daily site clean-up and material accountability</li>
                  </ul>
                </div>

                <div className="description-section">
                  <h2>Required Skill</h2>

                  <div className="required-skills">
                    <span>Plastering</span>
                    <span>Decking</span>
                    <span>Bricklaying</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="feed-filters">
            {/* PROJECT SUMMARY */}
            <section className="sidebar-section">
              <h2 className="sidebar-section-title">Project summary</h2>

              <div className="sidebar-card">
                <div className="summary-list">
                  <div className="summary-item">
                    <span>Budget</span>
                    <strong>₦2.4M – ₦3.1M</strong>
                  </div>

                  <div className="summary-item">
                    <span>Timeline</span>
                    <strong>10 weeks · Starts 12 Aug</strong>
                  </div>

                  <div className="summary-item">
                    <span>Location</span>
                    <strong>Lekki Phase 1, Lagos</strong>
                  </div>

                  <div className="summary-item">
                    <span>Trade required</span>
                    <strong>Mason</strong>
                  </div>

                  <div className="summary-item">
                    <span>Experience</span>
                    <strong>5+ years</strong>
                  </div>

                  <div className="summary-item">
                    <span>Applicants</span>
                    <strong>5</strong>
                  </div>
                </div>

                <button className="sidebar-apply-btn" type="button">
                  Apply
                </button>
              </div>
            </section>

            {/* CLIENT INFORMATION */}
            <section className="sidebar-section">
              <h2 className="sidebar-section-title">About the client</h2>

              <div className="sidebar-card client-card">
                <div className="client-profile">
                  <img
                    src="/images/client-avatar.jpg"
                    alt="Kofoworola Ibrahim"
                  />

                  <div className="client-details">
                    <h3>Kofoworola Ibrahim</h3>

                    <span className="client-verified">
                      <i className="hgi hgi-stroke hgi-checkmark-badge-01"></i>
                      Verified
                    </span>
                  </div>

                  <button
                    type="button"
                    className="client-message-btn"
                    aria-label="Message client"
                  >
                    <i className="hgi hgi-stroke hgi-message-01"></i>
                  </button>
                </div>

                <div className="client-statistics">
                  <div className="client-stat">
                    <span>Member since</span>
                    <strong>March 2023</strong>
                  </div>

                  <div className="client-stat">
                    <span>Projects posted</span>
                    <strong>24</strong>
                  </div>

                  <div className="client-stat">
                    <span>Hire rate</span>
                    <strong>50%</strong>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
