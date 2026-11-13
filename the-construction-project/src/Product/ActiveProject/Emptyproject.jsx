import SideBar from "../../GeneralComponent/sidebar";
import "./Emptyproject.css";

export function Emptyproject() {
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

        <div className="emptystate-image">
            <img src="/images/emptystate.png" alt="" />
            <h4>No project yet</h4>
            <p>Once your proposal is approved, you can track milestones, upload progress, and confirm completion here.</p>
            <button>Apply for job</button>
        </div>
      </main>
    </div>
  );
}
