import React from "react";
import "./contact.css";
import Form from "../form/Form";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="w-100 mb-4">
              <h2>My Contact Info.</h2>
            </div>
            <div className="contact__info-container d-flex align-items-center gap-5">
              <div className="single__info-box w-50">
                <h6>Location</h6>
                <p>Abuja, Nigeria.</p>
              </div>

              <div className="single__info-box w-50">
                <h6>Phone</h6>
                <p>+357 968 648 90</p>
              </div>
            </div>

            <div className="contact__info-container d-flex align-items-center gap-5">
              <div className="single__info-box w-50">
                <h6>Email</h6>
                <p>afathelion@gmail.com, n.terfa@yahoo.com</p>
              </div>

              <div className="single__info-box w-50">
                <h6>Address</h6>
                <p>Ludge Zone 3, Abuja, Nigeria.</p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
