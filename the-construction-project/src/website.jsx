import { useState, useEffect } from "react";
import "./website.css";

const accordionData = [
  {
    id: 0,
    question: "What is Craft for ?",
    answer:
      " Craft is a platform that helps skilled construction artisans create a professional profile, showcase their completed work, and connect with homeowners, developers, and contractors looking for reliable workers.",
  },
  {
    id: 1,
    question: "Who can join Craft as an artisan?",
    answer:
      " Craft is for skilled workers in construction-related trades, including bricklayers, masons, plumbers, electricians, painters, carpenters, tilers, welders, roofers, POP installers, and other hands-on professionals.",
  },
  {
    id: 2,
    question: "Do I need to have a portfolio before joining?",
    answer:
      " No. You can start by creating your profile first. If you already have pictures of your past work, you can upload them to build trust faster. If not, you can add your portfolio later as you complete more projects.",
  },
  {
    id: 3,
    question: "How does Craft help me get projects?",
    answer:
      "No. You can start by creating your profile first. If you already have pictures of your past work, you can upload them to build trust faster. If not, you can add your portfolio later as you complete more projects.",
  },
  {
    id: 4,
    question: " Can I apply for projects myself?",
    answer:
      " Craft is a platform that helps skilled construction artisans create a professional profile, showcase their completed work, and connect with homeowners, developers, and contractors looking for reliable workers.",
  },
  {
    id: 5,
    question: "What should I add to my profile?",
    answer:
      " Craft is a platform that helps skilled construction artisans create a professional profile, showcase their completed work, and connect with homeowners, developers, and contractors looking for reliable workers.",
  },
  {
    id: 6,
    question: "Why is my portfolio important?",
    answer:
      " Craft is a platform that helps skilled construction artisans create a professional profile, showcase their completed work, and connect with homeowners, developers, and contractors looking for reliable workers.",
  },
  {
    id: 7,
    question: "How do i get paid?",
    answer:
      " Craft is a platform that helps skilled construction artisans create a professional profile, showcase their completed work, and connect with homeowners, developers, and contractors looking for reliable workers.",
  },
  {
    id: 8,
    question: "How do Client contact me?",
    answer:
      " Craft is a platform that helps skilled construction artisans create a professional profile, showcase their completed work, and connect with homeowners, developers, and contractors looking for reliable workers.",
  },
];

const features = [
  {
    id: 0,
    heading: "Showcase your skills professionally",
    subheading:
      "Build a strong profile and portfolio that helps clients understand your experience and the quality of your work.",
    image: "/images/showcase.png",
  },
  {
    id: 1,
    heading: "Find projects that match your craft",
    subheading:
      "Discover construction opportunities based on your trade, location, experience, and availability.",
    image: "/images/find-project.png",
  },
  {
    id: 2,
    heading: "Reach clients beyond referrals",
    subheading:
      "Get discovered by homeowners, developers, and contractors outside your immediate network.",
    image: "/images/reach-client.png",
  },
  {
    id: 3,
    heading: "Build trust through real work",
    subheading:
      "Use completed projects, client reviews, and verified information to strengthen your reputation.",
    image: "/images/build-trust.png",
  },
];

// console.log(features)

export function Website() {
  //Accordion Code
  const [open, setOpen] = useState(null);

  const toggle = (num) => {
    setOpen(num);

    if (open === num) {
       setOpen(null); //Closes the tab
    }
  }; 

//   function clicktoggle (index)  {
//     toggle(index)
//   }

  //Auto Recycle code
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const set = setInterval(() => {
      setCurrentIndex(() => {
        let nextIndex = currentIndex + 1;

        if (nextIndex === features.length) {
          nextIndex = 0;
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(set);
  });

  //   console.log(features[currentIndex].image)

  return (
    <>
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
          <a href="Craft-signin.html" className="cta-button-outline">
            Sign In
          </a>
          <a href="Craft-signup.html" className="cta-button">
            Sign Up
          </a>
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

      <section className="why-choose-us-section available-project">
        <div className="available-project-header">
          <div className="project-wrapper">
            <h1 className="project-header">
              Built to help skilled artisans move forward
            </h1>

            <p className="project-subheading">
              Craft gives you the tools to showcase your work, find suitable
              projects, build trust, and grow your income.
            </p>
          </div>
        </div>

        <div className="image-feature">
          <div className="text-wrapper">
            {features.map((feature, index) => {
              const mainActive = index === currentIndex;

              return (
                <>
                  <div
                    key={feature.id}
                    className={
                      mainActive ? "feature-content active" : "feature-content "
                    }
                  >
                    <h3 className="feature-title">{feature.heading}</h3>
                    <p className="feature-subheading">{feature.subheading}</p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="image-wrapper">
            <img
              src={features[currentIndex].image}
              alt="showcase-image"
              className="feature-image"
            />
          </div>
        </div>
      </section>

      
      <section className="how-it-work-section available-project">
        <div className="available-project-header">
          <div className="project-wrapper">
            <h1 className="project-header">Getting started is super-easy</h1>

            <p className="project-subheading">
              Create your profile, showcase your completed projects, connect
              with matching opportunities, deliver great work, and grow your
              reputation on Craft.
            </p>
          </div>
        </div>

        <div className="how-flex-grid">
          <div className="how-project-container">
            <img
              src="../images/create account.png"
              alt="Create your account"
              className="project-image"
            />

            <h5 className="about-heading">Create your account</h5>

            <p className="about-subheading">
              Join Craft as an artisan and add your basic information, trade,
              location, and contact details.
            </p>
          </div>

          <div className="how-project-container">
            <img
              src="../images/build portfolio.png"
              alt="Build your profile & portfolio"
              className="project-image"
            />

            <h5 className="about-heading">Build your profile & portfolio</h5>

            <p className="about-subheading">
              Showcase your skills, experience, and completed projects so
              clients can see what you are capable of.
            </p>
          </div>

          <div className="how-project-container">
            <img
              src="../images/matching project.png"
              alt="Apply for matching projects"
              className="project-image"
            />

            <h5 className="about-heading">Apply for matching projects</h5>

            <p className="about-subheading">
              Discover and apply for construction projects that match your
              trade, experience, location, and availability.
            </p>
          </div>

          <div className="how-project-container">
            <img
              src="../images/deliver great worl.png"
              alt="Deliver great work"
              className="project-image"
            />

            <h5 className="about-heading">Deliver great work</h5>

            <p className="about-subheading">
              Communicate with the client, understand the project requirements,
              and complete the work professionally.
            </p>
          </div>

          <div className="how-project-container">
            <img
              src="../images/get paid.png"
              alt="Get paid"
              className="project-image"
            />

            <h5 className="about-heading">Get paid</h5>

            <p className="about-subheading">
              Receive payment for your completed work and build a strong
              reputation through client reviews.
            </p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-question">
          <h1 className="project-header">
            We answered questions <br />
            so you don't have to ask them.
          </h1>
        </div>

        <div className="accordion-wrapper">
          {accordionData.map((accordData, index) => {
            return (
              <div
                key={accordData.id}
                className="accordion"
                onClick={ () => toggle(index) }
                // onClick={ clicktoggle }
              >
                <div className="accordion-head">
                  <div className="accordion-question">
                    {accordData.question}
                  </div>

                  {open === index ? 
                    <i className="hgi hgi-stroke hgi-rounded hgi-multiplication-sign"></i>
                  : 
                    <i class="hgi hgi-stroke hgi-rounded hgi-plus-sign"></i>
                  }
                </div>

                <div
                  className={
                    open === index
                      ? "accordion-answer accord-active"
                      : "accordion-answer"
                  }
                >
                  {accordData.answer}
                </div>
              </div>
            );
          })}

        </div>
      </section>

      <footer>
        <div className="shadow-effect-foot"></div>

        <div className="brand-side-and-footer-coloumn">
          <div className="brand-goal">
            <h2 className="craft-foot-logo">Craft</h2>
            <p className="craft-goal">
              {" "}
              Helping skilled artisans showcase their work, build trust, and
              connect with better construction opportunities.{" "}
            </p>
          </div>

          <div className="footer-column">
            <div className="link-nav">
              <h5 className="link-title">Quick Links</h5>

              <div className="foot-nav-container">
                <a href="" className="foot-nav-btn">
                  Home
                </a>
                <a href="" className="foot-nav-btn">
                  How it works
                </a>
                <a href="" className="foot-nav-btn">
                  Available Project
                </a>
                <a href="" className="foot-nav-btn">
                  Browse Artisan
                </a>
                <a href="" className="foot-nav-btn">
                  Contact
                </a>
              </div>
            </div>

            <div className="link-nav">
              <h5 className="link-title">For Artisan</h5>

              <div className="foot-nav-container">
                <a href="" className="foot-nav-btn">
                  {" "}
                  Create profile{" "}
                </a>
                <a href="" className="foot-nav-btn">
                  Build portfoilio
                </a>
                <a href="" className="foot-nav-btn">
                  Find Project
                </a>
                <a href="" className="foot-nav-btn">
                  Get verified
                </a>
                <a href="" className="foot-nav-btn">
                  Get paid
                </a>
              </div>
            </div>

            <div className="link-nav">
              <h5 className="link-title">Employer</h5>

              <div className="foot-nav-container">
                <a href="" className="foot-nav-btn">
                  Create Account
                </a>
                <a href="" className="foot-nav-btn">
                  Post job
                </a>
                <a href="" className="foot-nav-btn">
                  Hire Artisan
                </a>
                <a href="" className="foot-nav-btn">
                  Pay Artisan
                </a>
                <a href="" className="foot-nav-btn">
                  Project Support
                </a>
              </div>
            </div>

            <div className="link-nav">
              <h5 className="link-title">Company</h5>

              <div className="foot-nav-container">
                <a href="" className="foot-nav-btn">
                  About Craft
                </a>
                <a href="" className="foot-nav-btn">
                  Blog
                </a>
                <a href="" className="foot-nav-btn">
                  Help center
                </a>
                <a href="" className="foot-nav-btn">
                  Privacy policy
                </a>
                <a href="" className="foot-nav-btn">
                  Term of Service
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-and-social-media">
          <p className="copyright-text">
            {" "}
            <span className="copy">©</span>Craft. All rights reserved.
          </p>

          <div className="social-media-icon">
            <i className="hgi hgi-stroke hgi-rounded hgi-facebook-02"></i>

            <i className="hgi hgi-stroke hgi-rounded hgi-instagram"></i>

            <i className="hgi hgi-stroke hgi-rounded hgi-linkedin-02"></i>

            <i className="hgi hgi-stroke hgi-rounded hgi-new-twitter"></i>
          </div>
        </div>

        <div className="big-craft-logo">
          <img
            src="../images/Craft footer logo.png"
            alt="craft-logo"
            className="big-craft-logo"
          />
        </div>
      </footer>
    </>
  );
}
