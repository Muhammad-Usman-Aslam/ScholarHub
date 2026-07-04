import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/usman.png"
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaAtom,
  FaGlobe,
  FaEnvelope,
  FaUserTie,
} from "react-icons/fa";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(135deg,#0d6efd,#0a58ca)",
          color: "#fff",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={4} className="text-center mb-4 mb-lg-0">
              <img
                src={image}
                alt="Muhammad Usman"
                className="img-fluid rounded-circle shadow-lg"
                style={{
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                  border: "6px solid white",
                }}
              />
            </Col>

            <Col lg={8}>
              <h1 className="fw-bold display-5">
                Muhammad Usman Aslam
              </h1>

              <h4 className="mb-3 text-light">
                MERN Stack Developer
              </h4>

              <p className="lead">
                 Passionate about Full Stack Web Development with expertise in building
  modern, responsive, and scalable web applications. I specialize in the
  MERN Stack (MongoDB, Express.js, React.js, Node.js) and enjoy creating
  high-performance websites, RESTful APIs, and user-friendly interfaces
  that deliver seamless digital experiences.
              </p>

             <Button
  as={Link}
  to="/contact"
  variant="light"
  size="lg"
>
  <FaEnvelope className="me-2" />
  Contact Me
</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <Container className="py-5">

        {/* About Me */}
        <Row className="mb-5">
          <Col>
            <Card className="shadow border-0">
              <Card.Body className="p-4">
                <h2 className="fw-bold mb-4">
                  <FaUserTie className="me-2 text-primary" />
                  About Me
                </h2>

                <p style={{ lineHeight: "1.9" }}>
  I am <strong>Muhammad Usman Aslam</strong>, a passionate Full Stack Web
  Developer from Pakistan with expertise in building modern, responsive,
  and scalable web applications.
</p>

<p style={{ lineHeight: "1.9" }}>
  I specialize in developing high-quality websites using the MERN Stack
  (MongoDB, Express.js, React.js, and Node.js), creating intuitive user
  interfaces, secure backend systems, and efficient RESTful APIs.
</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Education */}
        <Row className="mb-5">
          <Col md={12}>
            <Card className="shadow border-0">
              <Card.Body className="p-4">

                <h2 className="fw-bold mb-4">
                  <FaGraduationCap className="text-primary me-2" />
                  Education
                </h2>

                <h5>M.Phil in Physics</h5>
                <p className="text-muted">
                  University of Agriculture Faisalabad
                </p>

                <hr />

                <h5>Bachelor's Degree</h5>
                <p className="text-muted">
                  Physics & Mathematics <br />
                  The Islamia University of Bahawalpur
                </p>

              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Skills */}

          <Col  className="g-4">
            <Card className="shadow h-100 border-0">
              <Card.Body className="p-4">

                <h2 className="fw-bold mb-4">
                  <FaLaptopCode className="text-primary me-2" />
                  Web Development
                </h2>

                <Badge bg="primary" className="m-1 p-2">
                  HTML5
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  CSS3
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  Bootstrap
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  JavaScript
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  React.js
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  Node.js
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  Express.js
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  MongoDB
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  MySQL
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  REST API
                </Badge>

                <Badge bg="primary" className="m-1 p-2">
                  Git & GitHub
                </Badge>

              </Card.Body>
            </Card>
          </Col>

          {/* <Col lg={6}>
            <Card className="shadow h-100 border-0">
              <Card.Body className="p-4">

                <h2 className="fw-bold mb-4">
                  <FaAtom className="text-primary me-2" />
                  Physics & Research
                </h2>

                <Badge bg="success" className="m-1 p-2">
                  Density Functional Theory (DFT)
                </Badge>

                <Badge bg="success" className="m-1 p-2">
                  WIEN2k
                </Badge>

                <Badge bg="success" className="m-1 p-2">
                  Materials Science
                </Badge>

                <Badge bg="success" className="m-1 p-2">
                  Computational Physics
                </Badge>

                <Badge bg="success" className="m-1 p-2">
                  Electronic Structure
                </Badge>

                <Badge bg="success" className="m-1 p-2">
                  Optical Properties
                </Badge>

                <Badge bg="success" className="m-1 p-2">
                  Perovskite Materials
                </Badge>

                <Badge bg="success" className="m-1 p-2">
                  Research Writing
                </Badge>

                <Badge bg="success" className="m-1 p-2">
                  Scientific Data Analysis
                </Badge>

              </Card.Body>
            </Card>
          </Col> */}

      

        {/* Services */}
        <Row className="mt-5">
          <Col>
            <Card className="shadow border-0">
              <Card.Body className="p-4">

                <h2 className="fw-bold mb-4">
                  <FaGlobe className="text-primary me-2" />
                  What I Do
                </h2>

                <ul style={{ lineHeight: "2" }}>
  <li>Develop modern and scalable MERN Stack web applications.</li>
  <li>Create responsive business, portfolio, and corporate websites.</li>
  <li>Build e-commerce websites with secure payment integration.</li>
  <li>Develop custom CMS, blog, and admin dashboard systems.</li>
  <li>Create secure RESTful APIs with Node.js and Express.js.</li>
  <li>Work with MongoDB and MySQL databases for efficient data management.</li>
  <li>Optimize website performance, SEO, and loading speed.</li>
  <li>Implement authentication, authorization, and data security.</li>
  <li>Provide website maintenance, updates, and technical support.</li>
</ul>

              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default About;