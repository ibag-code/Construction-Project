import SideBar from "../../GeneralComponent/sidebar"
import "./Message.css"

export function Messages() {
  return (
    <div className="dashboard">
      <SideBar />

      <main className="messages-page">

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

        {/* MESSAGES CONTENT */}
        <div className="messages-content">

          {/* CONVERSATION LIST */}
          <aside className="conversation-list">

            <div className="conversation-search">
              <i className="hgi hgi-stroke hgi-search-01"></i>
              <input
                type="text"
                placeholder="Search client and messages..."
              />
            </div>

            {/* ACTIVE CONVERSATION */}
            <div className="conversation-item active-conversation">
              <img src="/images/client-1.png" alt="Adeyemi Estates" />

              <div className="conversation-details">
                <h4>Adeyemi Estates</h4>
                <p>Great. I've sent th...</p>
              </div>

              <div className="conversation-meta">
                <span>Just now</span>
                <b>1</b>
              </div>
            </div>

            <div className="conversation-item">
              <img src="/images/client-2.png" alt="Ascent Facilities" />

              <div className="conversation-details">
                <h4>Ascent Facilities</h4>
                <p>Are you available...</p>
              </div>

              <div className="conversation-meta">
                <span>Just now</span>
                <b>1</b>
              </div>
            </div>

            <div className="conversation-item">
              <img src="/images/client-3.png" alt="Chinelo" />

              <div className="conversation-details">
                <h4>Chinelo O.</h4>
                <p>The villa tiling we...</p>
              </div>

              <div className="conversation-meta">
                <span>Just now</span>
                <b>1</b>
              </div>
            </div>

            <div className="conversation-item">
              <img src="/images/client-4.png" alt="Kofoworola Ibrahim" />

              <div className="conversation-details">
                <h4>Kofoworola Ibrahim</h4>
                <p>The villa tiling we...</p>
              </div>

              <div className="conversation-meta">
                <span>Just now</span>
                <b>1</b>
              </div>
            </div>

          </aside>

          {/* CHAT PANEL */}
          <section className="conversation-chat">

            {/* CHAT HEADER */}
            <div className="conversation-chat-header">
              <div>
                <h3>Adeyemi Estates</h3>
                <p>
                  Property developer · 4-Bedroom Duplex — Block Work
                </p>
              </div>

              <button aria-label="Conversation information">
                <i className="hgi hgi-stroke hgi-information-circle"></i>
              </button>
            </div>

            {/* CHAT MESSAGES */}
            <div className="chat-messages">

              <div className="chat-date">
                <span>Today</span>
              </div>

              {/* RECEIVED MESSAGE */}
              <div className="message-row received-message">
                <img src="/images/client-1.png" alt="" />

                <div className="message-content">
                  <span className="message-time">8:20 am</span>
                  <div className="message-bubble">
                    Hello Salisu — we reviewed your proposal and your
                    Ikoyi Terraces work. Very clean finish.
                  </div>
                </div>
              </div>

              {/* SENT MESSAGE */}
              <div className="message-row sent-message">
                <div className="message-content">
                  <span className="message-time">8:30 am</span>
                  <div className="message-bubble">
                    Thank you. Happy to walk the site before we start
                    if that helps.
                  </div>
                </div>

                <img src="/images/user-image.png" alt="" />
              </div>

              {/* RECEIVED MESSAGE */}
              <div className="message-row received-message">
                <img src="/images/client-1.png" alt="" />

                <div className="message-content">
                  <span className="message-time">8:40 am</span>
                  <div className="message-bubble">
                    Yes please. Can you do Thursday morning, 9am?
                    Our site engineer Musa will meet you at the gate.
                  </div>
                </div>
              </div>

              {/* SENT MESSAGE */}
              <div className="message-row sent-message">
                <div className="message-content">
                  <span className="message-time">8:50 am</span>
                  <div className="message-bubble">
                    Thursday 9am works. I'll bring my foreman so we
                    can plan the block run.
                  </div>
                </div>

                <img src="/images/user-image.png" alt="" />
              </div>

              {/* RECEIVED MESSAGE WITH ATTACHMENT */}
              <div className="message-row received-message">
                <img src="/images/client-1.png" alt="" />

                <div className="message-content">
                  <span className="message-time">12:20 pm</span>

                  <div className="message-bubble">
                    Great. I've sent the hire request with the
                    milestone breakdown.
                  </div>

                  <div className="message-attachment">
                    <i className="hgi hgi-stroke hgi-file-02"></i>

                    <div>
                      <h5>Duplex-superstructure-rev-C</h5>
                      <span>2.5GB · pdf</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* LAST SENT MESSAGE */}
              <div className="message-row sent-message">
                <div className="message-content">
                  <span className="message-time">8:20 am</span>
                  <div className="message-bubble">
                    I'll review the milestone breakdown and get back
                    to you shortly.
                  </div>
                </div>

                <img src="/images/user-image.png" alt="" />
              </div>

            </div>

            {/* MESSAGE INPUT */}
            <form className="message-composer">
              <input
                type="text"
                placeholder="Message Adeyemi Estate"
              />

              <button
                type="button"
                className="message-attachment-button"
                aria-label="Attach file"
              >
                <i className="hgi hgi-stroke hgi-link-04"></i>
              </button>

              <button type="button" className="message-send-button">
                Send
                <i className="hgi hgi-stroke hgi-telegram"></i>
              </button>
            </form>

          </section>

        </div>
      </main>
    </div>
  );
}