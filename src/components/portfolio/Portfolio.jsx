import React from "react";
import "./portfolio.css";
import { Container, Row, Col } from "reactstrap";

import img01 from "../../assets/images/portfolio-01.png";
import img02 from "../../assets/images/portfolio-02.png";
import img03 from "../../assets/images/portfolio-03.png";
import img04 from "../../assets/images/portfolio-04.png";
import img05 from "../../assets/images/portfolio-05.png";
import img06 from "../../assets/images/portfolio-06.png";

const porfolioData = [
  {
    imgUrl: img01,
    title: "NGO website",
    url: "https://read-revival.vercel.app/",
  },
  {
    imgUrl: img02,
    title: "Food Delivery App",
    url: "https://food-delivery-eosin.vercel.app/home",
  },
  {
    imgUrl: img03,
    title: "Car Rental App",
    url: "https://car-rental-six-omega.vercel.app/home",
  },
  {
    imgUrl: img04,
    title: "Basic Landing Page",
    url: "https://moshify-phi.vercel.app/",
  },
  {
    imgUrl: img05,
    title: "Game Hubb Clone",
    url: "https://game-hub-ivory-seven.vercel.app/",
  },
  {
    imgUrl: img06,
    title: "Grow Impact Clone",
    url: "https://grow-impact-clone.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top mb-5">
            <h6> Explore my work and give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {porfolioData.map((project, index) => (
            <Col key={index} lg="4" md="6" sm="6">
              <div className="portfolio__card mb-5">
                <div className="portfolio__img">
                  <img src={project.imgUrl} alt="" />
                </div>

                <div className="portfolio__content">
                  <h5>{project.title}</h5>
                  <a href={project.url}>View live demo</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
