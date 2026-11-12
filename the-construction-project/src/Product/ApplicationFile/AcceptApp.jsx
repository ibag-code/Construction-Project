import { Link } from "react-router";
import { FilterSidebar } from "../../GeneralComponent/FilterSideBar";
import SideBar from "../../GeneralComponent/sidebar";
import "./AcceptApp.css";

export function AcceptedAppliication() {
  return (
    <div className="dashboard">
      <SideBar />

      {/* PROJECT FEED BODY */}
      <main>
        <header className="header">
          <div className="header-text">
            <h5>Track your applications</h5>
            <p>Everything you've sent, from first proposal to signed job.</p>
          </div>

          <div className="main-header-icons">
            <div className="header-icons">
              <i class="hgi hgi-stroke hgi-rounded hgi-search-01"></i>
            </div>
            <div className="header-icons">
              <i class="hgi hgi-stroke hgi-rounded hgi-notification-01"></i>
            </div>
            <div className="header-icons">
              <img src="../images/USER.png" alt="user-icon" />
            </div>
          </div>
        </header>

        {/* APPLICATION STATUS NAVIGATION */}
        <nav className="accepted-tabs">
          <Link to="/application" className="accepted-tab">
            All <span>1</span>
          </Link>

          <Link to="/application/accepted" className="accepted-tab active">
            Accepted <span>5</span>
          </Link>

          <Link to="/application/pending" className="accepted-tab">
            Pending <span>1</span>
          </Link>

          <Link to="/application/rejected" className="accepted-tab">
            Rejected <span>2</span>
          </Link>

          <Link to="/application/archived" className="accepted-tab">
            Archived <span>2</span>
          </Link>
        </nav>

        {/* PROJECTS AND FILTERS */}
        <div className="main-content">
          {/* PROJECT LIST */}
          <section className="project-list">
            {/* CARD 1 */}
            <article className="accepted-card">
              <div className="accepted-card-top">
                <div className="accepted-status">
                  <span></span>
                  Accepted
                </div>

                <p>Submitted Just now</p>

                <button className="accepted-info-button" type="button">
                  <i className="hgi hgi-stroke hgi-information-circle"></i>
                </button>
              </div>

              <div className="accepted-card-body">
                <img
                  src="/images/Duplex.png"
                  alt="Four bedroom duplex construction"
                />

                <div className="accepted-project-info">
                  <h3>4-Bedroom Duplex, Block Work &amp; Plastering</h3>

                  <p className="accepted-project-meta">
                    Adeyemi Estates · Lekki Phase 1, Lagos · Your price
                    ₦2,750,000
                  </p>

                  <p className="accepted-project-description">
                    I completed a similar mason package on a three-unit terrace
                    in Ikoyi earlier this year — 640m² of block work delivered
                    two weeks ahead of programme...
                  </p>
                </div>
              </div>
            </article>

            {/* CARD 2 */}
            <article className="accepted-card">
              <div className="accepted-card-top">
                <div className="accepted-status">
                  <span></span>
                  Accepted
                </div>

                <p>Submitted Just now</p>

                <button className="accepted-info-button" type="button">
                  <i className="hgi hgi-stroke hgi-information-circle"></i>
                </button>
              </div>

              <div className="accepted-card-body">
                <img
                  src="/images/electrical.png"
                  alt="Electrical wiring installation"
                />

                <div className="accepted-project-info">
                  <h3>Full electrical wiring of 5-bedroom duplex</h3>

                  <p className="accepted-project-meta">
                    Northgate Facilities · Victoria Island, Lagos · Your price
                    ₦980,000
                  </p>

                  <p className="accepted-project-description">
                    Submitted with 3 reference projects and a phased weekend
                    schedule.
                  </p>
                </div>
              </div>
            </article>

            {/* CARD 3 */}
            <article className="accepted-card">
              <div className="accepted-card-top">
                <div className="accepted-status">
                  <span></span>
                  Accepted
                </div>

                <p>Submitted Just now</p>

                <button className="accepted-info-button" type="button">
                  <i className="hgi hgi-stroke hgi-information-circle"></i>
                </button>
              </div>

              <div className="accepted-card-body">
                <img src="/images/plastering.png" alt="Plastering work" />

                <div className="accepted-project-info">
                  <h3>Office Floor Rewiring &amp; Lighting Upgrade</h3>

                  <p className="accepted-project-meta">
                    Chinelo O. · Maitama, Abuja · Your price Contact for quote
                  </p>

                  <p className="accepted-project-description">
                    Client selected an artisan already based in Abuja to reduce
                    travel cost.
                  </p>
                </div>
              </div>
            </article>

            {/* CARD 4 */}
            <article className="accepted-card">
              <div className="accepted-card-top">
                <div className="accepted-status">
                  <span></span>
                  Accepted
                </div>

                <p>Submitted Just now</p>

                <button className="accepted-info-button" type="button">
                  <i className="hgi hgi-stroke hgi-information-circle"></i>
                </button>
              </div>

              <div className="accepted-card-body">
                <img
                  src="/images/pop-ceiling.png"
                  alt="POP ceiling installation"
                />

                <div className="accepted-project-info">
                  <h3>POP Ceiling &amp; Cornice Installation</h3>

                  <p className="accepted-project-meta">
                    Chinelo O. · Maitama, Abuja · Your price Contact for quote
                  </p>

                  <p className="accepted-project-description">
                    Client selected an artisan already based in Abuja to reduce
                    travel cost.
                  </p>
                </div>
              </div>
            </article>
          </section>

          {/* FILTER SIDEBAR */}
          <FilterSidebar />
        </div>
      </main>
    </div>
  );
}
