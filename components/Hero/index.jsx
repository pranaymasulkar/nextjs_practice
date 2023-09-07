import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Albums from "../Albums";
const index = () => {
  return (
    <>
      <section className="p-5">
        <Container>
          <Row className="d-flex justify-content-start aligne-items-center">
            <Col md={6}>
              <Row className="d-flex justify-content-center aligne-items-center">
                <Albums />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default index;
