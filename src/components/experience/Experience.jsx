import React from "react";
import "./experience.css";
import { Container, Row, Col } from "reactstrap";

const educationalExperienceData = [
  {
    year: "2023 - present",
    title: "Frontend Web Development",
    desc: "I gained proficiency in HTML, CSS, and JavaScript, TypeScript, Reactjs, understanding how to structure and style web pages, manipulate the DOM, and handle user interactions. Additionally, familiarity with version control, web development tools, basic design principles, and soft skills such as problem-solving and communication.",
  },
  {
    year: "2013 - 2015",
    title: "Msc: Management Information Systems",
    desc: "I acquired expertise in the strategic management of information systems, encompassing skills in analyzing, designing, implementing, and managing technology-driven solutions to support organizational goals. Additionally, I gained proficiency in data analysis, business intelligence, project management, and IT governance, preparing me to lead and innovate in the field of information technology within various industries.",
  },

  {
    year: " 2005 - 2010",
    title: "Bsc: Industrial Physics",
    desc: "At the undergraduate level, I develop a comprehensive understanding of the principles of physics as they apply to industrial settings. Also, proficiency in applying physics concepts to solve practical problems in manufacturing, engineering, and other industrial sectors. Additionally, I acquired skills in data analysis, experimental techniques, instrumentation, and materials science, preparing me for careers in research, development, quality control, and technical consulting within industrial environments.",
  },
];

const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h2>Educational Background</h2>
          </Col>

          <Col lg="12" md="12">
            <div className="single__education-container">
              {educationalExperienceData.map((data, index) => (
                <div className="single__education" key={index}>
                  <span className="education__icon">
                    <i class="ri-briefcase-4-line"></i>
                  </span>
                  <h6>{data.year}</h6>
                  <h5> {data.title}</h5>
                  <p>{data.desc}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
