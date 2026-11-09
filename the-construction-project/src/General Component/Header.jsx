function Header () {
  return (
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
  );
}


export default Header;
