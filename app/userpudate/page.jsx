"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const page = () => {
  const [id, setId] = useState(0);
  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  const router = useRouter();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setUsername(localStorage.getItem("username"));
    setPosition(localStorage.getItem("position"));
  }, []);

  const userHandleOnChange = (e) => {
    setUsername(e.target.value);
  };
  const pasitHandleOnChange = (e) => {
    setPosition(e.target.value);
  };
  const handleUpdate = () => {
    axios
      .put(`https://64f9e7eb4098a7f2fc152712.mockapi.io/users/${id}`, {
        username: username,
        position: position,
      })
      .then(() => {
        router.push("/users");
      });
  };
  return (
    <div>
      <section className="p-5">
        <Container>
          <Row className="d-flex justify-content-center align-item-center">
            <Col md={6}>
              <Form>
                <Form.Label className="my-3">Name</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={userHandleOnChange}
                />
                <Form.Label className="my-3">Possition</Form.Label>
                <Form.Control
                  type="text"
                  value={position}
                  onChange={pasitHandleOnChange}
                />
                <Button variant="primary" onClick={handleUpdate}>
                  Update
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default page;
