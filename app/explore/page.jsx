"use client";
import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  Card,
  ButtonGroup,
} from "react-bootstrap";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintastk, setMaintask] = useState([]);

  const handleSubmite = (e) => {
    e.preventDefault();
    setMaintask([...maintastk, { title, desc }]);
    // console.log(title);
    // console.log(desc);
    setTitle("");
    setDesc("");
    console.log(maintastk);
  };

  const handleEdite = (e) => {};

  const handleDelete = (i) => {
    let copyList = [...maintastk];
    copyList.splice(i, 1);
    setMaintask(copyList);
  };
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <h3>Create Todo List</h3>
              <Form onSubmit={handleSubmite}>
                <Row>
                  <Col md={4}>
                    <Form.Control
                      placeholder="Enter Title"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      placeholder="Enter Description"
                      value={desc}
                      onChange={(e) => {
                        setDesc(e.target.value);
                      }}
                    />
                  </Col>
                  <Col md={4}>
                    <Button
                      type="submit"
                      variant="outline-primary"
                      className="px-5"
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Row
            className="mt-5 pt-5
          "
          >
            {maintastk.length > 0 ? (
              maintastk.map((item, i) => {
                return (
                  <>
                    <Col md={4} className="mt-4" key={i}>
                      <Card className="bg-transparent text-white border p-4">
                        <Card.Body>
                          <h2>{item.title}</h2>
                          <p>{item.desc}</p>
                        </Card.Body>
                        <Card.Footer>
                          <Button
                            variant="primary"
                            className="w-100"
                            onClick={() => {
                              handleDelete(i);
                            }}
                          >
                            Delete
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                  </>
                );
              })
            ) : (
              <Col className="mt-5 text-center">
                <Card>
                  <Card.Body>
                    <h1>Task Not Found</h1>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default page;
