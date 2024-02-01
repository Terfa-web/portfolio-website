import React from "react";
import "./services.css";
import { Container, Row, Col } from "reactstrap";

const serviceData = [
  {
    icon: "ri-code-line",
    title: "Web Design",
    desc: "As a web designer, I am responsible for conceptualizing, designing, and creating visually appealing and user-friendly websites. This involves crafting layouts, selecting colors and fonts, and creating graphical elements to enhance the overall user experience. I collaborate closely with clients and other team members to understand project requirements and ensure that the design aligns with branding and usability standards. Additionally, I stay updated on design trends and best practices to create modern and engaging web experiences that meet the needs of clients and users alike",
  },
  {
    icon: "ri-code-s-slash-line",
    title: "Web Development",
    desc: " Writing code in programming languages such as HTML, CSS, and JavaScript to build user interfaces and enhance functionality. I collaborate with designers and other team members to ensure websites meet client requirements and adhere to best practices in web development. I also troubleshoot issues, optimize performance, and stay updated on emerging technologies to continuously improve web projects.",
  },

  {
    icon: "ri-search-line",
    title: "SEO",
    desc: "As a Search Engine Optimization (SEO) specialist, I focus on optimizing websites to improve their visibility and rankings in search engine results pages (SERPs). I analyze website performance, conduct keyword research, and implement on-page and off-page SEO strategies to enhance organic traffic and drive conversions. I continually monitor and adjust SEO tactics based on algorithm updates and industry trends to ensure maximum visibility and relevance for targeted audiences. Additionally, I collaborate with content creators, web developers, and marketers to integrate SEO best practices into overall digital marketing strategies and achieve business objectives",
  },
  {
    icon: "ri-gallery-line",
    title: "UI Development",
    desc: "As a UI developer, I specialize in creating interactive and visually appealing user interfaces for web and mobile applications. I collaborate closely with designers and front-end developers to translate design mockups into responsive and functional interfaces that provide an optimal user experience. I write clean and efficient code using HTML, CSS, and JavaScript frameworks to implement interface components, animations, and interactive elements. Additionally, I conduct usability testing and gather feedback to iteratively improve the UI design and ensure it meets the needs of users and business goals",
  },
];

const Services = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="services__top mb-5">
            <h6>Features</h6>
            <h2>What services i provide</h2>
          </Col>

          {serviceData.map((service, index) => (
            <Col lg="4" md="6" sm="6" className="mb-3">
              <div className="single__service">
                <span className="service__icon">
                  <i class={service.icon}></i>
                </span>

                <h2>{service.title}</h2>
                <p>{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
