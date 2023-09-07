"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const page = () => {
  // const router = useRouter();
  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  const router = useRouter();

  const userHandleOnChange = (e) => {
    setUsername(e.target.value);
  };
  const pasitHandleOnChange = (e) => {
    setPosition(e.target.value);
  };
  const handleSubmite = (e) => {
    console.log("clicked");
    axios
      .post(`https://64f9e7eb4098a7f2fc152712.mockapi.io/users`, {
        username: username,
        position: position,
        headers: {
          authorization: "your token comes here",
        },
      })
      .then(() => {
        toast("User Added");
        router.push("/users");
      });
  };

  return (
    <>
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
                  placeholder="enter name"
                />
                <Form.Label className="my-3">Possition</Form.Label>
                <Form.Control
                  type="text"
                  value={position}
                  onChange={pasitHandleOnChange}
                  placeholder="enter position"
                />
                <Button
                  variant="primary"
                  onClick={() => {
                    handleSubmite();
                  }}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <ToastContainer />
    </>
  );
};

export default page;
