import { FilterSidebar } from "../../GeneralComponent/FilterSideBar";
import SideBar from "../../GeneralComponent/sidebar";
import "./ApprovedProject.css";

export function ApprovedProject() {
  return (
    <div className="dashboard">
      <SideBar />
      <main>
        {/* TOP HEADER */}
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
        <div className="main-content">
          <section className="approved-project-list">
            {/* APPROVED PROJECT 1 */}
            <article className="approved-project-card">
              <div className="approved-status">
                <span></span>
                Approved
              </div>

              <div className="approved-project-content">
                <img
                  src="/images/Duplex.png"
                  alt="4-Bedroom Duplex construction"
                  className="approved-project-image"
                />

                <div className="approved-project-info">
                  <h3>4-Bedroom Duplex, Block Work & Plastering</h3>

                  <p className="approved-project-meta">
                    Adeyemi Estates · Lekki Phase 1, Lagos · ₦2,750,000
                  </p>

                  <p className="approved-project-description">
                    I have worked on similar duplex block work and plastering
                    projects, including setting out, block laying, wall
                    alignment, and internal plaster finishing. I can work with
                    the site plan, follow the required measurements, and deliver
                    clean, level,...
                  </p>
                </div>
              </div>
            </article>

            {/* APPROVED PROJECT 2 */}
            <article className="approved-project-card">
              <div className="approved-status">
                <span></span>
                Approved
              </div>

              <div className="approved-project-content">
                <img
                  src="/images/electrical-wiring.png"
                  alt="Electrical wiring project"
                  className="approved-project-image"
                />

                <div className="approved-project-info">
                  <h3>Full electrical wiring of 5-bedroom duplex</h3>

                  <p className="approved-project-meta">
                    Northgate Facilities · Victoria Island, Lagos · ₦980,000
                  </p>

                  <p className="approved-project-description">
                    I have experience handling complete electrical wiring for
                    residential buildings, including lighting points, sockets,
                    switches, distribution board setup, and proper cable
                    routing. I can review the building layout, plan the wiring
                    points carefully,...
                  </p>
                </div>
              </div>
            </article>

            {/* APPROVED PROJECT 3 */}
            <article className="approved-project-card">
              <div className="approved-status">
                <span></span>
                Approved
              </div>

              <div className="approved-project-content">
                <img
                  src="/images/tiling.png"
                  alt="Office floor rewiring and lighting upgrade"
                  className="approved-project-image"
                />

                <div className="approved-project-info">
                  <h3>Office Floor Rewiring & Lighting Upgrade</h3>

                  <p className="approved-project-meta">
                    Chinelo O. · Maitama, Abuja · Contact for quote
                  </p>

                  <p className="approved-project-description">
                    I can handle the office rewiring and lighting upgrade
                    professionally, including replacing old wiring, arranging
                    electrical points, installing lighting fixtures, and making
                    sure the setup is safe and well organized. I understand that
                    office spa...
                  </p>
                </div>
              </div>
            </article>

            {/* APPROVED PROJECT 4 */}
            <article className="approved-project-card">
              <div className="approved-status">
                <span></span>
                Approved
              </div>

              <div className="approved-project-content">
                <img
                  src="/images/pop-ceiling.png"
                  alt="POP ceiling and cornice installation"
                  className="approved-project-image"
                />

                <div className="approved-project-info">
                  <h3>POP Ceiling & Cornice Installation</h3>

                  <p className="approved-project-meta">
                    Chinelo O. · Maitama, Abuja · Contact for quote
                  </p>

                  <p className="approved-project-description">
                    I have experience with POP ceiling and cornice installation
                    for residential and interior finishing projects. I can
                    deliver neat ceiling patterns, proper alignment, smooth
                    edges, and clean finishing that matches the room design. I'm
                    available...
                  </p>
                </div>
              </div>
            </article>
          </section>

          <FilterSidebar />
        </div>
      </main>
    </div>
  );
}
