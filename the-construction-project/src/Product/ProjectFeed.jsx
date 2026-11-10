import SideBar from "../General Component/sidebar";
import "./ProjectFeed.css";

export function ProjectFeed() {
  return (
    <div className="dashboard">
      <SideBar />

      {/* PROJECT FEED BODY */}
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
        {/* TOOLBAR */}
        <div className="feed-toolbar">
          <button className="save-search">
            <i className="hgi hgi-stroke hgi-folder-01"></i>
            <span>Save Search</span>
          </button>

          <div className="toolbar-actions">
            <button className="saved-jobs">
              <i className="hgi hgi-stroke hgi-heart"></i>
              <span>Saved jobs (11)</span>
            </button>

            <select className="sort-select">
              <option>Sort by: Best Match</option>
              <option>Sort by: Most Recent</option>
            </select>
          </div>
        </div>
        {/* PROJECTS AND FILTERS */}
        <div className="main-content">
          {/* PROJECT LIST */}
          <section className="project-list">
            {/* PROJECT CARD 1 */}
            <article className="project-card">
                
              <div className="project-card-top">
                <span>Posted just now</span>

                <div className="project-actions">
                  <button>
                    <i className="hgi hgi-stroke hgi-bookmark-02"></i>
                  </button>

                  <button>
                    <i className="hgi hgi-stroke hgi-heart"></i>
                  </button>
                </div>
              </div>

              <div className="project-card-content">
                <img
                  src="../images/Duplex.png"
                  alt="Four bedroom duplex construction"
                  className="project-image"
                />

                <div className="project-information">
                  <div className="project-title">
                    <h3>4-Bedroom Duplex, Block Work & Plastering</h3>
                  </div>

                  <p className="project-description">
                    Full block work and internal plastering for a two-unit
                    duplex at foundation completion stage.
                  </p>

                  <div className="project-tags">
                    <span>Plastering</span>
                    <span>Decking</span>
                    <span>Bricklaying</span>
                  </div>

                  <div className="project-meta">
                    <span className="verified">
                      <i className="hgi hgi-stroke hgi-checkmark-badge-01"></i>
                      Payment Verified
                    </span>

                    <span>
                      <i className="hgi hgi-stroke hgi-user-group"></i>5
                      Applicant
                    </span>

                    <span>
                      <i className="hgi hgi-stroke hgi-location-01"></i>
                      Ikoyi, Lagos
                    </span>
                  </div>
                </div>

                <div className="Price-button">
                  <strong>₦480k–₦620k</strong>

                  <div className="project-card-buttons">
                    <button className="view-details">View details</button>
                    <button className="apply-button">Apply</button>
                  </div>
                </div>
              </div>

            </article>

            {/* PROJECT CARD 2 */}
            <article className="project-card">
              <div className="project-card-top">
                <span>Posted just now</span>

                <div className="project-actions">
                  <button>
                    <i className="hgi hgi-stroke hgi-bookmark-02"></i>
                  </button>

                  <button>
                    <i className="hgi hgi-stroke hgi-heart"></i>
                  </button>
                </div>
              </div>

              <div className="project-card-content">
                <img
                  src="/images/projects/office.jpg"
                  alt="Office floor renovation"
                  className="project-image"
                />

                <div className="project-information">
                  <div className="project-title">
                    <h3>Office Floor Rewiring & Lighting Upgrade</h3>
                    <strong>₦480k–₦620k</strong>
                  </div>

                  <p className="project-description">
                    Rewire an 800m² office floor, replace distribution board and
                    install recessed LED lighting.
                  </p>

                  <div className="project-tags">
                    <span>Plastering</span>
                    <span>Decking</span>
                    <span>Bricklaying</span>
                  </div>

                  <div className="project-meta">
                    <span className="verified">
                      <i className="hgi hgi-stroke hgi-checkmark-badge-01"></i>
                      Payment Verified
                    </span>

                    <span>
                      <i className="hgi hgi-stroke hgi-user-group"></i>4
                      Applicant
                    </span>

                    <span>
                      <i className="hgi hgi-stroke hgi-location-01"></i>
                      Ifo, Ogun State
                    </span>
                  </div>
                </div>

                <div className="project-card-buttons">
                  <button className="view-details">View details</button>
                  <button className="apply-button">Apply</button>
                </div>
              </div>
            </article>

            {/* PROJECT CARD 3 */}
            <article className="project-card">
              <div className="project-card-top">
                <span>Posted just now</span>

                <div className="project-actions">
                  <button>
                    <i className="hgi hgi-stroke hgi-bookmark-02"></i>
                  </button>

                  <button>
                    <i className="hgi hgi-stroke hgi-heart"></i>
                  </button>
                </div>
              </div>

              <div className="project-card-content">
                <img
                  src="/images/projects/tiling.jpg"
                  alt="Floor finishing work"
                  className="project-image"
                />

                <div className="project-information">
                  <div className="project-title">
                    <h3>Office Floor Rewiring & Lighting Upgrade</h3>
                    <strong>₦480k–₦620k</strong>
                  </div>

                  <p className="project-description">
                    Rewire an 800m² office floor, replace distribution board and
                    install recessed LED lighting.
                  </p>

                  <div className="project-tags">
                    <span>Plastering</span>
                    <span>Decking</span>
                    <span>Bricklaying</span>
                  </div>

                  <div className="project-meta">
                    <span className="verified">
                      <i className="hgi hgi-stroke hgi-checkmark-badge-01"></i>
                      Payment Verified
                    </span>

                    <span>
                      <i className="hgi hgi-stroke hgi-user-group"></i>4
                      Applicant
                    </span>

                    <span>
                      <i className="hgi hgi-stroke hgi-location-01"></i>
                      Ifo, Ogun State
                    </span>
                  </div>
                </div>

                <div className="project-card-buttons">
                  <button className="view-details">View details</button>
                  <button className="apply-button">Apply</button>
                </div>
              </div>
            </article>

            {/* PROJECT CARD 4 */}
            <article className="project-card">
              <div className="project-card-top">
                <span>Posted just now</span>

                <div className="project-actions">
                  <button>
                    <i className="hgi hgi-stroke hgi-bookmark-02"></i>
                  </button>

                  <button>
                    <i className="hgi hgi-stroke hgi-heart"></i>
                  </button>
                </div>
              </div>

              <div className="project-card-content">
                <img
                  src="/images/projects/electrical.jpg"
                  alt="Electrical wiring installation"
                  className="project-image"
                />

                <div className="project-information">
                  <div className="project-title">
                    <h3>Full Electrical Wiring of 5-Bedroom Duplex</h3>
                    <strong>₦480k–₦620k</strong>
                  </div>

                  <p className="project-description">
                    Complete electrical wiring for a 5-bedroom duplex, including
                    lighting points, sockets, distribution board setup, and
                    safety fittings.
                  </p>

                  <div className="project-tags">
                    <span>Piping</span>
                    <span>Transition</span>
                    <span>Circuiting</span>
                  </div>

                  <div className="project-meta">
                    <span className="verified">
                      <i className="hgi hgi-stroke hgi-checkmark-badge-01"></i>
                      Payment Verified
                    </span>

                    <span>
                      <i className="hgi hgi-stroke hgi-user-group"></i>
                      24 Applicant
                    </span>

                    <span>
                      <i className="hgi hgi-stroke hgi-location-01"></i>
                      Oke Odo, Kwara State
                    </span>
                  </div>
                </div>

                <div className="project-card-buttons">
                  <button className="view-details">View details</button>
                  <button className="apply-button">Apply</button>
                </div>
              </div>
            </article>
          </section>

          {/* FILTER SIDEBAR */}
          <aside className="feed-filters">
            {/* LOCATION */}
            <section className="filter-card">
              <div className="filter-card-heading">
                <h3>Location</h3>
                <i className="hgi hgi-stroke hgi-arrow-up-01"></i>
              </div>

              <input type="text" placeholder="Search client location" />
            </section>

            {/* TRADE */}
            <section className="filter-card">
              <div className="filter-card-heading">
                <h3>Trade</h3>
                <i className="hgi hgi-stroke hgi-arrow-down-01"></i>
              </div>
            </section>

            {/* PROJECT TYPE */}
            <section className="filter-card">
              <div className="filter-card-heading">
                <h3>Project Type</h3>
                <i className="hgi hgi-stroke hgi-arrow-up-01"></i>
              </div>

              <div className="filter-checkboxes">
                <label>
                  <input type="checkbox" />
                  Residential
                </label>

                <label>
                  <input type="checkbox" />
                  Commercial
                </label>

                <label>
                  <input type="checkbox" />
                  Renovation
                </label>

                <label>
                  <input type="checkbox" />
                  New Build
                </label>

                <label>
                  <input type="checkbox" />
                  Repair
                </label>
              </div>
            </section>

            {/* TIMELINE */}
            <section className="filter-card">
              <div className="filter-card-heading">
                <h3>Timeline</h3>
                <i className="hgi hgi-stroke hgi-arrow-up-01"></i>
              </div>

              <div className="filter-checkboxes">
                <label>
                  <input type="checkbox" />
                  Residential
                </label>

                <label>
                  <input type="checkbox" />
                  Commercial
                </label>

                <label>
                  <input type="checkbox" />
                  Renovation
                </label>

                <label>
                  <input type="checkbox" />
                  New Build
                </label>

                <label>
                  <input type="checkbox" />
                  Repair
                </label>
              </div>
            </section>

            {/* MINIMUM BUDGET */}
            <section className="filter-card">
              <div className="filter-card-heading">
                <h3>Min Budget</h3>
                <i className="hgi hgi-stroke hgi-arrow-up-01"></i>
              </div>

              <div className="budget-control">
                <span>Below 250k</span>
                <input
                  type="range"
                  min="0"
                  max="2000000"
                  defaultValue="250000"
                />
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
