import { Link } from "react-router";
import "./LandingPage.css";

export function LandingPage() {
  return (
    <div>
      <header>
        <img
          src="../images/craft-logo.png"
          alt="Craft logo"
          className="craft-logo-head"
        />

        <div className="nav-container">
          <a href="" className="nav-btn">
            Home
          </a>
          <a href="" className="nav-btn">
            About us
          </a>
          <a href="" className="nav-btn">
            What We do
          </a>
          <a href="" className="nav-btn">
            FaQs
          </a>
          <a href="" className="nav-btn">
            Post a Job
          </a>
        </div>

        <div className="cta-container">
          <Link to="/signin" className="cta-button-outline">
            Sign In
          </Link>
          <Link to="/signup" className="cta-button">
            Sign Up
          </Link>
        </div>
      </header>

      <section className="hero-section">
        <img src="../images/hero craft.png" alt="" className="hero-craft-bg" />
        <div className="shadow-effect"></div>

        <div className="content-container">
          <h1 className="faktum-text">
            <span>Turn your skills into</span>
            <span>real opportunities.</span>
          </h1>

          <p className="sub-heading">
            Create a professional profile, showcase your completed work, and
            connect with clients looking for trusted artisans.
          </p>

          <div className="cta-container-content">
            <a href="" className="cta-button">
              Grow My Career
            </a>
            <a href="" className="cta-button-outline">
              See Available Jobs
            </a>
          </div>
        </div>

        <div className="image-container">
          <img
            src="../images/HERO IMAGE.png"
            alt="hero section image"
            className="image-container"
          />
        </div>
      </section>

      <section className="available-project">
        <div className="available-project-header">
          <div className="project-wrapper">
            <h1 className="project-header">New opportunities near you</h1>

            <p className="project-subheading">
              Create a professional profile, showcase your completed work, and
              connect with clients looking for trusted construction artisans.
            </p>
          </div>
          <a href="" className="cta-button">
            View all project
          </a>
        </div>

        <div className="flex-grid">
          <div className="project-container">
            <div className="normal-card">
              <img
                src="../images/bricklayer.png"
                alt=""
                className="project-image"
              />

              <div className="location-tag">
                <h4 className="location"> LEKKI LAGOS</h4>

                <span className="status-tag">
                  <span className="status-dot"></span>
                  Posted now
                </span>
              </div>

              <h3 className="project-name">Bricklayer Needed for a Duplex</h3>

              <h1 className="project-price">₦600,000 - ₦850,000</h1>
            </div>

            <div className="hover-card">
              <h3 className="project-name">Bricklayer Needed for a Duplex</h3>

              <img
                src="../images/bricklayer.png"
                alt=""
                className="project-image"
              />

              <p className="project-subheading">
                Blockwork required for a newly started
              </p>

              <a href="" className="cta-button-hover cta-button">
                Apply
              </a>
            </div>
          </div>

          <div className="project-container">
            <div className="normal-card">
              <img
                src="../images/plumber.png"
                alt=""
                className="project-image"
              />

              <div className="location-tag">
                <h4 className="location">IKEJA, LAGOS</h4>

                <span className="status-tag">
                  <span className="status-dot"></span>
                  Posted now
                </span>
              </div>

              <h3 className="project-name">Bathroom Plumbing Installation</h3>

              <h1 className="project-price">₦600,000 - ₦850,000</h1>
            </div>

            <div className="hover-card">
              <h3 className="project-name">Bathroom Plumbing Installation</h3>

              <img
                src="../images/plumber.png"
                alt=""
                className="project-image"
              />

              <p className="project-subheading">
                A plumber is needed to install pipes and bathroom fittings in a
                three-bedroom apartment.{" "}
              </p>

              <a href="" className="cta-button-hover cta-button">
                Apply
              </a>
            </div>
          </div>

          <div className="project-container">
            <div className="normal-card">
              <img
                src="../images/painter.png"
                alt=""
                className="project-image"
              />

              <div className="location-tag">
                <h4 className="location"> GWAGWALADA, ABUJA</h4>

                <span className="status-tag">
                  <span className="status-dot"></span>
                  Posted now
                </span>
              </div>

              <h3 className="project-name">
                Interior Painting for New Apartment
              </h3>

              <h1 className="project-price">₦300,000 - ₦450,000</h1>
            </div>

            <div className="hover-card">
              <h3 className="project-name">
                Interior Painting for New Apartment
              </h3>

              <img
                src="../images/painter.png"
                alt=""
                className="project-image"
              />

              <p className="project-subheading">
                Experienced painters are needed for the interior finishing of a
                four-bedroom house.{" "}
              </p>

              <a href="" className="cta-button-hover cta-button">
                Apply
              </a>
            </div>
          </div>

          <div className="project-container">
            <div className="normal-card">
              <img src="../images/tiler.png" alt="" className="project-image" />

              <div className="location-tag">
                <h4 className="location"> IBADAN OYO</h4>

                <span className="status-tag">
                  <span className="status-dot"></span>
                  Posted now
                </span>
              </div>

              <h3 className="project-name">
                Floor Tiling for Residential Building
              </h3>

              <h1 className="project-price">Open to Quote</h1>
            </div>

            <div className="hover-card">
              <h3 className="project-name">
                Floor Tiling for Residential Building
              </h3>

              <img src="../images/tiler.png" alt="" className="project-image" />

              <p className="project-subheading">
                Tiler needed for approximately 180 square metres of floor
                space.{" "}
              </p>

              <a href="" className="cta-button-hover cta-button">
                Apply
              </a>
            </div>
          </div>

          <div className="project-container">
            <div className="normal-card">
              <img
                src="../images/electrician.png"
                alt=""
                className="project-image"
              />

              <div className="location-tag">
                <h4 className="location"> ILORIN, KWARA</h4>

                <span className="status-tag">
                  <span className="status-dot"></span>
                  Posted now
                </span>
              </div>

              <h3 className="project-name">Electrical Wiring for a Shop</h3>

              <h1 className="project-price">₦150,000 - ₦220,000</h1>
            </div>

            <div className="hover-card">
              <h3 className="project-name">Electrical Wiring for a Shop</h3>

              <img
                src="../images/electrician.png"
                alt=""
                className="project-image"
              />

              <p className="project-subheading">
                Complete electrical wiring and fitting installation for a new
                retail shop.
              </p>

              <a href="" className="cta-button-hover cta-button">
                Apply
              </a>
            </div>
          </div>

          <div className="project-container">
            <div className="normal-card">
              <img
                src="../images/roofing.png"
                alt=""
                className="project-image"
              />

              <div className="location-tag">
                <h4 className="location">ABEOKUTA, OGUN</h4>

                <span className="status-tag">
                  <span className="status-dot"></span>
                  Posted now
                </span>
              </div>

              <h3 className="project-name">Roofing team needed</h3>

              <h1 className="project-price">Open to Proposal</h1>
            </div>

            <div className="hover-card">
              <h3 className="project-name">Roofing team needed</h3>

              <img
                src="../images/roofing.png"
                alt=""
                className="project-image"
              />

              <p className="project-subheading">
                A roofing team is required for a newly completed bungalow
                structure.{" "}
              </p>

              <a href="" className="cta-button-hover cta-button">
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
