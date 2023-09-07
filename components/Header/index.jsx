"use client";
import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

import Link from "next/link";
const index = () => {
  return (
    <>
      {/* <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Link href="/" className="nav-link px-3">
                home
              </Link>
              <Link href="/about" className="nav-link px-3">
                about
              </Link>
              <Link href="/blog" className="nav-link px-3">
                Blog
              </Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default index;
