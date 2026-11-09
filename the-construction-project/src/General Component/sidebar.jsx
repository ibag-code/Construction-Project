function SideBar() {
  return (
    <aside className="sidebar">
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
          <i class="hgi hgi-stroke hgi-rounded hgi-images"></i> <p>Portfolio</p>
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
    </aside>
  );
}

export default SideBar;
