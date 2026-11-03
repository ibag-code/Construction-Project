// import {  Link } from "react-router";
import "./Dashboard.css";

export function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo-closebtn">
          <img src="../images/craft-brand-logo.png" alt="craft-logo" />
          <img src="../images/nav-icon.png" alt="" className="nav-icon" />
        </div>

        <section className="section">
          <span>work</span>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-dashboard-square-02"></i>
            <p>Dashboard</p>
          </a>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-briefcase-business"></i>
            <p>Project Feed</p>
          </a>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-file-02"></i>
            <p>Application</p>
          </a>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-message-01"></i>
            <p>Messages</p>
          </a>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-hard-hat"></i>
            <p>Active Project</p>
          </a>
        </section>
        <section className="section">
          <span>reputation</span>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-user-02"></i>{" "}
            <p>My profile</p>
          </a>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-images"></i>{" "}
            <p>Portfolio</p>
          </a>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-user-question-02"></i>{" "}
            <p>Requested Project</p>
          </a>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-credit-card"></i>{" "}
            <p>Craft Pay</p>
          </a>
          <a>
            <i class="hgi hgi-stroke hgi-rounded hgi-settings-02"></i>{" "}
            <p>Setting</p>
          </a>
        </section>

        <div className="user-info">
          <img src="../images/USER.png" alt="user-image" />
          <div className="name-status">
            <div className="name-and-status">
              <p className="name">Salisu Abubakar</p>
              <div className="status-sign">
                <div></div>
                <p>Available Now</p>
              </div>
            </div>
            <i class="hgi hgi-stroke hgi-rounded hgi-log-out"></i>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="header">
          <div className="header-text">
            <h5>Good Morning, Salisu</h5>
            <p>You have 3 new project matches and 2 unread messages.</p>
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
        </div>

        <div className="main-content">
          <div className="metric-jobrecomended">
            <div className="metric-container">
              <div className="main-metric">
                <span>Total Amount Earned</span>

                <div className="money-icon-amount">
                  <div className="money-digit">
                    <img src="" alt="money-icon" />
                  </div>
                  <p>₦2.24M</p>
                </div>

                <p>Total earnings this quarter</p>
              </div>
              <div className="main-metric">
                <span>Active applications</span>

                <div className="money-icon-amount">
                  <div className="money-digit">
                    <img src="" alt="application-icon" />
                  </div>
                  <p>3</p>
                </div>

                <p>Total earnings this quarter</p>
              </div>
              <div className="main-metric">
                <span>Completed jobs</span>

                <div className="money-icon-amount">
                  <div className="money-digit">
                    <img src="" alt="job-icon" />
                  </div>
                  <p>47</p>
                </div>

                <p>Total earnings this quarter</p>
              </div>
            </div>

            <div className="recommended-view-all">
              <h4>Recomended Job</h4>
              <p>View all</p>
            </div>

            <div className="recomended-job-container">
              <div className="top-text-icons">
                <p>Posted Just Now</p>

                <div className="container-icon">
                  <img src="" alt="save-icon" />
                  <img src="" alt="love-icon" />
                </div>
              </div>

              <div className="job-image-texts">
                <img src="" alt="job-image" />

                <div className="job-tittle-context">
                  <h4>4-Bedroom Duplex , Block Work & Plastering</h4>
                  <p>
                    Full block work and internal plastering for a two-unit
                    duplex at foundation completion stage.
                  </p>

                  <div className="relating-job">
                    <p>Plastering</p>
                    <p>Decking</p>
                    <p>Bricklaying</p>
                  </div>

                  <div className="status-applicant-location">
                    <div className="status-text-badge">
                      <img src="" alt="verify-badge" />
                      <p>Payment Verified</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="" alt="user-icon" />
                      <p>5 Applicant</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="" alt="location-icon" />
                      <p>Ikoyi, Lagos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recomended-job-container">
              <div className="top-text-icons">
                <p>Posted Just Now</p>

                <div className="container-icon">
                  <img src="" alt="save-icon" />
                  <img src="" alt="love-icon" />
                </div>
              </div>

              <div className="job-image-texts">
                <img src="" alt="job-image" />

                <div className="job-tittle-context">
                  <h4>Café Fit-Out — Bespoke Joinery & Counters</h4>
                  <p>
                    Rewire an 800m² office floor, replace distribution board and
                    install recessed LED lighting.
                  </p>

                  <div className="relating-job">
                    <p>Casting</p>
                    <p>Tiling</p>
                    <p>Pop</p>
                  </div>

                  <div className="status-applicant-location">
                    <div className="status-text-badge">
                      <img src="" alt="verify-badge" />
                      <p>Payment Verified</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="" alt="user-icon" />
                      <p>5 Applicant</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="" alt="location-icon" />
                      <p>Ikoyi, Lagos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recomended-job-container">
              <div className="top-text-icons">
                <p>Posted Just Now</p>

                <div className="container-icon">
                  <img src="" alt="save-icon" />
                  <img src="" alt="love-icon" />
                </div>
              </div>

              <div className="job-image-texts">
                <img src="" alt="job-image" />

                <div className="job-tittle-context">
                  <h4>Office Floor Rewiring & Lighting Upgrade</h4>
                  <p>
                    Rewire an 800m² office floor, replace distribution board and
                    install recessed LED lighting.
                  </p>

                  <div className="relating-job">
                    <p>Pop</p>
                    <p>Decor</p>
                    <p>Bricklaying</p>
                  </div>

                  <div className="status-applicant-location">
                    <div className="status-text-badge">
                      <img src="" alt="verify-badge" />
                      <p>Payment Verified</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="" alt="user-icon" />
                      <p>4 Applicant</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="" alt="location-icon" />
                      <p>Ifo, Ogun State</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recomended-job-container">
              <div className="top-text-icons">
                <p>Posted Just Now</p>

                <div className="container-icon">
                  <img src="" alt="save-icon" />
                  <img src="" alt="love-icon" />
                </div>
              </div>

              <div className="job-image-texts">
                <img src="" alt="job-image" />

                <div className="job-tittle-context">
                  <h4>Full electrical wiring of 5-bedroom duplex</h4>
                  <p>
                    Complete electrical wiring for a 5-bedroom duplex, including
                    lighting points, sockets, distribution board setup, and
                    safety fittings.
                  </p>

                  <div className="relating-job">
                    <p>Piping</p>
                    <p>Transition</p>
                    <p>Circuiting</p>
                  </div>

                  <div className="status-applicant-location">
                    <div className="status-text-badge">
                      <img src="" alt="verify-badge" />
                      <p>Payment Verified</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="" alt="user-icon" />
                      <p>24 Applicant</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="" alt="location-icon" />
                      <p>Oke odo, Kwara State</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="user-stat-ads">
            <div className="user-stat">
              <img src="" alt="user-image" />
              <div className="name">
                <h4>Salisu Abubakar</h4>
                <p>Bricklayer · Ikorodu </p>
              </div>

              <div className="profile-and-plublic">
                <p>Profile Visibilty</p>
                <p>Public</p>
              </div>

              <div className="pogress-bar-text">
                <h3>Complete your profile</h3>
                <div className="progress-bar-percent">
                  <div className="progress-bar">
                    <div className=""></div>
                  </div>
                  <p> 50%</p>
                </div>
              </div>
            </div>

            <div className="ads-search">
              <div className="ads-text">
                <h4>Need a specific type of job?</h4>
                <p>We’ve got you covered</p>
              </div>
              <div className="ads-search-icons">
                <div className="ads-icon-img">
                  <img src="" alt="setting" />
                </div>
                <div className="ads-icon-img">
                  <img src="" alt="motor" />
                </div>
                <div className="ads-icon-img">
                  <img src="" alt="bridge" />
                </div>
                <div className="ads-icon-img">
                  <img src="" alt="home" />
                </div>
                <div className="ads-icon-img">
                  <img src="" alt="circle-setting" />
                </div>
              </div>

              <input
                type="text"
                placeholder="Post your job request"
                className="ads-search-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
