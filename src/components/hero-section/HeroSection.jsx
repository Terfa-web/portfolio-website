import React, { useRef, useEffect } from "react";
import "./hero-section.css";
import { Container, Row, Col } from "reactstrap";
import { init } from "ityped";

import heroImg from "../../assets/images/aboutImg.jpeg";

const HeroSection = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 500,
      showCursor: false,
      strings: ["Terfa Nomhwange", "a Web developer", "a content creator"],
    });
  }, []);

  return (
    <section id="home">
      <Container className="hero__container">
        <Row>
          <Col lg="6" md="5">
            <div className="hero__content">
              <p className="mb-3">Welcome to my world!</p>
              <h5 className="mb-4">Hi</h5>
              <h2 className="hero__title mb-5">
                I'm <span ref={textRef}>Terfa Nomhwange</span>
              </h2>
              <p className="mb-4">
                "My work ethic is fueled by the desire to create user-centered
                products. I am driven by the aspiration to see tangible impact
                stemming from my efforts. I am currently seeking opportunities
                with a small to medium-sized company located near Larnaca,
                Cyprus. My ideal role would involve working on front-end user
                interfaces or website designs, collaborating with a team of
                amicable colleagues."
              </p>

              <div className="hero__btns d-flex align-items-center gap-4 ">
                <button className="btn hire__btn">
                  <a href="#contact">Hire Me</a>
                </button>
                <button>
                  <a className="btn" href="#contact">
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="4">
            <div className="hero__img">
              <img className="hero__img w-100" src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
