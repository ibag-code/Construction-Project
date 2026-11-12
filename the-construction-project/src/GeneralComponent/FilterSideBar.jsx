export function FilterSidebar() {
  return (
    <>
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
            <input type="range" min="0" max="2000000" defaultValue="250000" />
          </div>
        </section>
      </aside>
    </>
  );
}
