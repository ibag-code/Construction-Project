import { FilterSidebar } from "../../GeneralComponent/FilterSideBar";
import SideBar from "../../GeneralComponent/sidebar";

import "./Application.css";

export function Application() {
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

        {/* STATUS TABS */}
        <div className="application-tabs">
          <button className="application-tab active">
            All <span>1</span>
          </button>

          <button className="application-tab">
            Accepted <span>1</span>
          </button>

          <button className="application-tab">
            Pending <span>1</span>
          </button>

          <button className="application-tab">
            Rejected <span>2</span>
          </button>

          <button className="application-tab">
            Archived <span>2</span>
          </button>
        </div>

        {/* PROJECTS AND FILTERS */}
        <div className="main-content">
          {/* PROJECT LIST */}
          <section className="project-list">
            {/* APPLICATION 1 */}
            <article className="application-card">
              <div className="application-card-top">
                <div className="application-status accepted">
                  <span></span>
                  Accepted
                </div>

                <p>Submitted Just now</p>

                <button className="application-more">
                  <i className="hgi hgi-stroke hgi-information-circle"></i>
                </button>
              </div>

              <div className="application-card-body">
                <img
                  src="/images/Duplex.png"
                  alt="Four bedroom duplex construction"
                  className="application-project-image"
                />

                <div className="application-project-details">
                  <h3>4-Bedroom Duplex, Block Work &amp; Plastering</h3>

                  <p className="application-client">
                    Adeyemi Estates · Lekki Phase 1, Lagos · Your price
                    ₦2,750,000
                  </p>

                  <p className="application-description">
                    I completed a similar mason package on a three-unit terrace
                    in Ikoyi earlier this year — 640m² of block work delivered
                    two weeks ahead of programme...
                  </p>
                </div>
              </div>
            </article>

            {/* APPLICATION 2 */}
            <article className="application-card">
              <div className="application-card-top">
                <div className="application-status pending">
                  <span></span>
                  Pending
                </div>

                <p>Submitted 2 days ago</p>

                <button className="application-more">
                  <i className="hgi hgi-stroke hgi-information-circle"></i>
                </button>
              </div>

              <div className="application-card-body">
                <img
                  src="/images/electrical.png"
                  alt="Electrical wiring project"
                  className="application-project-image"
                />

                <div className="application-project-details">
                  <h3>Full electrical wiring of 5-bedroom duplex</h3>

                  <p className="application-client">
                    Northgate Facilities · Victoria Island, Lagos · Your price
                    ₦980,000
                  </p>

                  <p className="application-description">
                    Submitted with 3 reference projects and a phased weekend
                    schedule.
                  </p>
                </div>
              </div>
            </article>

            {/* APPLICATION 3 */}
            <article className="application-card">
              <div className="application-card-top">
                <div className="application-status rejected">
                  <span></span>
                  Rejected
                </div>

                <p>Submitted 2 weeks ago</p>

                <button className="application-more">
                  <i className="hgi hgi-stroke hgi-information-circle"></i>
                </button>
              </div>

              <div className="application-card-body">
                <img
                  src="/images/plastering.png"
                  alt="Plastering project"
                  className="application-project-image"
                />

                <div className="application-project-details">
                  <h3>Office Floor Rewiring &amp; Lighting Upgrade</h3>

                  <p className="application-client">
                    Chinelo O. · Maitama, Abuja · Your price Contact for quote
                  </p>

                  <p className="application-description">
                    Client selected an artisan already based in Abuja to reduce
                    travel cost.
                  </p>
                </div>
              </div>
            </article>

            {/* APPLICATION 4 */}
            <article className="application-card">
              <div className="application-card-top">
                <div className="application-status archived">
                  <span></span>
                  Archived
                </div>

                <p>Submitted 2 months ago</p>

                <button className="application-more">
                  <i className="hgi hgi-stroke hgi-information-circle"></i>
                </button>
              </div>

              <div className="application-card-body">
                <img
                  src="/images/pop-ceiling.png"
                  alt="POP ceiling installation"
                  className="application-project-image"
                />

                <div className="application-project-details">
                  <h3>POP Ceiling &amp; Cornice Installation</h3>

                  <p className="application-client">
                    Chinelo O. · Maitama, Abuja · Your price Contact for quote
                  </p>

                  <p className="application-description">
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
