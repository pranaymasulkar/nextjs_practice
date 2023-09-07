"use client";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

const page = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    blogdata();
  }, []);

  const blogdata = async () => {
    try {
      let row = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      let data = await row.json();
      return setBlog(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="p-5">
        <Container>
          <Row className="d-flex justify-content-start aligne-items-center">
            <Col xs={12}>
              <h1> Our Blogs</h1>
            </Col>
            <Col md={10}>
              <Row className="d-flex justify-content-start aligne-items-center">
                {blog.map((item) => {
                  return (
                    <>
                      <Col md={10} key={item.id}>
                        <div className="card text-start p-5 my-5 bg-transparent text-white border">
                          <div className="card-body">
                            <h3>{item.id}</h3>
                            <h4 className="card-title mb-4">{item.title}</h4>
                            <p className="card-text">{item.body}</p>
                          </div>
                        </div>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default page;
