import React, { useState } from "react";
import "./about.css";

import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/aboutImg.jpeg";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  const [aboutFilter, setAboutFilter] = useState("ABOUT");
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3>About Me</h3>
          </Col>

          <Col lg="4" md="3">
            <div className="about__btns d-flex flex-column align-items-center">
              <button
                className="about__btn"
                onClick={() => setAboutFilter("ABOUT")}
              >
                About me
              </button>
              <button
                className="about__btn"
                onClick={() => setAboutFilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className="about__btn"
                onClick={() => setAboutFilter("SKILLS")}
              >
                Skills
              </button>
            </div>
          </Col>

          <Col lg="8" md="9">
            {aboutFilter === "ABOUT" && (
              <div className="about__content-wrapper d-flex gap-5">
                <div className="about__img w-25">
                  <img src={aboutImg} alt="" className="about__img w-100" />
                </div>
                <div className="about__content w-75">
                  <h2>I'm Terfa Nomhwange</h2>
                  <p>
                    "My work ethic is fueled by the desire to create
                    user-centered products. I am driven by the aspiration to see
                    tangible impact stemming from my efforts. I am currently
                    seeking opportunities with a small to medium-sized company
                    located near Larnaca, Cyprus. My ideal role would involve
                    working on front-end user interfaces or website designs,
                    collaborating with a team of amicable colleagues."
                  </p>

                  <div className="social__links">
                    <h6 className="mb-3">Connect with me:</h6>
                    <span>
                      <a href="https://www.facebook.com/terfa.nomhwange">
                        <i class="ri-facebook-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://www.facebook.com/terfa.nomhwange">
                        <i class="ri-github-line"></i>
                      </a>
                    </span>

                    <span>
                      <a href="https://www.linkedin.com/in/terfa-nomhwange-547a6b209/">
                        <i class="ri-linkedin-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "SKILLS" && <Skills />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
