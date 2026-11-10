import SideBar from "../GeneralComponent/sidebar";
import "./Dashboard.css";

export function Dashboard() {
  return (
    <div className="dashboard">
      <SideBar />

      <main>
        <header className="header">
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
        </header>
        <div className="main-content">
          <div className="metric-jobrecomended">
            <div className="metric-container">
              <div className="main-metric">
                <span>Total Amount Earned</span>

                <div className="money-icon-amount">
                  <div className="money-digit">
                    <i class="hgi hgi-stroke hgi-rounded hgi-cash-02"></i>
                  </div>
                  <p>₦2.24M</p>
                </div>

                <small>Total earnings this quarter</small>
              </div>
              <div className="main-metric">
                <span>Active applications</span>

                <div className="money-icon-amount">
                  <div className="money-digit">
                    <i class="hgi hgi-stroke hgi-rounded hgi-user-account"></i>
                  </div>
                  <p>3</p>
                </div>

                <small>Total earnings this quarter</small>
              </div>
              <div className="main-metric">
                <span>Completed jobs</span>

                <div className="money-icon-amount">
                  <div className="money-digit">
                    <i class="hgi hgi-stroke hgi-rounded hgi-password-validation"></i>
                  </div>
                  <p>47</p>
                </div>

                <small>Total earnings this quarter</small>
              </div>
            </div>

            <div className="recommended-view-all">
              <h4>Recomended Project</h4>
              <p>View all</p>
            </div>

            <div className="recomended-job-container">
              <div className="top-text-icons">
                <p>Posted Just Now</p>

                <div className="container-icon">
                  <div>
                    <i class="hgi hgi-stroke hgi-rounded hgi-heart"></i>
                  </div>
                  <div>
                    <i class="hgi hgi-stroke hgi-rounded hgi-heart"></i>
                  </div>
                </div>
              </div>

              <div className="job-image-texts">
                <img src="../images/Duplex.png" alt="job-image" />

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
                      <img src="../images/Validation.png" alt="verify-badge" />
                      <p>Payment Verified</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="../images/users.png" alt="user-icon" />
                      <p>5 Applicant</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="../images/location.png" alt="location-icon" />
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
                  <div>
                    <i class="hgi hgi-stroke hgi-rounded hgi-heart"></i>
                  </div>
                  <div>
                    <i class="hgi hgi-stroke hgi-rounded hgi-heart"></i>
                  </div>
                </div>
              </div>

              <div className="job-image-texts">
                <img src="../images/cafe.png" alt="job-image" />

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
                      <img src="../images/Validation.png" alt="verify-badge" />
                      <p>Payment Verified</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="../images/users.png" alt="user-icon" />
                      <p>15 Applicant</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="../images/location.png" alt="location-icon" />
                      <p>Agric Ikorodu, Lagos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recomended-job-container">
              <div className="top-text-icons">
                <p>Posted Just Now</p>

                <div className="container-icon">
                  <div>
                    <i class="hgi hgi-stroke hgi-rounded hgi-heart"></i>
                  </div>
                  <div>
                    <i class="hgi hgi-stroke hgi-rounded hgi-heart"></i>
                  </div>
                </div>
              </div>

              <div className="job-image-texts">
                <img src="../images/tile.png" alt="job-image" />

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
                      <img src="../images/Validation.png" alt="verify-badge" />
                      <p>Payment Verified</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="../images/users.png" alt="user-icon" />
                      <p>4 Applicant</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="../images/location.png" alt="location-icon" />
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
                  <div>
                    <i class="hgi hgi-stroke hgi-rounded hgi-heart"></i>
                  </div>
                  <div>
                    <i class="hgi hgi-stroke hgi-rounded hgi-heart"></i>
                  </div>
                </div>
              </div>

              <div className="job-image-texts">
                <img src="../images/wire.png" alt="job-image" />

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
                      <img src="../images/Validation.png" alt="verify-badge" />
                      <p>Payment Verified</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="../images/users.png" alt="user-icon" />
                      <p>24 Applicant</p>
                    </div>
                    <div className="status-text-badge">
                      <img src="../images/location.png" alt="location-icon" />
                      <p>Oke odo, Kwara State</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="user-stat-ads">
            <div className="user-stat">
              <div className="user-profile-visibility">
                <img src="../images/USER.png" alt="user-image" />
                <div className="name">
                  <h4>Salisu Abubakar</h4>
                  <p>Bricklayer · Ikorodu </p>
                </div>
              </div>

              <div className="profile-and-plublic">
                <p>Profile Visibilty</p>
                <span>Public</span>
              </div>

              <div className="pogress-bar-text">
                <p>Complete your profile</p>
                <div className="progress-bar-percent">
                  <div className="progress-bar">
                    <div></div>
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
                <div className="ads-icon">
                  <i class="hgi hgi-stroke hgi-rounded hgi-dashboard-square-02"></i>
                </div>
                <div className="ads-icon">
                  <i class="hgi hgi-stroke hgi-rounded hgi-dashboard-square-02"></i>
                </div>
                <div className="ads-icon">
                  <i class="hgi hgi-stroke hgi-rounded hgi-dashboard-square-02"></i>
                </div>
                <div className="ads-icon">
                  <i class="hgi hgi-stroke hgi-rounded hgi-dashboard-square-02"></i>
                </div>
                <div className="ads-icon">
                  <i class="hgi hgi-stroke hgi-rounded hgi-dashboard-square-02"></i>
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
      </main>
    </div>
  );
}
