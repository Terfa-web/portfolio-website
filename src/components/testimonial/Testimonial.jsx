import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import mimi01 from "../../assets/images/mimi-01.png";
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-3 text-center">
            <h2>What my clients say</h2>
          </Col>

          <Col>
            <Slider {...settings}>
              <div>
                <div className="single__testimonial">
                  <p>
                    "Working with Terfa on my website was an absolute pleasure.
                    His attention to detail, creativity, and dedication to
                    delivering a site with outstanding functionality truly
                    exceeded my expectations. Not only did he bring my vision to
                    life, but he also added valuable insights and suggestions
                    that enhanced the user experience. The site he designed is
                    not only visually stunning but also incredibly
                    user-friendly, making it a joy for visitors to navigate. I'm
                    grateful for his expertise and professionalism throughout
                    the process and would highly recommend him to anyone seeking
                    top-notch front-end design and development services."
                  </p>

                  <div className="testimonial__author-content d-flex align-items-center gap-3 justify-content-center">
                    <div className="img__container">
                      <img src={mimi01} alt="mimi" />
                    </div>

                    <div className="author__name">
                      <h6>
                        Mimihemba Nwokeh, <span>Esquire</span>
                      </h6>
                      <p className="title">Read Revival Trustee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single__testimonial">
                  <p>
                    "Working with Terfa on my website was an absolute pleasure.
                    His attention to detail, creativity, and dedication to
                    delivering a site with outstanding functionality truly
                    exceeded my expectations. Not only did he bring my vision to
                    life, but he also added valuable insights and suggestions
                    that enhanced the user experience. The site he designed is
                    not only visually stunning but also incredibly
                    user-friendly, making it a joy for visitors to navigate. I'm
                    grateful for his expertise and professionalism throughout
                    the process and would highly recommend him to anyone seeking
                    top-notch front-end design and development services."
                  </p>

                  <div className="testimonial__author-content d-flex align-items-center gap-3 justify-content-center">
                    <div className="img__container">
                      <img src={mimi01} alt="mimi" />
                    </div>

                    <div className="author__name">
                      <h6>
                        Mimihemba Nwokeh, <span>Esquire</span>
                      </h6>
                      <p className="title">Read Revival Trustee</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="single__testimonial">
                  <p>
                    "Working with Terfa on my website was an absolute pleasure.
                    His attention to detail, creativity, and dedication to
                    delivering a site with outstanding functionality truly
                    exceeded my expectations. Not only did he bring my vision to
                    life, but he also added valuable insights and suggestions
                    that enhanced the user experience. The site he designed is
                    not only visually stunning but also incredibly
                    user-friendly, making it a joy for visitors to navigate. I'm
                    grateful for his expertise and professionalism throughout
                    the process and would highly recommend him to anyone seeking
                    top-notch front-end design and development services."
                  </p>

                  <div className="testimonial__author-content d-flex align-items-center gap-3 justify-content-center">
                    <div className="img__container">
                      <img src={mimi01} alt="mimi" />
                    </div>

                    <div className="author__name">
                      <h6>
                        Mimihemba Nwokeh, <span>Esquire</span>
                      </h6>
                      <p className="title">Read Revival Trustee</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
