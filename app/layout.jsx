"use client";
import "./globals.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import head from "./head";

<head />;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <main id="main" className="d-flex justify-content-start">
          <Container fluid>
            <Row>
              <Col md={2}>
                <Sidebar />
              </Col>
              <Col md={10}>
                <Header />
                {children}
                {/* <Footer /> */}
              </Col>
            </Row>
          </Container>
        </main>
      </body>
    </html>
  );
}
