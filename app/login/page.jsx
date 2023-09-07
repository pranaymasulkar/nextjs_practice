"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const page = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  function loginHandle(e) {
    alert("Hellow");
    // e.preventDefault();
  }
  return (
    <>
      <section className="p-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <Form onSubmit={loginHandle}>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    size="lg"
                    type="email"
                    placeholder="Enter Email"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    size="lg"
                    type="password"
                    placeholder="Enter Password"
                  />
                </Form.Group>
                <Button variant="outline-primary px-5 py-3">Submite</Button>{" "}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default page;
