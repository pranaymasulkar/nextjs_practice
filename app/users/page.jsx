"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container, Table } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
const page = () => {
  const [userdata, setUserdata] = useState([]);

  const UserList = () => {
    axios
      .get(`https://64f9e7eb4098a7f2fc152712.mockapi.io/users`)
      .then((res) => {
        const row = res.data;
        setUserdata(row);
      });
  };
  const hnadleDelete = (id) => {
    axios
      .delete(`https://64f9e7eb4098a7f2fc152712.mockapi.io/users/${id}`)
      .then(() => {
        toast("Delete User Succsesfully");
        UserList();
      });
  };
  useEffect(() => {
    UserList();
  }, []);

  const setLocalstorage = (id, username, position) => {
    Localstorage.setItem("id", id);
    Localstorage.setItem("username", username);
    Localstorage.setItem("position", position);
  };
  return (
    <>
      <section className="p-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userdata.map((list, index) => {
                    return (
                      <>
                        <tr key={index}>
                          <td>{index}</td>
                          <td>{list.username}</td>
                          <td>{list.position}</td>
                          <td>
                            <Link href="/userpudate">
                              <Button
                                variant="info"
                                className="me-3"
                                onClick={() =>
                                  setLocalstorage(
                                    list.id,
                                    list.username,
                                    list.position
                                  )
                                }
                              >
                                Edit
                              </Button>
                            </Link>
                            <Button
                              variant="danger"
                              onClick={() => {
                                hnadleDelete(list.id);
                              }}
                            >
                              Delete
                            </Button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col xs={12} className="text-end">
              <Link href="/profile">
                <Button variant="primary">Add New User</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <ToastContainer />
    </>
  );
};

export default page;
